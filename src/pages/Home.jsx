import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import StatsSection from '../components/StatsSection.jsx'
import LogoMarquee from '../components/LogoMarquee.jsx'
import RoadmapCard from '../components/RoadmapCard.jsx'
import AICareerRecommender from '../components/AICareerRecommender.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import FaqSection from '../components/FaqSection.jsx'
import { roadmaps } from '../data/roadmaps.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { ArrowRightIcon, CompassIcon, LayersIcon, TrophyIcon } from '../components/Icons.jsx'

const features = [
  {
    icon: <CompassIcon size={20} />,
    title: 'Guided Roadmaps',
    desc: 'Step-by-step Beginner → Advanced paths for 11 in-demand tech careers.',
  },
  {
    icon: <LayersIcon size={20} />,
    title: 'Compare Careers',
    desc: 'Place any two roadmaps side-by-side to see duration, salary and skills.',
  },
  {
    icon: <TrophyIcon size={20} />,
    title: 'Track & Get Rewarded',
    desc: 'Mark topics complete, keep a learning streak, and unlock badges.',
  },
]

export default function Home() {
  const ref = useScrollReveal()
  const featured = roadmaps.slice(0, 6)

  return (
    <div ref={ref}>
      <Hero />
      <LogoMarquee />
      <StatsSection />

      {/* Feature strip */}
      <section className="section-y !pt-4">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="reveal glass card-hover rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-violet-300">
                  {f.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured roadmaps */}
      <section className="section-y">
        <div className="container-x">
          <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="pill bg-white/5 text-amber-300">Popular Paths</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Explore top career roadmaps
              </h2>
            </div>
            <Link to="/roadmaps" className="btn-ghost">
              View All <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((r) => (
              <RoadmapCard key={r.id} roadmap={r} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommender */}
      <section className="section-y !pt-4">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <AICareerRecommender />
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />

      {/* CTA */}
      <section className="section-y">
        <div className="container-x">
          <div className="reveal glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-grad-mesh opacity-60" />
            <h2 className="relative font-display text-3xl font-bold sm:text-4xl">
              Ready to plan your <span className="text-grad">tech career?</span>
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm opacity-65">
              Pick a roadmap, start checking off topics, and build momentum today.
            </p>
            <Link to="/roadmaps" className="btn-primary relative mt-6 inline-flex">
              Get Started Free <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
