"use client";

import { motion } from "framer-motion";

const codeLines = [
  { text: "@SpringBootApplication", color: "text-primary", indent: 0 },
  { text: "public class Application {", color: "text-slate-300", indent: 0 },
  { text: "", color: "", indent: 0 },
  { text: "@Autowired", color: "text-java-kotlin", indent: 1 },
  { text: "private UserService userService;", color: "text-slate-400", indent: 1 },
  { text: "", color: "", indent: 0 },
  { text: "@GetMapping(\"/api/users\")", color: "text-accent", indent: 1 },
  { text: "fun getUsers(): List<User> {", color: "text-slate-300", indent: 1 },
  { text: "return userService.findAll()", color: "text-slate-400", indent: 2 },
  { text: "}", color: "text-slate-500", indent: 1 },
  { text: "}", color: "text-slate-500", indent: 0 },
];

const techStack = [
  { name: "Java", x: 16, y: 270, color: "#F59E0B" },
  { name: "Spring", x: 100, y: 270, color: "#22C55E" },
  { name: "Kotlin", x: 200, y: 270, color: "#7C3AED" },
  { name: "OCI", x: 290, y: 270, color: "#EF4444" },
];

export function HeroVisual() {
  return (
    <div className="relative flex h-[380px] w-full flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/80">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-slate-800/60 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/60" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <div className="h-3 w-3 rounded-full bg-green-500/60" />
        <span className="ml-3 code-text text-[0.65rem] text-slate-500">Application.kt</span>
      </div>

      {/* Code area */}
      <div className="flex-1 p-4 font-mono text-xs leading-6">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            className="flex"
          >
            <span className="w-6 select-none text-right text-slate-700 mr-4">{line.text ? i + 1 : ""}</span>
            <span style={{ paddingLeft: `${line.indent * 20}px` }} className={line.color}>
              {line.text}
            </span>
          </motion.div>
        ))}

        {/* Blinking cursor */}
        <motion.div
          className="mt-1 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="w-6 mr-4" />
          <motion.span
            className="h-4 w-[2px] bg-primary"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Bottom tech pills */}
      <div className="flex items-center gap-2 border-t border-slate-800/60 px-4 py-2.5">
        {techStack.map((tech, i) => (
          <motion.span
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
            className="code-text rounded px-2 py-0.5 text-[0.6rem]"
            style={{
              backgroundColor: `${tech.color}15`,
              color: tech.color,
              border: `1px solid ${tech.color}30`
            }}
          >
            {tech.name}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="ml-auto code-text text-[0.6rem] text-green-500"
        >
          Build successful
        </motion.span>
      </div>
    </div>
  );
}
