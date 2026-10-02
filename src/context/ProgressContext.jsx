import { createContext, useContext, useEffect, useState } from 'react'

const ProgressContext = createContext(null)

const STORAGE_KEYS = {
  completed: 'roadmapx_completed_topics',
  bookmarks: 'roadmapx_bookmarks',
  streak: 'roadmapx_streak',
  lastVisit: 'roadmapx_last_visit',
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function ProgressProvider({ children }) {
  // completedTopics: { [roadmapId]: { [topicId]: true } }
  const [completedTopics, setCompletedTopics] = useState(() =>
    loadJSON(STORAGE_KEYS.completed, {})
  )
  // bookmarks: array of roadmap ids
  const [bookmarks, setBookmarks] = useState(() =>
    loadJSON(STORAGE_KEYS.bookmarks, [])
  )
  const [streak, setStreak] = useState(() => loadJSON(STORAGE_KEYS.streak, 1))

  // Persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(completedTopics))
  }, [completedTopics])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(bookmarks))
  }, [bookmarks])

  // Simple daily streak simulation based on last visit date
  useEffect(() => {
    const today = new Date().toDateString()
    const lastVisit = localStorage.getItem(STORAGE_KEYS.lastVisit)
    if (lastVisit !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      setStreak((prev) => {
        const next = lastVisit === yesterday ? prev + 1 : lastVisit ? 1 : prev
        localStorage.setItem(STORAGE_KEYS.streak, JSON.stringify(next))
        return next
      })
      localStorage.setItem(STORAGE_KEYS.lastVisit, today)
    }
  }, [])

  const toggleTopic = (roadmapId, topicId) => {
    setCompletedTopics((prev) => {
      const roadmapProgress = { ...(prev[roadmapId] || {}) }
      if (roadmapProgress[topicId]) {
        delete roadmapProgress[topicId]
      } else {
        roadmapProgress[topicId] = true
      }
      return { ...prev, [roadmapId]: roadmapProgress }
    })
  }

  const isTopicComplete = (roadmapId, topicId) =>
    !!completedTopics[roadmapId]?.[topicId]

  const getRoadmapProgress = (roadmapId, totalTopics) => {
    const done = Object.keys(completedTopics[roadmapId] || {}).length
    if (!totalTopics) return 0
    return Math.round((done / totalTopics) * 100)
  }

  const toggleBookmark = (roadmapId) => {
    setBookmarks((prev) =>
      prev.includes(roadmapId)
        ? prev.filter((id) => id !== roadmapId)
        : [...prev, roadmapId]
    )
  }

  const isBookmarked = (roadmapId) => bookmarks.includes(roadmapId)

  const totalCompletedTopics = Object.values(completedTopics).reduce(
    (sum, r) => sum + Object.keys(r).length,
    0
  )

  return (
    <ProgressContext.Provider
      value={{
        completedTopics,
        toggleTopic,
        isTopicComplete,
        getRoadmapProgress,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        streak,
        totalCompletedTopics,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
