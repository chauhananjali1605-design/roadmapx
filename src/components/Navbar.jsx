import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, SearchIcon, BookmarkIcon } from './Icons.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/roadmaps', label: 'Roadmaps' },
  { to: '/compare', label: 'Compare' },
  { to: '/bookmarks', label: 'Bookmarks' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const submitSearch = (e) => {
    e.preventDefault()
    navigate(`/roadmaps${query ? `?q=${encodeURIComponent(query)}` : ''}`)
    setQuery('')
    setOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-x">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-glass sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-grad-primary text-lg font-display font-bold text-white shadow-glow">
              R
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Roadmap<span className="text-grad">X</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-current/70 hover:bg-white/5 hover:text-current'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <form onSubmit={submitSearch} className="relative hidden md:block">
              <SearchIcon size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search roadmaps..."
                className="w-44 rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm outline-none placeholder:opacity-50 focus:w-56 focus:border-violet-400/50 transition-all duration-300"
              />
            </form>

            <Link
              to="/bookmarks"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-amber-400/50 sm:flex"
              aria-label="Bookmarks"
            >
              <BookmarkIcon size={16} />
            </Link>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-cyan-400/50"
            >
              {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-4 shadow-glass lg:hidden animate-fade-up">
            <form onSubmit={submitSearch} className="relative mb-2">
              <SearchIcon size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search roadmaps..."
                className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm outline-none placeholder:opacity-50"
              />
            </form>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
