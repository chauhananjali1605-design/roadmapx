import { SearchIcon, FilterIcon } from './Icons.jsx'
import { categories } from '../data/roadmaps.js'

export default function SearchFilterBar({ query, setQuery, category, setCategory }) {
  return (
    <div className="reveal glass flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:p-5">
      <div className="relative flex-1">
        <SearchIcon size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 opacity-50" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search roadmaps — e.g. Frontend, AI/ML, Cloud..."
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none placeholder:opacity-50 focus:border-violet-400/50 transition-colors"
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
        <FilterIcon size={16} className="shrink-0 opacity-50" />
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
              category === c
                ? 'bg-grad-primary text-white shadow-glow'
                : 'bg-white/5 opacity-70 hover:opacity-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}
