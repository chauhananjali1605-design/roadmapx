import { Link } from 'react-router-dom'
import RoadmapPath from './RoadmapPath.jsx'
import { ArrowRightIcon, SparkleIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grad-mesh" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl animate-float-slow" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold">
            <SparkleIcon size={14} className="text-amber-400" />
            11 curated career roadmaps for 2026
          </div>

          <h1 className="reveal mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Plan your path into tech,
            <br />
            <span className="text-grad">one milestone at a time.</span>
          </h1>

          <p className="reveal mt-6 text-base leading-relaxed opacity-70 sm:text-lg">
            RoadmapX turns "what should I learn next?" into a clear, trackable
            journey — from Frontend to AI/ML, Cybersecurity to Cloud. Pick a path,
            follow the roadmap, and ship your way to a career in tech.
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/roadmaps" className="btn-primary">
              Explore Roadmaps
              <ArrowRightIcon size={18} />
            </Link>
            <Link to="/compare" className="btn-ghost">
              Compare Careers
            </Link>
          </div>

          <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs opacity-60">
            <span>✓ 100% free to use</span>
            <span>✓ Progress tracking</span>
            <span>✓ No sign-up required</span>
          </div>
        </div>

        <div className="reveal mx-auto mt-14 max-w-4xl">
          <div className="glass rounded-3xl p-4 shadow-glass sm:p-8">
            <RoadmapPath />
          </div>
        </div>
      </div>
    </section>
  )
}
