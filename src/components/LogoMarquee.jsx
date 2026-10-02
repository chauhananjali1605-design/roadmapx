import { companyLogos } from '../data/siteContent.js'

export default function LogoMarquee() {
  const loop = [...companyLogos, ...companyLogos]
  return (
    <section className="py-10">
      <div className="container-x">
        <p className="reveal text-center text-xs uppercase tracking-widest opacity-45">
          Roadmaps aligned with hiring bars at companies like
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden">
        <div className="marquee-track">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-6 shrink-0 font-display text-lg font-semibold opacity-30 sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
