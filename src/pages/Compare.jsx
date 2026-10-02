import { useState } from 'react'
import { Link } from 'react-router-dom'
import { roadmaps, getTotalTopics } from '../data/roadmaps.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { ArrowRightIcon, LayersIcon } from '../components/Icons.jsx'

function RoadmapSelect({ value, onChange, exclude }) {
  return (
    <select
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-violet-400/50 transition-colors"
    >
      <option value="" disabled>
        Select a roadmap
      </option>
      {roadmaps
        .filter((r) => r.id !== exclude)
        .map((r) => (
          <option key={r.id} value={r.id} className="bg-ink-900 text-white">
            {r.icon} {r.title}
          </option>
        ))}
    </select>
  )
}

function CompareColumn({ roadmap }) {
  if (!roadmap) {
    return (
      <div className="glass flex min-h-[420px] flex-col items-center justify-center gap-2 rounded-2xl p-6 text-center opacity-50">
        <LayersIcon size={26} />
        <p className="text-sm">Choose a roadmap to compare</p>
      </div>
    )
  }

  const total = getTotalTopics(roadmap)

  return (
    <div className="glass rounded-2xl p-6">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${roadmap.color} text-2xl`}>
        {roadmap.icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{roadmap.title}</h3>
      <p className="mt-1 text-xs opacity-55">{roadmap.tagline}</p>

      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wide opacity-45">Duration</dt>
          <dd className="mt-1 font-medium">{roadmap.duration}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide opacity-45">Salary Range</dt>
          <dd className="mt-1 font-mono font-medium text-cyan-300">
            {roadmap.salary.entry} – {roadmap.salary.senior}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide opacity-45">Total Topics</dt>
          <dd className="mt-1 font-medium">{total} topics across 3 levels</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide opacity-45">Core Skills</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {roadmap.skills.map((s) => (
              <span key={s} className="pill bg-white/5 text-[10px]">{s}</span>
            ))}
          </dd>
        </div>
      </dl>

      <Link to={`/roadmaps/${roadmap.id}`} className="btn-ghost mt-6 w-full justify-center">
        View Full Roadmap <ArrowRightIcon size={15} />
      </Link>
    </div>
  )
}

export default function Compare() {
  const [leftId, setLeftId] = useState('frontend-developer')
  const [rightId, setRightId] = useState('backend-developer')
  const ref = useScrollReveal()

  const left = roadmaps.find((r) => r.id === leftId)
  const right = roadmaps.find((r) => r.id === rightId)

  return (
    <div ref={ref} className="container-x section-y">
      <div className="reveal mx-auto max-w-2xl text-center">
        <span className="pill bg-white/5 text-cyan-300">Compare</span>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Compare career roadmaps
        </h1>
        <p className="mt-3 text-sm opacity-65">
          Not sure which path fits you better? Compare duration, salary and required
          skills side-by-side.
        </p>
      </div>

      <div className="reveal mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        <RoadmapSelect value={leftId} onChange={setLeftId} exclude={rightId} />
        <RoadmapSelect value={rightId} onChange={setRightId} exclude={leftId} />
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <CompareColumn roadmap={left} />
        <CompareColumn roadmap={right} />
      </div>
    </div>
  )
}
