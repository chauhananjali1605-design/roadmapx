import ContactForm from '../components/ContactForm.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className="container-x section-y">
      <div className="reveal mx-auto max-w-2xl text-center">
        <span className="pill bg-white/5 text-cyan-300">Contact</span>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Let's talk</h1>
        <p className="mt-3 text-sm opacity-65">
          Have feedback, found a bug, or want to suggest a new roadmap? Send us a message.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <ContactForm />
      </div>
    </div>
  )
}
