"use client";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/[0.05] bg-white/10 backdrop-blur-md relative mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-base font-black tracking-tighter uppercase">
            Md<span className="text-[#FF5E00]">.</span> Arif Istiak Suvro
          </span>
          <p className="text-xs text-[#111111]/50 mt-1">© 2026 MAIS Workspace. All rights reserved.</p>
        </div>

        <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-[#111111]/60">
          <a href="#about" className="hover:text-[#FF5E00] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#FF5E00] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#FF5E00] transition-colors">Contact</a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-[#111111] hover:text-[#FF5E00] shadow-xs hover:scale-105 transition-all"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}