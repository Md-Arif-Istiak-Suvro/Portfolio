"use client";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof motion.button> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`
        relative px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase 
        overflow-hidden transition-all duration-300 group
        ${isPrimary
              ? "bg-gradient-to-r from-[#FF5E00] to-[#FFB347] text-white shadow-lg shadow-orange-500/10"
              : "border border-black/10 text-[#111111] hover:bg-black/5"
            }
        ${className}
      `}
     {...props}
    >
      {/* Premium background glare effect on hover */}
      {isPrimary && (
        <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}