"use client"

import { motion } from "framer-motion"

export default function AnimatedChart() {
  const path =
    "M20 40 L100 40 L180 40 L260 40"

  return (
    <div className="w-full h-36 flex items-center justify-center">
      <svg
        viewBox="0 0 280 80"
        className="w-full h-full"
        fill="none"
      >
        {/* linha base */}
        <path
          d={path}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* linha energizada */}
        <motion.path
          d={path}
          stroke="url(#energyGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="240"
          initial={{ strokeDashoffset: 240 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 2.4,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {/* nodes */}
        {[
          { x: 20, label: "Trigger" },
          { x: 100, label: "Process" },
          { x: 180, label: "AI" },
          { x: 260, label: "Output" },
        ].map((node, i) => (
          <g key={i}>
            <circle
              cx={node.x}
              cy="40"
              r="6"
              fill="rgb(59 130 246)"
            />

            <text
              x={node.x}
              y="65"
              textAnchor="middle"
              fontSize="9"
              fill="rgba(255,255,255,0.6)"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* gradiente vivo */}
        <defs>
          <linearGradient
            id="energyGradient"
            x1="20"
            y1="0"
            x2="260"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}