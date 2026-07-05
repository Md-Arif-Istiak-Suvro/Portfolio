"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { TimelineContainer, TimelineEvent } from "./ui/Timeline"; // <-- Imported here

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

const educationData: TimelineItem[] = [
  { year: "Ongoing", title: "Bachelor's Degrees", institution: "B.Sc. in Computer Science & Engineering", description: "American International University-Bangladesh (AIUB)" },
  { year: "2022", title: "Higher Secondary Certificate (HSC)", institution: "Science Group", description: "Cantonment Public School and College Lalmonirhat" },
  { year: "2020", title: "Secondary School Certificate (SSC)", institution: "Science Group", description: "Medical College Public School, Rangpur" }
];

const experienceData: TimelineItem[] = [
  { year: "2025 - Present", title: "Full Stack Open Source Contributor", institution: "Independent", description: "Architected modern functional responsive features and fixed deep integration bottlenecks across framework distributions." },
  { year: "2024", title: "Freelance Software Architecture & Deployment", institution: "Contractual", description: "Engineered scalable custom local architectures featuring bKash and Nagad custom verification payment systems." }
];

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<"edu" | "exp">("edu");
  const activeData = activeTab === "edu" ? educationData : experienceData;

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading title="Journey" subtitle="Timeline Matrix" />

      {/* Luxury Dynamic Tab Selector Container */}
      <div className="flex border-b border-black/[0.08] mb-16 relative">
        <button 
          onClick={() => setActiveTab("edu")}
          className={`flex-1 pb-4 text-sm uppercase tracking-[0.2em] font-black transition-colors ${activeTab === "edu" ? "text-[#111111]" : "text-[#111111]/40"}`}
        >
          Education Map
        </button>
        <button 
          onClick={() => setActiveTab("exp")}
          className={`flex-1 pb-4 text-sm uppercase tracking-[0.2em] font-black transition-colors ${activeTab === "exp" ? "text-[#111111]" : "text-[#111111]/40"}`}
        >
          Engineering Experience
        </button>
        <motion.div 
          className="absolute bottom-0 h-[2px] bg-[#FF5E00]" 
          animate={{ x: activeTab === "edu" ? "0%" : "100%", width: "50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Premium Multi-Track Timeline Matrix Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          <TimelineContainer>
            {activeData.map((item, index) => (
              <TimelineEvent
                key={index}
                time={item.year}
                title={item.title}
                subtitle={item.institution}
              >
                {item.description}
              </TimelineEvent>
            ))}
          </TimelineContainer>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}