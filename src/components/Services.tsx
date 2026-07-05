"use client";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { Code2, Monitor, Database, Layers, Webhook } from "lucide-react";

const operationalServices = [
  { icon: <Code2 size={28} className="text-[#FF5E00]" />, title: "Web Development", desc: "Building highly efficient, modern, and performance-optimized single-page web applications using Next.js and robust server configurations." },
  { icon: <Monitor size={28} className="text-[#FF5E00]" />, title: "Desktop Application Systems", desc: "Formulating clean, secure desktop applications built with strict architectural separation models for client interfaces." },
  { icon: <Database size={28} className="text-[#FF5E00]" />, title: "Relational Database Design", desc: "Constructing high-tier normal-form query storage matrix maps and indexing mechanisms using modern SQL implementations." },
  { icon: <Layers size={28} className="text-[#FF5E00]" />, title: "Premium UI/UX Adaptations", desc: "Developing elite smooth interfaces based on modular components, elegant animation metrics, and pristine user flows." },
  { icon: <Webhook size={28} className="text-[#FF5E00]" />, title: "RESTful API Integration", desc: "Configuring end-to-end data route pipelines featuring strict token structures, secure access keys, and responsive validation layers." }
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="Operational Matrix" subtitle="Services Provided" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {operationalServices.map((service, idx) => (
          <GlassCard key={idx} className="flex flex-col justify-between border border-transparent hover:border-[#FF5E00]/15">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5E00]/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">{service.title}</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">{service.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}