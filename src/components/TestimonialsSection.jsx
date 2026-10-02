import { testimonials } from '../data/siteContent.js'
import { StarIcon } from './Icons.jsx'

function TestimonialCard({ tItem }) {
  return (
    <div className="glass mx-3 flex w-80 shrink-0 flex-col rounded-2xl p-6">
      <div className="flex gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} size={14} />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed opacity-75">"{tItem.quote}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-grad-primary text-xs font-bold text-white">
          {tItem.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold">{tItem.name}</div>
          <div className="text-xs opacity-55">{tItem.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials]

  return (
    <section className="section-y overflow-hidden">
      <div className="container-x">
        <div className="reveal mx-auto max-w-xl text-center">
          <span className="pill bg-white/5 text-violet-300">Testimonials</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Loved by students &amp; early-career devs
          </h2>
          <p className="mt-3 text-sm opacity-65">
            Real feedback from learners who used RoadmapX to plan their journey.
          </p>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--fade,transparent)] to-transparent" />
        <div className="marquee-track">
          {loop.map((tItem, i) => (
            <TestimonialCard key={`${tItem.id}-${i}`} tItem={tItem} />
          ))}
        </div>
      </div>
    </section>
  )
}
