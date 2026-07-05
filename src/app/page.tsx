"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceEducation from "@/components/ExperienceEducation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-[#FF5E00] selection:text-white">
      {/* Mouse Follow Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 hidden md:block transition-transform duration-100 ease-out"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 94, 0, 0.04), transparent 80%)`
        }}
      />

      {/* Global Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FF5E00] to-[#FFB347] z-50 origin-left" style={{ scaleX }} />

      {/* Luxury Navigation Header */}
      <nav className="fixed top-0 w-full z-40 glass-panel border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-black tracking-tighter text-[#111111]">
            ARIF ISTIAK<span className="text-[#FF5E00]">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {["About", "Experience", "Skills", "Projects", "Services", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#FF5E00] transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#F6F1E7] border-b border-black/[0.1] flex flex-col p-6 gap-4 font-bold"
          >
            {["About", "Experience", "Skills", "Projects", "Services", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg py-2 border-b border-black/[0.05]"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Section Wrappers */}
      <div className="pt-20">
        <Hero />
        <About />
        <ExperienceEducation />
        <Skills />
        <Projects />
        <Achievements />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}