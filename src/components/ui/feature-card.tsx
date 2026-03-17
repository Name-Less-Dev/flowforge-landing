import GlowCard from "./glow-card"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <GlowCard>
      {/* ICON */}
      <div className="mb-6 text-brand [&_svg]:h-9 [&_svg]:w-9">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
        {description}
      </p>
    </GlowCard>
  )
}