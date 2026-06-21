import { Hero } from "@/components/hero";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectShowcase } from "@/components/project-showcase";
import { MediumHighlights } from "@/components/medium-highlights";
import { SkillRadar } from "@/components/skill-radar";
import { Certifications } from "@/components/certifications";
import { EducationTimeline } from "@/components/education-timeline";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { AnimatedDivider } from "@/components/animated-divider";

export default function Home() {
  return (
    <main id="main-content" className="relative flex flex-col gap-16 pb-12">
      <Hero />
      <AnimatedDivider />
      <ExperienceTimeline />
      <ProjectShowcase />
      <SkillRadar />
      <Certifications />
      <MediumHighlights />
      <EducationTimeline />
      <ContactSection />
      <Footer />
    </main>
  );
}

