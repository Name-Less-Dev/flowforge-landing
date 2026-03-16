"use client"

import { motion } from "framer-motion"
import { ActivityLog } from "./activity-log"
import AnimatedChart from "./animated-chart"

export function FakePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ rotateX: 2, rotateY: -2 }}
      className="
        relative
        rounded-2xl
        border border-white/10
        bg-zinc-900/70
        backdrop-blur-xl
        p-6
        shadow-2xl
      "
    >
      {/* glow */}
      <div className="absolute -inset-1 bg-indigo-500/10 blur-2xl -z-10" />

      <Header />

      <div className="grid gap-6 mt-6">
        <ActivityLog />
        <AnimatedChart />
      </div>
    </motion.div>
  )
}

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-zinc-400">Automation Workspace</p>
        <h3 className="text-lg font-semibold">
          Workflow Analysis
        </h3>
      </div>

      <span className="text-xs text-emerald-400">
        ● Live
      </span>
    </div>
  )
}