"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineEventProps {
  time: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function TimelineContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative border-l border-black/[0.08] pl-6 md:pl-10 ml-4 my-6">
      {children}
    </div>
  );
}

export function TimelineEvent({ time, title, subtitle, children }: TimelineEventProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14 last:mb-0 relative group"
    >
      {/* High-End Pulsing Orbit Node Indicator */}
      <div className="absolute -left-[35px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-[#F6F1E7] border-2 border-[#FF5E00] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF5E00]" />
      </div>

      {/* Decorative timeline segment line hover pop */}
      <div className="absolute -left-[35px] md:-left-[49px] top-5 -bottom-14 w-[2px] bg-gradient-to-b from-[#FF5E00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden last:block" />

      <div className="inline-flex items-center gap-2 mb-3">
        <span className="text-[10px] font-black tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3 py-1 rounded-full uppercase">
          {time}
        </span>
      </div>

      <h4 className="text-xl font-black tracking-tight text-[#111111] group-hover:text-[#FF5E00] transition-colors duration-300">
        {title}
      </h4>
      
      <p className="text-xs font-bold tracking-wider uppercase text-[#111111]/40 mb-3">
        {subtitle}
      </p>

      <div className="text-sm text-[#111111]/70 leading-relaxed max-w-2xl">
        {children}
      </div>
    </motion.div>
  );
}