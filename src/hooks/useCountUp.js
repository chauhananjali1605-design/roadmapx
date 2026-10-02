import { useEffect, useRef, useState } from 'react'

// Animates a numeric value from 0 to `end` once the element is visible.
export function useCountUp(end, duration = 1600) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const isFloat = !Number.isInteger(end)

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = end * eased
            setValue(isFloat ? Math.round(current * 10) / 10 : Math.floor(current))
            if (progress < 1) requestAnimationFrame(step)
            else setValue(end)
          }
          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return [ref, value]
}
