import { badges } from '../data/siteContent.js'
import { useProgress } from '../context/ProgressContext.jsx'

export default function BadgesShowcase() {
  const { totalCompletedTopics, bookmarks, streak } = useProgress()

  // Simple frontend simulation of which badges are "earned"
  const earned = {
    1: totalCompletedTopics >= 1,
    2: streak >= 7,
    3: totalCompletedTopics >= 5,
    4: totalCompletedTopics >= 15,
    5: bookmarks.length >= 3,
    6: true, // demo: comparer unlocked by visiting compare page conceptually
  }

  return (
    <div className="reveal glass rounded-2xl p-6">
      <h3 className="font-display text-base font-semibold">Achievement Badges</h3>
      <p className="mt-1 text-xs opacity-55">Unlocked as you make progress across roadmaps.</p>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {badges.map((b) => {
          const isEarned = earned[b.id]
          return (
            <div
              key={b.id}
              title={b.description}
              className={`flex flex-col items-center gap-1.5 rounded-xl p-3 text-center transition-all ${
                isEarned ? 'bg-white/8 opacity-100' : 'bg-white/[0.02] opacity-35 grayscale'
              }`}
            >
              <span className="text-2xl">{b.icon}</span>
              <span className="text-[10px] font-medium leading-tight">{b.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
