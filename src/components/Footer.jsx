import { Link } from 'react-router-dom'
import { roadmaps } from '../data/roadmaps.js'
import { MailIcon, PhoneIcon, LocationIcon } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  const featured = roadmaps.slice(0, 6)

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-grad-mesh opacity-40" />
      <div className="container-x relative section-y !py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad-primary text-lg font-display font-bold text-white">
                R
              </span>
              <span className="font-display text-lg font-bold">
                Roadmap<span className="text-grad">X</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-70">
              A career roadmap platform built for students — explore step-by-step
              paths into Frontend, Data, AI/ML, Cloud, Security and more, track your
              progress, and plan your journey into tech with confidence.
            </p>
            <div className="mt-5 flex gap-3">
              {['Tw', 'Li', 'Gh', 'Ig'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold transition-colors hover:border-violet-400/50 hover:text-violet-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider opacity-80">Popular Roadmaps</h4>
            <ul className="mt-4 space-y-2.5 text-sm opacity-70">
              {featured.map((r) => (
                <li key={r.id}>
                  <Link to={`/roadmaps/${r.id}`} className="hover:text-violet-300 transition-colors">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider opacity-80">Platform</h4>
            <ul className="mt-4 space-y-2.5 text-sm opacity-70">
              <li><Link to="/roadmaps" className="hover:text-violet-300 transition-colors">All Roadmaps</Link></li>
              <li><Link to="/compare" className="hover:text-violet-300 transition-colors">Compare Roadmaps</Link></li>
              <li><Link to="/bookmarks" className="hover:text-violet-300 transition-colors">My Bookmarks</Link></li>
              <li><Link to="/about" className="hover:text-violet-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider opacity-80">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2"><MailIcon size={15} />Simran Rana</li>
              <li className="flex items-center gap-2"><PhoneIcon size={15} /> +919991523197</li>
              <li className="flex items-center gap-2"><LocationIcon size={15} />Yamunanagar, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs opacity-60 sm:flex-row">
          <p>© {year} RoadmapX. Built as a demo project for learning purposes.</p>
          <p>Designed &amp; developed with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
