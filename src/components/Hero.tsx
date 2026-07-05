"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button"; // <-- Imported here

const roles = ["Software Engineer", "Full Stack Developer", "Problem Solver", "UI/UX Enthusiast"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className="min-h-[calc(100vh-5rem)] max-w-7xl mx-auto px-6 flex flex-col justify-center relative py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Hero Photo with Orange Brush Background */}
        <div className="lg:col-span-4 order-2 lg:order-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[300px] h-[420px]"
          >
            {/* Ambient orange glow */}
            <div className="absolute -top-8 -right-8 w-[200px] h-[200px] rounded-full bg-[#FF5E00]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-[160px] h-[160px] rounded-full bg-[#FFB347]/15 blur-3xl pointer-events-none" />

            {/* SVG brush stroke blobs — orange, matching portfolio theme */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 110 C10 45 95 -5 185 18 C262 38 305 115 292 195 C278 275 215 335 148 348 C75 362 8 312 3 242 C-2 175 38 170 25 110Z" fill="rgba(255,94,0,0.14)" />
              <path d="M45 130 C30 65 115 12 200 38 C275 62 312 142 295 222 C276 302 208 354 138 362 C62 370 -4 314 4 240 C10 170 58 190 45 130Z" stroke="rgba(255,94,0,0.32)" strokeWidth="1.5" fill="none" />
              {/* Top-right accent stroke */}
              <path d="M215 15 C238 8 268 18 272 38 C276 55 255 66 234 60 C215 55 208 38 215 15Z" fill="rgba(255,94,0,0.55)" />
              {/* Bottom-left accent stroke */}
              <path d="M18 355 C30 342 52 350 54 368 C56 382 36 388 22 380 C10 373 8 364 18 355Z" fill="rgba(255,179,71,0.5)" />
              {/* Dot accents */}
              <circle cx="270" cy="78" r="5.5" fill="rgba(255,94,0,0.75)" />
              <circle cx="22"  cy="390" r="4"   fill="rgba(255,179,71,0.65)" />
              <circle cx="288" cy="348" r="3.5" fill="rgba(255,94,0,0.55)" />
              <circle cx="10"  cy="160" r="2.5" fill="rgba(255,94,0,0.4)" />
            </svg>

            {/* Photo */}
            <div className="relative z-10 w-[272px] h-[400px] mx-auto rounded-[28px] overflow-hidden shadow-2xl shadow-black/60 border border-white/8">
              <img src="/images/picture.png" alt="Arif Istiak" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_-60px_60px_rgba(18,12,10,0.5)]" />
            </div>

            {/* Bottom orange accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[150px] h-[3px] bg-gradient-to-r from-transparent via-[#FF5E00] to-transparent rounded-full"
            />

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
              className="absolute -bottom-4 -right-4 z-20 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#FF5E00] to-[#FFB347] flex flex-col items-center justify-center shadow-lg shadow-[#FF5E00]/40"
            >
              <span className="text-white font-black text-2xl leading-none">3+</span>
              <span className="text-white/85 text-[8px] font-bold tracking-widest uppercase mt-0.5">Years Exp.</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Center Typography & Info Component */}
        <div className="lg:col-span-5 text-left order-1 lg:order-2 flex flex-col justify-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.4em] font-bold text-[#FF5E00] uppercase mb-4">
            Available for Internships
          </motion.p>
       <motion.h1 
  initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }} 
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black tracking-tighter uppercase leading-[1.05] text-white"
>
  HI, I&apos;M <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 whitespace-nowrap">Md<span className="text-[#FF5E00]">.</span> Arif Istiak Suvro</span>
</motion.h1>
          
          <div className="h-12 flex items-center mt-4 mb-8">
            <span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-300">
              {currentText}
            </span>
            <span className="w-[2px] h-6 bg-[#FF5E00] ml-1 animate-pulse" />
          </div>

          {/* Luxury Buttons Implemented Here */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#contact">
              <Button variant="primary">Hire Me</Button>
            </a>
            <a href="/resume.pdf" download>
              <Button variant="secondary">Download Resume</Button>
            </a>
          </div>
        </div>

        {/* Right Side: Circular View Portfolio CTA & Social Links */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-between h-full py-6 order-3">
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="w-36 h-36 rounded-full border border-[#FF5E00]/30 flex flex-col items-center justify-center relative p-4 group bg-white/5 backdrop-blur-sm shadow-md"
          >
            <div className="absolute inset-2 border border-dashed border-[#FF5E00]/20 rounded-full group-hover:rotate-45 transition-transform duration-700" />
            <ArrowUpRight className="text-[#FF5E00] mb-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
            <span className="text-[10px] uppercase font-black tracking-widest text-center text-white">View My Portfolio</span>
          </motion.a>

          <div className="flex flex-row gap-4 mt-12 lg:mt-24">
            {[
              {
                href: "mailto:24-59160-3@student.aiub.edu",
                label: "Email",
                icon: <Mail size={18} />,
              },
              {
                href: "https://github.com/Md-Arif-Istiak-Suvro",
                label: "GitHub",
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                href: "https://www.instagram.com/su_v_ro_/?hl=en",
                label: "Instagram",
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                href: "https://www.facebook.com/mdarifistiak.suvro",
                label: "Facebook",
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-[#FF5E00] hover:border-[#FF5E00]/50 hover:shadow-[0_0_12px_rgba(255,94,0,0.25)] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-20 border-y border-white/5 py-4 bg-white/[0.02] backdrop-blur-xs overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-xs uppercase tracking-[0.5em] font-black text-white/20">
          <span>NEXTJS 15</span> <span>•</span> <span>TYPESCRIPT</span> <span>•</span> <span>FULL STACK DEVELOPER</span> <span>•</span> <span>UI/UX OPTIMIZATION</span> <span>•</span>
          <span>NEXTJS 15</span> <span>•</span> <span>TYPESCRIPT</span> <span>•</span> <span>FULL STACK DEVELOPER</span> <span>•</span> <span>UI/UX OPTIMIZATION</span> <span>•</span>
        </div>
      </div>
    </section>
  );
}