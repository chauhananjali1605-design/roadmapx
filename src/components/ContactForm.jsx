import { useState } from 'react'
import { MailIcon, PhoneIcon, LocationIcon, CheckIcon } from './Icons.jsx'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Frontend-only simulation of sending a message
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1400)
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
      <div className="reveal glass rounded-2xl p-6 lg:col-span-2">
        <h3 className="font-display text-lg font-semibold">Get in touch</h3>
        <p className="mt-2 text-sm opacity-65">
          Questions, feedback, or partnership ideas — we would love to hear from you.
        </p>

        <ul className="mt-6 space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5"><MailIcon size={16} /></span>
            SimranRana
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5"><PhoneIcon size={16} /></span>
            +91 9991523197
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5"><LocationIcon size={16} /></span>
            Yamunanagar, India
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="reveal glass rounded-2xl p-6 lg:col-span-3">
        {status === 'sent' ? (
          <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint-500/20 text-mint-500">
              <CheckIcon size={26} />
            </span>
            <h4 className="font-display text-lg font-semibold">Message sent!</h4>
            <p className="text-sm opacity-60">Thanks for reaching out — we'll get back to you soon.</p>
            <button onClick={() => setStatus('idle')} className="btn-ghost mt-2">Send another message</button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium opacity-70">Full Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:opacity-40 focus:border-violet-400/50 transition-colors"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium opacity-70">Email Address</label>
              <input
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:opacity-40 focus:border-violet-400/50 transition-colors"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium opacity-70">Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us what's on your mind..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:opacity-40 focus:border-violet-400/50 transition-colors"
              />
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
