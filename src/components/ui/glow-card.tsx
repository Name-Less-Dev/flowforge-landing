"use client"

import { ReactNode, useEffect, useRef } from "react"

interface GlowCardProps {
  children: ReactNode
}

export default function GlowCard({ children }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)

  const target = useRef({ x: 50, y: 50, rx: 0, ry: 0 })
  const current = useRef({ x: 50, y: 50, rx: 0, ry: 0 })
  const hovering = useRef(false)

  const stiffness = 0.08   // força de aproximação
  const damping = 0.85     // quanto desacelera (inércia)

  const velocity = useRef({
    x: 0,
    y: 0,
    rx: 0,
    ry: 0,
  })
  /* =========================
     Animation loop
  ========================== */
  const animate = () => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return

    // SPRING PHYSICS (inertia)
        velocity.current.x =
        (velocity.current.x +
            (target.current.x - current.current.x) * stiffness) *
        damping

        velocity.current.y =
        (velocity.current.y +
            (target.current.y - current.current.y) * stiffness) *
        damping

        velocity.current.rx =
        (velocity.current.rx +
            (target.current.rx - current.current.rx) * stiffness) *
        damping

        velocity.current.ry =
        (velocity.current.ry +
            (target.current.ry - current.current.ry) * stiffness) *
        damping

        current.current.x += velocity.current.x
        current.current.y += velocity.current.y
        current.current.rx += velocity.current.rx
        current.current.ry += velocity.current.ry

    if (hovering.current) {
      card.style.transform = `
        rotateX(${current.current.rx}deg)
        rotateY(${current.current.ry}deg)
        scale(${hovering.current ? 1.035 : 1})
      `
    } else {
      card.style.transform = `
        rotateX(${current.current.rx}deg)
        rotateY(${current.current.ry}deg)
        scale(1)
      `
    }

    glow.style.background = hovering.current
      ? `radial-gradient(
          450px circle at ${current.current.x}% ${current.current.y}%,
          rgba(99,102,241,0.14),
          rgba(168,85,247,0.08),
          transparent 65%
        )`
      : "none"

    frameRef.current = requestAnimationFrame(animate)
  }

  /* =========================
     Mouse handlers
  ========================== */
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    target.current.x = (x / rect.width) * 100
    target.current.y = (y / rect.height) * 100

    target.current.ry = ((x / rect.width) - 0.5) * 10
    target.current.rx = ((y / rect.height) - 0.5) * -10
  }

  const handleEnter = () => {
    hovering.current = true

    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }

  const handleLeave = () => {
    hovering.current = false

    target.current.rx = 0
    target.current.ry = 0
  }

  /* cleanup */
  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div className="perspective-[1200px] h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="
          relative h-full rounded-2xl
          border border-white/10
          bg-neutral-900/70
          backdrop-blur-xl
          p-8
          overflow-hidden
          will-change-transform
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}