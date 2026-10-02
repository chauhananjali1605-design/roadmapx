import { stats } from '../data/siteContent.js'
import { useCountUp } from '../hooks/useCountUp.js'

function StatItem({ stat }) {
  const [ref, value] = useCountUp(stat.value, 1800)
  const display = Number.isInteger(stat.value)
    ? value.toLocaleString('en-IN')
    : value.toFixed(1)

  return (
    <div ref={ref} className="reveal glass card-hover rounded-2xl p-6 text-center">
      <div className="font-display text-3xl font-bold text-grad sm:text-4xl">
        {display}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm opacity-70">{stat.label}</div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="section-y !py-14">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.id} stat={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
