import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getRoadmapById, getTotalTopics } from '../data/roadmaps.js'
import { useProgress } from '../context/ProgressContext.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { downloadRoadmapPdf } from '../utils/generateRoadmapPdf.js'
import ProgressRing from '../components/ProgressRing.jsx'
import {
  ArrowRightIcon,
  BookmarkIcon,
  DownloadIcon,
  ClockIcon,
  MoneyIcon,
  CheckIcon,
} from '../components/Icons.jsx'

export default function RoadmapDetail() {
  const { id } = useParams()
  const roadmap = getRoadmapById(id)
  const ref = useScrollReveal()
  const [downloading, setDownloading] = useState(false)

  if (!roadmap) return <Navigate to="/roadmaps" replace />

  const total = getTotalTopics(roadmap)
  const { getRoadmapProgress, isTopicComplete, toggleTopic, isBookmarked, toggleBookmark } =
    useProgress()
  const progress = getRoadmapProgress(roadmap.id, total)
  const bookmarked = isBookmarked(roadmap.id)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      downloadRoadmapPdf(roadmap, { isTopicComplete })
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div ref={ref}>
      {/* Header */}
      <section className="relative overflow-hidden pt-6">
        <div className="pointer-events-none absolute inset-0 bg-grad-mesh opacity-50" />
        <div className="container-x relative">
          <div className="reveal glass-strong rounded-3xl p-6 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${roadmap.color} text-3xl shadow-glow`}>
                    {roadmap.icon}
                  </span>
                  <div>
                    <span className="pill bg-white/5 text-[11px] opacity-60">{roadmap.category}</span>
                    <h1 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{roadmap.title}</h1>
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-70 sm:text-base">
                  {roadmap.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-xs">
                  <span className="glass flex items-center gap-1.5 rounded-full px-3.5 py-1.5">
                    <ClockIcon size={14} /> {roadmap.duration}
                  </span>
                  <span className="glass flex items-center gap-1.5 rounded-full px-3.5 py-1.5">
                    <MoneyIcon size={14} /> {roadmap.salary.entry} – {roadmap.salary.senior}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => toggleBookmark(roadmap.id)} className="btn-ghost">
                    <BookmarkIcon size={16} filled={bookmarked} className={bookmarked ? 'text-amber-400' : ''} />
                    {bookmarked ? 'Bookmarked' : 'Bookmark'}
                  </button>
                  <button onClick={handleDownload} className="btn-primary">
                    <DownloadIcon size={16} />
                    {downloading ? 'Preparing PDF...' : 'Download as PDF'}
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 self-center">
                <ProgressRing progress={progress} size={110} stroke={9} />
                <span className="text-xs opacity-60">Your Progress</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="reveal mt-6 flex flex-wrap gap-2">
            {roadmap.skills.map((s) => (
              <span key={s} className="pill glass text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="reveal font-display text-2xl font-bold">Learning Roadmap</h2>
              <p className="reveal mt-2 text-sm opacity-60">
                Check off topics as you complete them — your progress saves automatically.
              </p>

              <div className="mt-8 space-y-10">
                {roadmap.levels.map((level, idx) => (
                  <div key={level.level} className="reveal relative pl-9">
                    {idx !== roadmap.levels.length - 1 && (
                      <span className="absolute left-[15px] top-9 h-[calc(100%-14px)] w-px bg-gradient-to-b from-violet-500/50 to-transparent" />
                    )}
                    <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-grad-primary text-xs font-bold text-white shadow-glow">
                      {idx + 1}
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-semibold">{level.level}</h3>
                      <span className="pill bg-white/5 text-[11px] opacity-60">
                        <ClockIcon size={12} /> {level.duration}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {level.topics.map((topic) => {
                        const done = isTopicComplete(roadmap.id, topic.id)
                        return (
                          <label
                            key={topic.id}
                            className={`glass flex cursor-pointer items-start gap-3 rounded-xl p-4 transition-all duration-200 ${
                              done ? 'border-mint-500/30' : ''
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="topic-check mt-0.5"
                              checked={done}
                              onChange={() => toggleTopic(roadmap.id, topic.id)}
                            />
                            <span>
                              <span className={`block text-sm font-semibold ${done ? 'opacity-60 line-through' : ''}`}>
                                {topic.title}
                              </span>
                              <span className="mt-0.5 block text-xs opacity-55">{topic.description}</span>
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="reveal glass rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold">Salary Overview</h3>
                <div className="mt-4 space-y-3 text-sm">
                  {[
                    ['Entry Level', roadmap.salary.entry],
                    ['Mid Level', roadmap.salary.mid],
                    ['Senior Level', roadmap.salary.senior],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="opacity-60">{label}</span>
                      <span className="font-mono font-semibold text-cyan-300">{val}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[11px] opacity-45">
                  Estimates for illustrative purposes — actual salaries vary by company, location and experience.
                </p>
              </div>

              <div className="reveal glass rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold">Learning Resources</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {roadmap.resources.map((res) => (
                    <li key={res.title} className="flex items-start justify-between gap-3">
                      <span className="opacity-75">{res.title}</span>
                      <span className="pill shrink-0 bg-white/5 text-[10px] opacity-55">{res.type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal glass rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold">Project Recommendations</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {roadmap.projects.map((p) => (
                    <li key={p.title} className="flex items-start justify-between gap-3">
                      <span className="opacity-75">{p.title}</span>
                      <span className="pill shrink-0 bg-white/5 text-[10px] opacity-55">{p.difficulty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal glass rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold">Certificates to Pursue</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {roadmap.certificates.map((c) => (
                    <li key={c.name} className="flex items-start gap-2.5">
                      <CheckIcon size={15} className="mt-0.5 shrink-0 text-mint-500" />
                      <span className="opacity-75">
                        {c.name} <span className="opacity-50">— {c.provider}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/compare" className="reveal btn-ghost w-full justify-center">
                Compare with another roadmap <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
