"use client";

import { certifications } from "@/lib/data";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Link from "next/link";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto mt-20 w-full max-w-5xl px-6 md:px-8">
      <header className="mb-10 flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-primary/80">
          <Award className="h-5 w-5 text-primary" /> Certifications
        </span>
        <h2 className="font-heading text-3xl text-white md:text-4xl">Continuous learning and technical depth</h2>
        <p className="max-w-2xl text-slate-300">
          Credentials that validate my approach to cloud, DevOps, and Java craftsmanship while keeping solutions audit-ready.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <motion.article
            key={certification.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl border border-slate-800/60 p-5"
          >
            <header>
              <h3 className="font-heading text-lg text-white">{certification.title}</h3>
              <p className="text-sm text-slate-400">{certification.issuer}</p>
            </header>
            <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
              <span>Issued: {certification.issued}</span>
              {certification.expiry && <span>Expires: {certification.expiry}</span>}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
              {certification.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-700 px-3 py-1">
                  {skill}
                </span>
              ))}
            </div>
            {certification.url && (
              <Link
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-semibold text-primary hover:text-primary/70"
              >
                View credential
              </Link>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

