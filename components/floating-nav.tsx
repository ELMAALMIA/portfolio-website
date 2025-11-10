"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "articles", label: "Articles" },
  { id: "certifications", label: "Certifications" },
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
        "fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 transition-all",
        scrolled ? "glass shadow-lg" : "bg-transparent"
      )}
    >
      <Link href="/" className="font-heading text-lg tracking-wide text-primary-foreground">
        AYB
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            {section.label}
          </a>
        ))}
      </nav>
      <button
        className="md:hidden"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {open ? <X className="h-6 w-6 text-slate-200" /> : <Menu className="h-6 w-6 text-slate-200" />}
      </button>
      {open && (
        <nav className="absolute right-4 top-16 flex w-48 flex-col gap-3 rounded-2xl bg-slate-900/95 p-4 shadow-xl md:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
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

