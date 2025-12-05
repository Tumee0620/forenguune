"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
  isGold: boolean
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
      isGold: Math.random() > 0.5,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full animate-snow"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
            backgroundColor: flake.isGold ? "rgb(255, 215, 0)" : "rgba(255, 255, 255, 0.8)",
            boxShadow: flake.isGold
              ? `0 0 ${flake.size * 3}px ${flake.size}px rgba(255, 215, 0, 0.4)`
              : `0 0 ${flake.size * 2}px rgba(255, 255, 255, 0.3)`,
          }}
        />
      ))}
    </div>
  )
}
