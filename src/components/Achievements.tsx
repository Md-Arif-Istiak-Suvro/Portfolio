"use client";
import { useCounter } from "@/hooks/useCounter";
import GlassCard from "./ui/GlassCard";

interface CounterCardProps {
  target: number;
  suffix?: string;
  label: string;
}

function CounterCard({ target, suffix = "", label }: CounterCardProps) {
  const { count, ref } = useCounter(target);
  return (
    <GlassCard className="text-center py-10">
      <div ref={ref} className="text-4xl md:text-5xl font-black tracking-tighter text-[#111111] mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest font-bold text-[#111111]/50">{label}</div>
    </GlassCard>
  );
}

export default function Achievements() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <CounterCard target={25} suffix="+" label="Projects Completed" />
        <CounterCard target={15} suffix="+" label="Certificates Earned" />
        <CounterCard target={250} suffix="+" label="Algorithmic Submissions" />
        <CounterCard target={5} suffix="+" label="Hackathons & Events" />
      </div>
    </section>
  );
}