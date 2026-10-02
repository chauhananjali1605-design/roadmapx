import { Link } from 'react-router-dom'
import StreakWidget from '../components/StreakWidget.jsx'
import BadgesShowcase from '../components/BadgesShowcase.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { ArrowRightIcon, CompassIcon, LayersIcon, TrophyIcon, SparkleIcon } from '../components/Icons.jsx'

const values = [
  { icon: <CompassIcon size={20} />, title: 'Clarity over noise', desc: 'One clear path per career, not a hundred scattered tutorials.' },
  { icon: <LayersIcon size={20} />, title: 'Structured progression', desc: 'Every roadmap moves Beginner → Intermediate → Advanced with purpose.' },
  { icon: <TrophyIcon size={20} />, title: 'Momentum matters', desc: 'Progress tracking, streaks and badges keep learners consistent.' },
  { icon: <SparkleIcon size={20} />, title: 'Built for students', desc: 'Designed around how students actually plan and learn — free and simple.' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className="container-x section-y">
      <div className="reveal mx-auto max-w-2xl text-center">
        <span className="pill bg-white/5 text-violet-300">About RoadmapX</span>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Helping students navigate their tech careers
        </h1>
        <p className="mt-4 text-sm leading-relaxed opacity-70 sm:text-base">
          RoadmapX is a career roadmap platform built to remove the guesswork from
          learning tech skills. Instead of jumping between scattered tutorials and
          conflicting advice, students get one structured, trackable path per career —
          complete with skills, projects, resources and certificates.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div key={v.title} className="reveal glass card-hover rounded-2xl p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-violet-300">
              {v.icon}
            </span>
            <h3 className="mt-4 font-display text-sm font-semibold">{v.title}</h3>
            <p className="mt-2 text-xs leading-relaxed opacity-60">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <StreakWidget />
        <BadgesShowcase />
      </div>

      <div className="reveal glass-strong relative mt-16 overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-grad-mesh opacity-50" />
        <h2 className="relative font-display text-2xl font-bold sm:text-3xl">
          This is a student project — built to learn, not to sell.
        </h2>
        <p className="relative mx-auto mt-3 max-w-lg text-sm opacity-65">
          RoadmapX was built with React, Vite and Tailwind CSS as a demonstration of
          component-based frontend architecture, state management and premium UI design.
        </p>
        <Link to="/roadmaps" className="btn-primary relative mt-6 inline-flex">
          Explore Roadmaps <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  )
}
