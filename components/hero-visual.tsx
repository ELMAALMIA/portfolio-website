"use client";

import { InnovationChart } from "@/components/hero-visual/innovation-chart";

export function HeroVisual() {
  return (
    <div className="relative flex h-[340px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 md:h-[380px]">
      <InnovationChart />
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
    </div>
  );
}

