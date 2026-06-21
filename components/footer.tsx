export function Footer() {
  return (
    <footer className="mx-auto mb-8 mt-8 w-full max-w-5xl px-6 md:px-8">
      <div className="flex flex-col gap-3 rounded-xl border border-slate-800/40 bg-slate-900/20 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <p className="code-text text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Ayoub El Maalmi &middot; Fullstack Developer
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/ELMAALMIA" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-primary transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ayoub-el-maalmi-8b274a1a1/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-primary transition">
            LinkedIn
          </a>
          <a href="https://medium.com/@ayoubelmaalmi" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-primary transition">
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
