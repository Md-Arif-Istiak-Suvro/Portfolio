"use client";
import React, { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const activeErrors: Record<string, string> = {};
    if (!formState.name) activeErrors.name = "Identification parameter required.";
    if (!formState.email || !/\S+@\S+\.\S+/.test(formState.email)) activeErrors.email = "Valid communication node email required.";
    if (!formState.message) activeErrors.message = "Message parameters missing.";
    return activeErrors;
  };

  /* ==========================================================================
     FORMSPREE BACKEND INTEGRATION LAYER
     ========================================================================== */
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validatedErrors = validate();
    
    if (Object.keys(validatedErrors).length === 0) {
      setErrors({});
      setIsSubmitting(true);

      try {
        const response = await fetch("https://formspree.io/f/mkoalaqv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            subject: formState.subject,
            message: formState.message
          })
        });

        if (response.ok) {
          setSubmitted(true);
          setFormState({ name: "", email: "", subject: "", message: "" });
        } else {
          setErrors({ global: "Transmission dropped by remote gateway. Please try again." });
        }
      } catch (error) {
        setErrors({ global: "Network connection error. Check operational linkage." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validatedErrors);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="Initiate Connect" subtitle="Contact" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-4">
          {[
            { icon: <Phone size={18} />, title: "Phone Number", details: "+880 1704602418" },
            { icon: <Mail size={18} />, title: "Email", details: "24-59160-3@student.aiub.edu" },
            { icon: <MapPin size={18} />, title: "Location", details: "Dhaka, Bangladesh" }
          ].map((node, i) => (
            <GlassCard key={i} className="flex items-center gap-4 p-5">
              <div className="text-[#FF5E00]">{node.icon}</div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-black text-[#111111]/40">{node.title}</div>
                <div className="text-sm font-bold">{node.details}</div>
              </div>
            </GlassCard>
          ))}
          
          {/* Map Image */}
          <div className="h-48 w-full rounded-3xl overflow-hidden border border-white/10 relative">
            <img src="/images/map.png" alt="Location map" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <GlassCard hoverEffect={false}>
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold tracking-tight text-[#FF5E00] mb-2">Transmission Acknowledged</h3>
                <p className="text-sm text-[#111111]/70">Communication node handshake complete. Secure response pending sequence tracking.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {errors.global && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-500 font-semibold">
                    {errors.global}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-black mb-2 text-[#111111]/60">Your Identity</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 rounded-xl bg-white/50 border border-black/[0.08] text-sm focus:outline-none focus:border-[#FF5E00]" 
                      placeholder="Name or Enterprise"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      disabled={isSubmitting}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-semibold mt-1 block">{errors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-black mb-2 text-[#111111]/60">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-4 rounded-xl bg-white/50 border border-black/[0.08] text-sm focus:outline-none focus:border-[#FF5E00]" 
                      placeholder="address@domain.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-semibold mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-black mb-2 text-[#111111]/60">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border border-black/[0.08] text-sm focus:outline-none focus:border-[#FF5E00]" 
                    placeholder="Project specs, interview intent..."
                    value={formState.subject}
                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-black mb-2 text-[#111111]/60">Message</label>
                  <textarea 
                    rows={5} 
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border border-black/[0.08] text-sm focus:outline-none focus:border-[#FF5E00] resize-none" 
                    placeholder="Enter your message here..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    disabled={isSubmitting}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-semibold mt-1 block">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF5E00] to-[#FFB347] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-orange-500/10 disabled:opacity-50 transition-opacity cursor-pointer"
                >
                  {isSubmitting ? "Transmitting..." : "Send Message"}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}