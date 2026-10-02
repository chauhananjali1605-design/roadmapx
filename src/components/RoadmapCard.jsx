import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import { getTotalTopics } from '../data/roadmaps.js'
import { BookmarkIcon, ClockIcon, ArrowRightIcon } from './Icons.jsx'

export default function RoadmapCard({ roadmap }) {
  const { isBookmarked, toggleBookmark, getRoadmapProgress } = useProgress()
  const total = getTotalTopics(roadmap)
  const progress = getRoadmapProgress(roadmap.id, total)
  const bookmarked = isBookmarked(roadmap.id)

  return (
    <div className="reveal glass card-hover group relative flex flex-col rounded-2xl p-6">
      <button
        onClick={(e) => {
          e.preventDefault()
          toggleBookmark(roadmap.id)
        }}
        aria-label="Toggle bookmark"
        className={`absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          bookmarked ? 'text-amber-400' : 'opacity-40 hover:opacity-100'
        }`}
      >
        <BookmarkIcon size={17} filled={bookmarked} />
      </button>

      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${roadmap.color} text-2xl shadow-glow`}>
        {roadmap.icon}
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold">{roadmap.title}</h3>
      <span className="pill mt-1 w-fit bg-white/5 text-[11px] opacity-60">{roadmap.category}</span>

      <p className="mt-3 text-sm leading-relaxed opacity-65 line-clamp-2">{roadmap.tagline}</p>

      <div className="mt-4 flex items-center gap-1.5 text-xs opacity-60">
        <ClockIcon size={14} />
        {roadmap.duration}
      </div>

      {progress > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] opacity-60">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-grad-primary transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <Link
        to={`/roadmaps/${roadmap.id}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 transition-all group-hover:gap-2.5"
      >
        View Roadmap <ArrowRightIcon size={15} />
      </Link>
    </div>
  )
}
