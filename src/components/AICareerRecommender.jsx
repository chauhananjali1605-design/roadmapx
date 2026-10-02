import { useState } from 'react'
import { Link } from 'react-router-dom'
import { roadmaps } from '../data/roadmaps.js'
import { SparkleIcon, ArrowRightIcon } from './Icons.jsx'

const questions = [
  {
    id: 'interest',
    question: 'What excites you the most?',
    options: [
      { label: 'Designing visuals & experiences', tags: ['ui-ux-designer'] },
      { label: 'Building interactive websites', tags: ['frontend-developer', 'fullstack-developer'] },
      { label: 'Working with numbers & data', tags: ['data-analyst', 'data-scientist'] },
      { label: 'Solving logic & security puzzles', tags: ['cybersecurity', 'backend-developer'] },
    ],
  },
  {
    id: 'style',
    question: 'How do you prefer to work?',
    options: [
      { label: 'Visually, sketching ideas', tags: ['ui-ux-designer'] },
      { label: 'Writing code & logic', tags: ['frontend-developer', 'backend-developer', 'android-developer'] },
      { label: 'Analyzing patterns in data', tags: ['data-scientist', 'ai-ml-engineer'] },
      { label: 'Automating & managing systems', tags: ['devops-engineer', 'cloud-engineer'] },
    ],
  },
  {
    id: 'goal',
    question: 'What is your long-term goal?',
    options: [
      { label: 'Build products end-to-end', tags: ['fullstack-developer', 'android-developer'] },
      { label: 'Work with cutting-edge AI', tags: ['ai-ml-engineer', 'data-scientist'] },
      { label: 'Keep systems safe & running', tags: ['cybersecurity', 'devops-engineer', 'cloud-engineer'] },
      { label: 'Craft delightful interfaces', tags: ['ui-ux-designer', 'frontend-developer'] },
    ],
  },
]

export default function AICareerRecommender() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState({})
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const choose = (tags) => {
    const nextScores = { ...scores }
    tags.forEach((tag) => {
      nextScores[tag] = (nextScores[tag] || 0) + 1
    })
    setScores(nextScores)

    if (step + 1 < questions.length) {
      setStep(step + 1)
    } else {
      setLoading(true)
      // Simulated "AI thinking" delay for a premium feel
      setTimeout(() => {
        const bestId = Object.entries(nextScores).sort((a, b) => b[1] - a[1])[0]?.[0]
        const recommendation = roadmaps.find((r) => r.id === bestId) || roadmaps[0]
        setResult(recommendation)
        setLoading(false)
      }, 1200)
    }
  }

  const reset = () => {
    setStep(0)
    setScores({})
    setResult(null)
  }

  return (
    <div className="reveal glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/25 blur-3xl" />
      <div className="relative flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad-primary text-white">
          <SparkleIcon size={18} />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold">AI Career Recommender</h3>
          <p className="text-xs opacity-55">Answer 3 quick questions, get a suggested path.</p>
        </div>
      </div>

      <div className="relative mt-6">
        {loading && (
          <div className="flex flex-col items-center gap-3 py-8">
            <span className="spinner-dots flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            </span>
            <p className="text-sm opacity-60">Analyzing your answers...</p>
          </div>
        )}

        {!loading && result && (
          <div className="flex flex-col items-center gap-4 py-4 text-center animate-fade-up">
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${result.color} text-3xl shadow-glow`}>
              {result.icon}
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider opacity-55">Recommended for you</p>
              <h4 className="mt-1 font-display text-2xl font-bold text-grad">{result.title}</h4>
              <p className="mt-2 max-w-sm text-sm opacity-65">{result.tagline}</p>
            </div>
            <div className="flex gap-3">
              <Link to={`/roadmaps/${result.id}`} className="btn-primary">
                View Roadmap <ArrowRightIcon size={16} />
              </Link>
              <button onClick={reset} className="btn-ghost">Try Again</button>
            </div>
          </div>
        )}

        {!loading && !result && (
          <div>
            <div className="mb-4 flex gap-1.5">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= step ? 'bg-grad-primary' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
            <p className="font-display text-base font-semibold sm:text-lg">
              {questions[step].question}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => choose(opt.tags)}
                  className="glass card-hover rounded-xl px-4 py-3 text-left text-sm font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
