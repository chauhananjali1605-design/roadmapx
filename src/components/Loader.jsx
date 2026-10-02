export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="spinner-dots flex gap-2">
        <span className="h-3 w-3 rounded-full bg-violet-500" />
        <span className="h-3 w-3 rounded-full bg-cyan-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
      </div>
      <p className="text-sm opacity-60">Loading RoadmapX...</p>
    </div>
  )
}

export function InlineLoader({ label = 'Loading...' }) {
  return (
    <div className="flex items-center gap-2 text-sm opacity-60">
      <span className="spinner-dots flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      {label}
    </div>
  )
}
