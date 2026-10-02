import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import { roadmaps } from '../data/roadmaps.js'
import RoadmapCard from '../components/RoadmapCard.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { BookmarkIcon, ArrowRightIcon } from '../components/Icons.jsx'

export default function Bookmarks() {
  const { bookmarks } = useProgress()
  const ref = useScrollReveal()
  const saved = roadmaps.filter((r) => bookmarks.includes(r.id))

  return (
    <div ref={ref} className="container-x section-y">
      <div className="reveal mx-auto max-w-2xl text-center">
        <span className="pill bg-white/5 text-amber-300">Your List</span>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Bookmarked Roadmaps</h1>
        <p className="mt-3 text-sm opacity-65">
          Roadmaps you have saved for later — pick up right where you left off.
        </p>
      </div>

      <div className="mt-10">
        {saved.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((r) => (
              <RoadmapCard key={r.id} roadmap={r} />
            ))}
          </div>
        ) : (
          <div className="reveal glass mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl p-10 text-center">
            <BookmarkIcon size={32} className="opacity-40" />
            <p className="font-display font-semibold">No bookmarks yet</p>
            <p className="text-sm opacity-60">
              Tap the bookmark icon on any roadmap card to save it here.
            </p>
            <Link to="/roadmaps" className="btn-primary mt-2">
              Browse Roadmaps <ArrowRightIcon size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
