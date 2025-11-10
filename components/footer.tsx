import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto mb-10 mt-10 w-full max-w-5xl px-6 text-sm text-slate-500 md:px-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-800/60 bg-slate-900/60 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Ayoub El Maalmi.
        </p>
        <div className="flex flex-wrap gap-4 text-slate-400">
          <a href="https://github.com/ELMAALMIA" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ayoub-el-maalmi-8b274a1a1/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://medium.com/@ayoubelmaalmi" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}

