"use client";

import { motion } from "framer-motion";

const arcVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.2, delay, ease: "easeInOut" }
  })
};

const pulseVariants = {
  animate: {
    opacity: [0.25, 0.9, 0.25],
    scale: [0.9, 1.05, 0.9],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

const sweepVariants = {
  animate: {
    rotate: [0, 360],
    transition: { duration: 22, repeat: Infinity, ease: "linear" }
  }
};

const blipVariants = {
  animate: {
    scale: [0.8, 1.2, 0.8],
    opacity: [0.5, 1, 0.5],
    transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 }
  }
};

const gaugeVariants = {
  animate: {
    strokeDashoffset: [220, 40, 220],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
  }
};

const orbitNodes = Array.from({ length: 14 }).map((_, index) => ({
  angle: (index / 14) * Math.PI * 2,
  radius: 120 + (index % 4) * 18,
  delay: index * 0.12
}));

const ribbons = [
  { d: "M160 220 C200 160 280 160 320 220", color: "#38bdf8" },
  { d: "M150 240 C220 180 300 200 340 250", color: "#22d3ee" },
  { d: "M170 260 C230 220 310 230 350 270", color: "#9333ea" }
];

export function InnovationChart() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.18),transparent_62%)]"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg viewBox="0 0 600 360" className="relative h-full w-full text-white">
        <defs>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#2563eb" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="bugRadar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
          <linearGradient id="resolutionRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* outer grid */}
        <motion.g variants={sweepVariants} animate="animate" origin="300 180">
          {[70, 110, 150, 190].map((radius) => (
            <motion.circle
              key={`grid-${radius}`}
              cx="300"
              cy="180"
              r={radius}
              stroke="rgba(148,163,184,0.18)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </motion.g>

        {/* sweeping arc */}
        <motion.circle
          cx="300"
          cy="180"
          r="185"
          stroke="rgba(59,130,246,0.18)"
          strokeWidth="18"
          strokeDasharray="180 580"
          strokeLinecap="round"
          fill="none"
          variants={sweepVariants}
          animate="animate"
        />

        {/* orbit nodes */}
        {orbitNodes.map((node, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={300 + Math.cos(node.angle) * node.radius}
            cy={180 + Math.sin(node.angle) * node.radius * 0.8}
            r={7 + (index % 3)}
            fill={index % 3 === 0 ? "#22d3ee" : index % 3 === 1 ? "#38bdf8" : "#a855f7"}
            animate={{ opacity: [0.4, 0.95, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3.2, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* dynamic ribbons */}
        {ribbons.map((ribbon, index) => (
          <motion.path
            key={`ribbon-${index}`}
            d={ribbon.d}
            fill="none"
            stroke={ribbon.color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeOpacity="0.55"
            variants={arcVariants}
            initial="hidden"
            animate="visible"
            custom={0.4 + index * 0.2}
          />
        ))}

        {/* bug radar */}
        <motion.circle
          cx="300"
          cy="180"
          r="84"
          fill="rgba(15,23,42,0.9)"
          stroke="rgba(59,130,246,0.45)"
          strokeWidth="3"
        />
        <motion.circle
          cx="300"
          cy="180"
          r="58"
          fill="rgba(30,64,175,0.25)"
          stroke="rgba(59,130,246,0.35)"
          strokeWidth="2"
        />

        <motion.circle
          cx="300"
          cy="180"
          r="95"
          stroke="url(#bugRadar)"
          strokeWidth="6"
          strokeDasharray="220"
          strokeDashoffset="220"
          strokeLinecap="round"
          fill="none"
          variants={gaugeVariants}
          animate="animate"
        />

        {/* innovation core */}
        <motion.circle cx="300" cy="180" r="44" fill="url(#coreGradient)" variants={pulseVariants} animate="animate" filter="url(#softGlow)" />

        {/* bug indicator */}
        <motion.g transform="translate(300,180)">
          <motion.circle
            r="12"
            fill="#f97316"
            stroke="#ea580c"
            strokeWidth="2"
            variants={blipVariants}
            animate="animate"
          />
          <motion.path d="M -9 0 L 9 0" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
          <motion.path d="M 0 -9 L 0 9" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
        </motion.g>

        {/* resolution ticker */}
        <motion.rect
          x="232"
          y="248"
          width="136"
          height="44"
          rx="14"
          fill="url(#resolutionRibbon)"
          filter="url(#softGlow)"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.text x="248" y="276" fill="white" fontSize="18" fontWeight="700">
          Resolved 98.7%
        </motion.text>

        {/* timeline markers */}
        {[0, 1, 2].map((index) => (
          <motion.g key={`marker-${index}`} transform={`translate(${420 + index * 54}, 126)`}>
            <motion.rect width="42" height="120" rx="12" fill="rgba(15,23,42,0.8)" stroke="rgba(59,130,246,0.45)" strokeWidth="2" />
            <motion.rect
              x="10"
              y={index === 0 ? 56 : index === 1 ? 36 : 28}
              width="22"
              height={index === 0 ? 48 : index === 1 ? 72 : 82}
              rx="11"
              fill={index === 0 ? "#38bdf8" : index === 1 ? "#22d3ee" : "#a855f7"}
              animate={{ height: [20, index === 0 ? 48 : index === 1 ? 72 : 82, 20] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
            />
          </motion.g>
        ))}

        {/* annotation badges */}
        <motion.g transform="translate(86,84)" opacity="0.92">
          <motion.rect x="0" y="0" width="150" height="52" rx="16" fill="rgba(15,23,42,0.85)" stroke="rgba(148,163,184,0.2)" />
          <motion.text x="18" y="30" fill="#f1f5f9" fontSize="16" fontWeight="600">
            AI Trace Analyzer
          </motion.text>
        </motion.g>

        <motion.g transform="translate(94,256)" opacity="0.92">
          <motion.rect x="0" y="0" width="136" height="44" rx="14" fill="rgba(15,23,42,0.85)" stroke="rgba(148,163,184,0.2)" />
          <motion.text x="18" y="28" fill="#bae6fd" fontSize="14" fontWeight="500">
            Jenkins Workflow
          </motion.text>
        </motion.g>
      </motion.svg>
    </div>
  );
}

