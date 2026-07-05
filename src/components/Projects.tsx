"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
interface Project {
  title: string;
  category: "web" | "desktop" | "mobile" | "ai";
  desc: string;
  stack: string[];
  gitLink: string;
  liveLink: string;
  image?: string;
}

const projectsCollection: Project[] = [
   {
    title: "Exam management System",
    category: "desktop",
    desc: "Developed a comprehensive Exam Management System designed to handle administrative testing procedures efficiently. This project showcases advanced version control management and structural organization, utilizing a fully tailored .git architectural environment to maintain absolute database and codebase integrity.",
    stack: ["C#", ".NET Core", "Microsoft SQL Server"],
    gitLink: "https://github.com/Md-Arif-Istiak-Suvro/Exam-Management-System",
    liveLink: "#",
    image: "/images/ExamMngSys.png"
  },
  {
    title: "Premium Hostel Automation Platform",
    category: "web",
    desc: "A production-grade facility management dashboard featuring deep analytical metrics tracking, real-time user-to-admin secure credential flows, and cross-platform verification frameworks.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    gitLink: "##",
    liveLink: "#"
  },
 
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "desktop" | "mobile" | "ai">("all");

  const filtered = filter === "all" ? projectsCollection : projectsCollection.filter(p => p.category === filter);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="Selected Works" subtitle="Portfolio Collection" />

      {/* Category Dynamic Filter Links */}
      <div className="flex flex-wrap gap-3 mb-12">
        {(["all", "web", "desktop", "mobile", "ai"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${filter === cat ? "bg-[#111111] text-white" : "bg-white/50 border border-black/[0.05] text-[#111111]/60 hover:bg-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={idx}
            >
              <GlassCard className="h-full flex flex-col justify-between group overflow-hidden relative border border-transparent hover:border-[#FF5E00]/20">
                <div>
                  <div className="h-48 w-full rounded-2xl mb-6 relative overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-black/[0.03] to-neutral-200 flex items-center justify-center text-xs tracking-widest text-[#111111]/30 font-bold uppercase">
                        [ Project Interface Mockup ]
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-black tracking-tight mb-3 group-hover:text-[#FF5E00] transition-colors">{project.title}</h3>
                  <p className="text-sm text-[#111111]/70 leading-relaxed mb-6">{project.desc}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] uppercase font-bold tracking-wider bg-black/[0.04] text-[#111111]/60 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 border-t border-black/[0.05] pt-4">
                    <a href={project.gitLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white/50 hover:text-white transition-colors">
                      <GithubIcon />
                    </a>
                    <a href={project.liveLink} className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#FF5E00] hover:text-[#FF5E00]/80 transition-colors">
                      <ExternalLink size={14} /> Live Showcase
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}