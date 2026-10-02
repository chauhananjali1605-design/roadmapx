// A small, custom icon set — hand-drawn as SVG so the project has
// zero dependency on external icon packs. All icons accept
// `className` and `size` for easy reuse.

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
})

export const SearchIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)

export const SunIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2.2M12 19.8V22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2 12h2.2M19.8 12H22M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
  </svg>
)

export const MoonIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
)

export const BookmarkIcon = ({ className = '', size = 20, filled = false }) => (
  <svg {...base(size)} className={className} fill={filled ? 'currentColor' : 'none'}>
    <path d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4-7 4V4.5a1 1 0 0 1 1-1Z" />
  </svg>
)

export const DownloadIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3v13" />
    <path d="M7 11l5 5 5-5" />
    <path d="M4 21h16" />
  </svg>
)

export const CheckIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const ArrowRightIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
)

export const MenuIcon = ({ className = '', size = 24 }) => (
  <svg {...base(size)} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = ({ className = '', size = 24 }) => (
  <svg {...base(size)} className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const StarIcon = ({ className = '', size = 16, filled = true }) => (
  <svg {...base(size)} className={className} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.3 6.1 20.5l1.3-6.6L2.5 9.3l6.6-.7L12 2.5Z" />
  </svg>
)

export const FlameIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M12 22c4 0 7-2.7 7-6.8 0-3.4-2.2-5.4-3.4-7.6-.6 1.4-1.6 2.2-2.3 1.6-.9-.8-.4-3-2-6.2-2 2.4-2.5 4.6-2.4 6.4.1 1.6-1 2-1.9 1-.7-.8-.9-2-1-2.8C4.5 9.6 5 12.4 5 14.6 5 18.9 8 22 12 22Z" />
  </svg>
)

export const TrophyIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
    <path d="M7 5H4a3 3 0 0 0 3 5" />
    <path d="M17 5h3a3 3 0 0 1-3 5" />
    <path d="M12 13v3M9 20h6M9 20c0-1.5.7-2.3 1.5-2.7M15 20c0-1.5-.7-2.3-1.5-2.7" />
  </svg>
)

export const ChevronDownIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const SparkleIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3l1.6 4.6L18 9.2l-4.4 1.6L12 15.4l-1.6-4.6L6 9.2l4.4-1.6L12 3Z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
  </svg>
)

export const FilterIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M4 5h16M7 12h10M10 19h4" />
  </svg>
)

export const ClockIcon = ({ className = '', size = 18 }) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

export const MoneyIcon = ({ className = '', size = 18 }) => (
  <svg {...base(size)} className={className}>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6 9v.01M18 15v.01" />
  </svg>
)

export const MailIcon = ({ className = '', size = 18 }) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5 12 13l8.5-6.5" />
  </svg>
)

export const PhoneIcon = ({ className = '', size = 18 }) => (
  <svg {...base(size)} className={className}>
    <path d="M5.5 3.5h3l1.6 4.3-2 1.7a12 12 0 0 0 6 6l1.7-2 4.3 1.6v3a1.5 1.5 0 0 1-1.6 1.5A17 17 0 0 1 4 5.1a1.5 1.5 0 0 1 1.5-1.6Z" />
  </svg>
)

export const LocationIcon = ({ className = '', size = 18 }) => (
  <svg {...base(size)} className={className}>
    <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
)

export const CompassIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9l-2 6-4-1 2-6 4 1Z" />
  </svg>
)

export const LayersIcon = ({ className = '', size = 20 }) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3l9 5-9 5-9-5 9-5Z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
)
