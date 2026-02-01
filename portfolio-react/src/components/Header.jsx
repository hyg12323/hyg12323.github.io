import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 z-50 w-full
        backdrop-blur bg-black/30
        border-b border-white/5
      "
    >
      <div
        className="
          mx-auto flex h-16 max-w-7xl
          items-center justify-between px-8
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            text-xl font-extrabold tracking-tight
            text-slate-100 transition
            hover:text-sky-400
          "
        >
          hyg
        </Link>

        {/* Navigation */}
        <nav className="flex items-center text-sm font-medium text-slate-300">
          <Link
            to="/projects"
            className="transition hover:text-sky-400"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  )
}
