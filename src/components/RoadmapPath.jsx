// The signature visual of RoadmapX: a winding, glowing path connecting
// milestone nodes — a literal depiction of "a roadmap" that anchors
// the hero section and reappears (in smaller form) across the app.

export default function RoadmapPath({ className = '' }) {
  const nodes = [
    { x: 40, y: 260, label: 'Start', color: '#FFB454' },
    { x: 160, y: 180, label: 'Learn', color: '#8B7CFC' },
    { x: 280, y: 240, label: 'Build', color: '#22D3EE' },
    { x: 400, y: 120, label: 'Practice', color: '#8B7CFC' },
    { x: 520, y: 170, label: 'Ship', color: '#22D3EE' },
    { x: 620, y: 70, label: 'Hired', color: '#5EE8B5' },
  ]

  const path = `M ${nodes[0].x} ${nodes[0].y} C 100 220, 100 200, ${nodes[1].x} ${nodes[1].y}
    S 240 260, ${nodes[2].x} ${nodes[2].y}
    S 340 140, ${nodes[3].x} ${nodes[3].y}
    S 470 190, ${nodes[4].x} ${nodes[4].y}
    S 580 90, ${nodes[5].x} ${nodes[5].y}`

  return (
    <svg
      viewBox="0 0 680 300"
      className={`roadmap-path-svg w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFB454" />
          <stop offset="50%" stopColor="#6D5DFB" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>

      {/* faint base track */}
      <path d={path} stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
      {/* animated glowing track */}
      <path
        className="path-line"
        d={path}
        stroke="url(#pathGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="14" fill={n.color} opacity="0.18" className="node-pulse" />
          <circle cx={n.x} cy={n.y} r="7" fill={n.color} stroke="#0B0F1A" strokeWidth="2.5" />
          <text
            x={n.x}
            y={n.y - 22}
            textAnchor="middle"
            className="font-mono"
            fontSize="11"
            fill="currentColor"
            opacity="0.75"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
