"use client";

import { motion } from "framer-motion";

export function AnimatedDivider() {
  return (
    <div
      className="mx-auto flex w-full max-w-5xl items-center justify-center px-6 md:px-8"
      aria-hidden="true"
    >
      <div className="relative flex w-full items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/40 to-slate-700/20" />

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center gap-1.5"
        >
          <span className="h-1 w-1 rounded-full bg-primary/60" />
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <span className="h-1 w-1 rounded-full bg-accent/60" />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-700/40 to-slate-700/20" />
      </div>
    </div>
  );
}
