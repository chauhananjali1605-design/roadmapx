import { useProgress } from '../context/ProgressContext.jsx'
import { FlameIcon } from './Icons.jsx'

export default function StreakWidget() {
  const { streak, totalCompletedTopics } = useProgress()
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const todayIndex = (new Date().getDay() + 6) % 7 // Monday = 0

  return (
    <div className="reveal glass rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad-warm text-white">
              <FlameIcon size={18} />
            </span>
            <div>
              <div className="font-display text-xl font-bold">{streak} day{streak !== 1 ? 's' : ''}</div>
              <div className="text-xs opacity-60">Learning streak</div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-display text-xl font-bold text-grad">{totalCompletedTopics}</div>
          <div className="text-xs opacity-60">Topics done</div>
        </div>
      </div>

      <div className="mt-5 flex justify-between gap-1.5">
        {days.map((d, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className={`h-8 w-full rounded-lg transition-colors ${
                i < todayIndex
                  ? 'bg-grad-warm'
                  : i === todayIndex
                  ? 'bg-grad-primary animate-pulse-glow'
                  : 'bg-white/5'
              }`}
            />
            <span className="text-[10px] opacity-50">{d}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
