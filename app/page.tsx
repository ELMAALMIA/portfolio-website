"use client";

import { Hero } from "@/components/hero";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectShowcase } from "@/components/project-showcase";
import { MediumHighlights } from "@/components/medium-highlights";
import { SkillRadar } from "@/components/skill-radar";
import { Certifications } from "@/components/certifications";
import { EducationTimeline } from "@/components/education-timeline";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 pb-12">
      <Hero />
      <motion.hr
        className="mx-auto h-px w-full max-w-5xl border-0 bg-gradient-to-r from-transparent via-slate-700 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
      <ExperienceTimeline />
      <SkillRadar />
      <ProjectShowcase />
      <MediumHighlights />
      <Certifications />
      <EducationTimeline />
      <ContactSection />
      <Footer />
    </main>
  );
}

