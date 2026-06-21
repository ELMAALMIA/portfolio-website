"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "articles", label: "Writing" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export function FloatingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-3 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-xl px-5 py-2.5 transition-all",
        scrolled ? "border border-slate-800/50 bg-slate-950/80 backdrop-blur-xl shadow-lg" : "bg-transparent"
      )}
    >
      <Link href="/" className="code-text text-sm tracking-wider text-primary hover:text-primary-light transition-colors">
        AEM
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-slate-800/40 hover:text-white"
          >
            {section.label}
          </a>
        ))}
      </nav>

      <button
        className="md:hidden rounded-md p-1.5 hover:bg-slate-800/40 transition"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {open ? <X className="h-5 w-5 text-slate-300" /> : <Menu className="h-5 w-5 text-slate-300" />}
      </button>

      {open && (
        <nav className="absolute right-3 top-14 flex w-44 flex-col gap-0.5 rounded-xl border border-slate-800/50 bg-slate-950/95 backdrop-blur-xl p-2 shadow-xl md:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-md px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-slate-800/40 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
