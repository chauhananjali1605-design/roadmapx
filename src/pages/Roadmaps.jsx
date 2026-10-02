import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchFilterBar from '../components/SearchFilterBar.jsx'
import RoadmapCard from '../components/RoadmapCard.jsx'
import { roadmaps } from '../data/roadmaps.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { CompassIcon } from '../components/Icons.jsx'

export default function Roadmaps() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState('All')
  const ref = useScrollReveal()

  const filtered = useMemo(() => {
    return roadmaps.filter((r) => {
      const matchesQuery =
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.tagline.toLowerCase().includes(query.toLowerCase()) ||
        r.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
      const matchesCategory = category === 'All' || r.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <div ref={ref} className="container-x section-y">
      <div className="reveal mx-auto max-w-2xl text-center">
        <span className="pill bg-white/5 text-violet-300">All Roadmaps</span>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Find your career roadmap
        </h1>
        <p className="mt-3 text-sm opacity-65">
          11 curated paths across development, design, data, security and cloud —
          search or filter to find the right one for you.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <SearchFilterBar query={query} setQuery={setQuery} category={category} setCategory={setCategory} />
      </div>

      <div className="mt-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <RoadmapCard key={r.id} roadmap={r} />
            ))}
          </div>
        ) : (
          <div className="reveal glass mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl p-10 text-center">
            <CompassIcon size={32} className="opacity-40" />
            <p className="font-display font-semibold">No roadmaps found</p>
            <p className="text-sm opacity-60">Try a different search term or category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
