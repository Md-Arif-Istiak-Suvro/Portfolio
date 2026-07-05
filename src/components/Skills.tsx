"use client";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const skillsMatrix: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "React / Next.js 15", level: 88 },
      { name: "C# / .NET Core", level: 75 },
      { name: "Java", level: 70 },
      { name: "Python", level: 80 }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js / Express", level: 85 },
      { name: "MySQL / SQL Server", level: 82 },
      { name: "REST APIs Architecture", level: 87 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-3xl">
      <SectionHeading title="Technical Core" subtitle="Expertise Matrix" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {skillsMatrix.map((cat, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-white/40 border border-black/[0.04]">
            <h3 className="text-lg font-black tracking-wider uppercase mb-8 text-[#111111]/70 border-b border-black/[0.05] pb-2">
              {cat.category}
            </h3>
            
            <div className="space-y-6">
              {cat.items.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between text-sm font-bold tracking-tight mb-2">
                    <span>{skill.name}</span>
                    <span className="text-[#FF5E00]">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-black/[0.06] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-gradient-to-r from-[#FF5E00] to-[#FFB347] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}