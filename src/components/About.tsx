"use client";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { BookOpen, Code2, Cpu, Trophy } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { icon: <BookOpen className="text-[#FF5E00]" />, title: "Continuous", desc: "Years Learning" },
    { icon: <Code2 className="text-[#FF5E00]" />, title: "25+", desc: "Projects Built" },
    { icon: <Cpu className="text-[#FF5E00]" />, title: "12+", desc: "Tech Stack Tools" },
    { icon: <Trophy className="text-[#FF5E00]" />, title: "Multiple", desc: "Achievements" },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="About Me" subtitle="Introduction" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 h-[450px] rounded-3xl overflow-hidden shadow-lg relative">
          <Image
            src="/images/Picture2.png"
            alt="Md Arif Istiak Suvro"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4">Passionate Software Engineering Student Building Modern Digital Solutions</h3>
            <p className="text-base text-[#111111]/80 leading-relaxed mb-6">
              I am Md Arif Istiak Suvro, a dedicated Computer Science & Engineering student at American International University-Bangladesh (AIUB). I am passionate about software development, problem-solving, and creating innovative digital experiences. My interests include full-stack web development, desktop application development, database management, and modern software engineering practices.

I enjoy transforming ideas into functional and user-friendly applications while continuously exploring emerging technologies. Through academic projects and personal initiatives, I strive to build scalable, efficient, and impactful software solutions that address real-world challenges.
            </p>
            <div className="p-6 rounded-2xl bg-white/40 border border-black/[0.04] mb-8">
              <h4 className="font-bold uppercase tracking-wider text-xs text-[#FF5E00] mb-2">Education Profile</h4>
              <p className="text-sm font-semibold">American International University-Bangladesh (AIUB)</p>
              <p className="text-xs text-[#111111]/60">B.Sc. in Computer Science & Engineering</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <GlassCard key={i} className="flex flex-col items-center text-center p-4">
                <div className="mb-2">{stat.icon}</div>
                <span className="text-lg font-black tracking-tight">{stat.title}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#111111]/50">{stat.desc}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}