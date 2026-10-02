import { useState } from 'react'
import { faqs } from '../data/siteContent.js'
import { ChevronDownIcon } from './Icons.jsx'

function FaqItem({ item, open, onClick }) {
  return (
    <div className="glass reveal rounded-2xl">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-sm font-semibold sm:text-base">{item.question}</span>
        <ChevronDownIcon
          size={18}
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-violet-300' : 'opacity-50'}`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed opacity-65">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [openId, setOpenId] = useState(faqs[0].id)

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="reveal mx-auto max-w-xl text-center">
          <span className="pill bg-white/5 text-cyan-300">FAQ</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3">
          {faqs.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              open={openId === item.id}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
