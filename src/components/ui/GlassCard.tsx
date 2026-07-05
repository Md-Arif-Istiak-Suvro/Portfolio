"usemain client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = "", hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8, boxShadow: "0 20px 40px rgba(255, 94, 0, 0.08)" } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel rounded-3xl p-6 md:p-8 transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}