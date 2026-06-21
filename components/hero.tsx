"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/data";
import { Mail, MapPin, Phone, ArrowUpRight, Download, Code2 } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-24 md:px-10 lg:pt-28"
      >
        {/* Top badge */}
        <motion.div variants={item} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="code-text text-xs uppercase tracking-[0.3em] text-primary">{hero.name}</p>
            <p className="text-xs text-slate-400">Available for opportunities</p>
          </div>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <motion.h1 variants={item} className="font-heading text-4xl leading-[1.1] text-white md:text-5xl lg:text-[3.4rem]">
              Fullstack Developer
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Java / Kotlin
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-lg leading-relaxed text-slate-300 md:text-xl">
              <span className="code-text text-primary/80">Spring Boot</span> backends,{" "}
              <span className="code-text text-java-kotlin">Kotlin</span> mobile,{" "}
              cloud-native deployments. Building reliable services with clean code and measurable impact.
            </motion.p>

            <motion.p variants={item} className="max-w-xl text-sm leading-relaxed text-slate-400">
              {hero.summary}
            </motion.p>

            {/* Contact pills */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <ContactPill icon={<Mail className="h-3.5 w-3.5" />} label={hero.contact.email} href={`mailto:${hero.contact.email}`} />
              <ContactPill icon={<Phone className="h-3.5 w-3.5" />} label={hero.contact.phone} href={`tel:${hero.contact.phone.replace(/\s/g, "")}`} />
              <ContactPill icon={<MapPin className="h-3.5 w-3.5" />} label={hero.contact.location} />
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href={hero.cvUrl || "/cv.pdf"}
                download
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-light hover:shadow-glow"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              {hero.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/40 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-primary/40 hover:text-white"
                >
                  {social.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div variants={item} className="hidden lg:block">
            <HeroVisual />
          </motion.div>

          {/* Mobile fallback pills */}
          <motion.div variants={item} className="flex flex-wrap gap-2 lg:hidden">
            {["Java", "Kotlin", "Spring Boot", "PostgreSQL", "Docker", "REST APIs"].map((skill) => (
              <span
                key={skill}
                className="code-text rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div variants={item} className="grid w-full gap-4 md:grid-cols-3">
          <StatCard
            label="Current Stack"
            value="Java + Kotlin + Spring Boot"
            description="Backend-first with fullstack capabilities"
          />
          <StatCard
            label="Production Experience"
            value="Oracle  &middot;  2SIS  &middot;  Freelance"
            description="Microservices, OCI automation, CI/CD"
          />
          <StatCard
            label="Impact"
            value="90% less manual work"
            description="Automated reporting & data pipelines at Oracle"
          />
        </motion.div>
      </motion.div>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[200px]" />
        <div className="absolute right-0 top-[15%] h-[300px] w-[300px] rounded-full bg-accent/[0.04] blur-[180px]" />
      </div>
    </section>
  );
}

function ContactPill({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const content = (
    <span className="inline-flex items-center gap-2 rounded-md bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition hover:text-white">
      {icon}
      {label}
    </span>
  );
  if (!href) return content;
  return <a href={href}>{content}</a>;
}

function StatCard({ label, value, description }: { label: string; value: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-primary/20 hover:shadow-glow">
      <p className="code-text text-[0.65rem] uppercase tracking-[0.2em] text-primary/70">{label}</p>
      <p className="mt-2 font-heading text-lg text-white" dangerouslySetInnerHTML={{ __html: value }} />
      <p className="mt-1 text-xs text-slate-400">{description}</p>
    </div>
  );
}
