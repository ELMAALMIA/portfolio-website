import { motion } from "framer-motion";
import { hero } from "@/lib/data";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pt-24 md:px-10 lg:pt-32"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.8fr]">
          <div className="glass gradient-border rounded-3xl p-[1px]">
            <div className="rounded-[calc(theme(borderRadius.3xl)-4px)] bg-slate-950/70 p-8 lg:p-10">
              <span className="font-heading text-sm uppercase tracking-[0.4em] text-slate-400">Ayoub El Maalmi</span>
              <h1 className="mt-6 font-heading text-4xl leading-tight text-white md:text-5xl lg:text-[3.2rem]">
                Designing intelligent platforms that feel effortless to operate.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">{hero.summary}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ContactPill icon={<Mail className="h-4 w-4" />} label={hero.contact.email} href="mailto:elmaalmiayoub@gmail.com" />
                <ContactPill icon={<Phone className="h-4 w-4" />} label={hero.contact.phone} href="tel:+212616242462" />
                <ContactPill icon={<MapPin className="h-4 w-4" />} label={hero.contact.location} />
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
              {hero.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-700/80 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-primary-foreground hover:shadow-glow"
                >
                  {social.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
              </div>
            </div>
          </div>
          <HeroVisual />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid w-full gap-4 md:grid-cols-3"
        >
          <StatCard
            label="Automation impact"
            value="75% faster reporting"
            description="Dropwizard + Jenkins stack delivering OCI insights on demand."
          />
          <StatCard
            label="Knowledge shared"
            value="600+ engaged readers"
            description="Medium deep dives on Java debugging and hexagonal architecture."
          />
          <StatCard
            label="Tech orchestration"
            value="AI × DevOps × Cloud"
            description="LLM integrations, CI/CD pipelines, and resilient infrastructure."
          />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/35 blur-[200px]" />
        <div className="absolute left-10 top-1/2 h-[360px] w-[360px] rounded-full bg-accent/35 blur-[200px]" />
        <div className="absolute right-8 top-[20%] h-[260px] w-[260px] rounded-full bg-emerald-500/20 blur-[180px]" />
      </div>
    </section>
  );
}

interface ContactPillProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
}

function ContactPill({ icon, label, href }: ContactPillProps) {
  const content = (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-4 py-2 text-sm text-slate-200">
      {icon}
      {label}
    </span>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      className="hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {content}
    </a>
  );
}

function StatCard({
  label,
  value,
  description
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="glass flex flex-col rounded-3xl border border-slate-800/50 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:shadow-glow">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-4 font-heading text-2xl text-white">{value}</p>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
    </div>
  );
}

