# RoadmapX — Career Roadmap Platform

A premium, glassmorphism-styled career roadmap platform built with **React 18**,
**Vite**, and **Tailwind CSS**. Explore step-by-step learning paths for 11 tech
careers, track your progress, bookmark favorites, compare career paths, and get
an AI-simulated career recommendation.

## ✨ Features

- 11 detailed career roadmaps (Frontend, Backend, Full Stack, UI/UX, Data
  Analyst, Data Scientist, AI/ML Engineer, Cybersecurity, Cloud Engineer,
  DevOps Engineer, Android Developer)
- Beginner → Intermediate → Advanced topic timelines with completion tracking
- Search & category filtering
- Roadmap comparison tool
- Bookmark favorite roadmaps (persisted in `localStorage`)
- Daily learning streak + achievement badges
- AI Career Recommender (frontend-only simulation)
- Download-as-PDF UI action
- Dark / light mode toggle
- Fully responsive, animated, glassmorphism UI
- Component-based architecture with Context API for global state

## 🗂️ Folder Structure

```
src/
  components/   Reusable UI building blocks (Navbar, Footer, Cards, etc.)
  pages/        Route-level views (Home, Roadmaps, RoadmapDetail, ...)
  context/      Theme & Progress (bookmarks / completed topics / streak)
  data/         Roadmap + site content dummy data
  hooks/        useScrollReveal, useCountUp
  styles/       Global CSS + design system utilities
```

## 🚀 Getting Started

This project's dependencies were written for you but **not installed** in the
build sandbox (no internet access there). To run it locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

To build for production:

```bash
npm run build
npm run preview
```

## 🎨 Design System

- **Colors:** deep navy base (`#0B0F1A`) with a violet → cyan primary gradient
  and an amber accent for streaks/badges — defined in `tailwind.config.js`.
- **Typography:** Space Grotesk (display), Inter (body), JetBrains Mono (data).
- **Signature element:** an animated "circuit path" connecting milestone nodes
  (`src/components/RoadmapPath.jsx`) — a literal visual metaphor for a roadmap.

## 📌 Notes for Submission / Interviews

- All data is static (`src/data/roadmaps.js`, `src/data/siteContent.js`) — no
  backend is required to run or demo this project.
- Progress, bookmarks, streaks and theme preference persist via `localStorage`.
- The "Download PDF" and "AI Recommender" features are UI/UX simulations by
  design, intended to demonstrate interaction design rather than a real backend.
