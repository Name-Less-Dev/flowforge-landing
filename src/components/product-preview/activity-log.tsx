"use client"

import { motion } from "framer-motion"

const steps = [
  "Connecting integrations...",
  "Syncing data sources...",
  "Analyzing workflow patterns...",
  "Generating productivity insights...",
  "Automation ready ✓",
]

export function ActivityLog() {
  return (
    <div className="space-y-2">
      {steps.map((step, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.7 }}
          className="text-xs text-text-secondary"
        >
          {step}
        </motion.p>
      ))}
    </div>
  )
}