"use client"

import React, { useId } from "react"
import { motion } from "framer-motion"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
import { cn } from "@/lib/utils"

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"

const hotspots = [
  { id: "NY", coords: [-74.006, 40.7128] as [number, number], label: "New York" },
  { id: "SF", coords: [-122.4194, 37.7749] as [number, number], label: "San Francisco" },
  { id: "SP", coords: [-46.6333, -23.5505] as [number, number], label: "São Paulo" },
  { id: "LD", coords: [-0.1278, 51.5074] as [number, number], label: "London" },
  { id: "LG", coords: [3.3792, 6.5244] as [number, number], label: "Lagos" },
  { id: "DB", coords: [55.2708, 25.2048] as [number, number], label: "Dubai" },
  { id: "SG", coords: [103.8198, 1.3521] as [number, number], label: "Singapore" },
  { id: "SY", coords: [151.2093, -33.8688] as [number, number], label: "Sydney" },
  { id: "TK", coords: [139.6503, 35.6762] as [number, number], label: "Tokyo" },
  { id: "HK", coords: [114.1694, 22.3193] as [number, number], label: "Hong Kong" },
]

const arcConnections = [
  { from: "NY", to: "LD", delay: 0, duration: 3 },
  { from: "LD", to: "SG", delay: 1, duration: 3.5 },
  { from: "SG", to: "SY", delay: 2, duration: 4 },
  { from: "SG", to: "TK", delay: 0.5, duration: 3 },
  { from: "LD", to: "DB", delay: 1.5, duration: 3.2 },
  { from: "NY", to: "SP", delay: 2.5, duration: 3.8 },
  { from: "DB", to: "NY", delay: 3, duration: 4.2 },
  { from: "TK", to: "NY", delay: 1.2, duration: 4.5 },
  { from: "SF", to: "LD", delay: 0.8, duration: 3.4 },
  { from: "HK", to: "SG", delay: 1.8, duration: 3.6 },
  { from: "SP", to: "LG", delay: 2.2, duration: 3.9 },
  { from: "LG", to: "HK", delay: 0.3, duration: 3.1 },
  { from: "SF", to: "TK", delay: 1.1, duration: 4.8 },
  { from: "DB", to: "LD", delay: 2.1, duration: 3.3 },
]

interface TransactionArcProps {
  start: [number, number]
  end: [number, number]
  delay?: number
  duration?: number
  projection: (coords: [number, number]) => [number, number] | null
  isBackground?: boolean
}

const TransactionArc = ({ start, end, delay = 0, duration = 3, projection, isBackground = false }: TransactionArcProps) => {
  const id = useId()

  const startPos = projection(start)
  const endPos = projection(end)

  if (!startPos || !endPos) return null

  // Control point for quadratic bezier to create an arc
  const midX = (startPos[0] + endPos[0]) / 2
  const midY = Math.min(startPos[1], endPos[1]) - (Math.abs(startPos[0] - endPos[0]) * 0.15)
  const d = `M ${startPos[0]} ${startPos[1]} Q ${midX} ${midY} ${endPos[0]} ${endPos[1]}`

  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color-primary)" stopOpacity={isBackground ? "0.6" : "0.8"} />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={isBackground ? "0.3" : "0.5"}
        className="text-primary/20 dark:text-primary/10"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: delay * 0.5 }}
      />

      <motion.path
        d={d}
        fill="none"
        stroke={`url(#grad-${id})`}
        strokeWidth={isBackground ? "1.2" : "1.5"}
        strokeLinecap="round"
        initial={{ pathLength: 0.1, pathOffset: -0.1 }}
        animate={{ pathOffset: 1.1 }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </g>
  )
}

interface WorldMapProps {
  isBackground?: boolean
}

export function WorldMap({ isBackground = false }: WorldMapProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn(
        "relative w-full select-none overflow-hidden",
        isBackground
          ? "h-full opacity-0"
          : "aspect-[2/1] rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-900/20"
      )} />
    )
  }

  return (
    <div className={cn(
      "relative w-full select-none overflow-hidden",
      isBackground
        ? "h-full opacity-70 grayscale-[0.2] dark:brightness-110"
        : "aspect-[2/1] rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-900/20"
    )}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: isBackground ? 220 : 120,
          center: [0, 0]
        }}
        width={800}
        height={400}
        className="w-full h-full"
      >
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
            <circle cx="0.4" cy="0.4" r="0.3" fill="currentColor" />
          </pattern>
        </defs>

        {/* Map Background grid */}
        <rect x="-1000" y="-1000" width="2000" height="2000" fill="url(#dotPattern)" className={cn("text-zinc-100 dark:text-zinc-900", isBackground && "text-zinc-200 dark:text-zinc-700")} opacity={isBackground ? 0.4 : 0.3} />

        <Geographies geography={geoUrl}>
          {({ geographies, projection }) => (
            <>
              {/* Continents with dots and outlines */}
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="url(#dotPattern)"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className={cn(
                    "text-primary/20 dark:text-primary/10 stroke-primary/10 dark:stroke-primary/5 outline-none",
                    isBackground && "text-primary/40 dark:text-primary/30"
                  )}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))}

              {/* Arcs */}
              {arcConnections.map((arc, i) => {
                const start = hotspots.find(h => h.id === arc.from)?.coords
                const end = hotspots.find(h => h.id === arc.to)?.coords
                if (!start || !end) return null
                return (
                  <TransactionArc
                    key={i}
                    start={start}
                    end={end}
                    delay={arc.delay}
                    duration={arc.duration}
                    projection={projection}
                    isBackground={isBackground}
                  />
                )
              })}
            </>
          )}
        </Geographies>

        {/* Hotspots */}
        {hotspots.map((spot, i) => (
          <Marker key={spot.id} coordinates={spot.coords}>
            <circle
              r="2"
              className="fill-primary"
            />
            <motion.circle
              r="2"
              className="fill-primary"
              animate={{
                scale: [1, 3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
            <g className={cn("hidden md:block", isBackground && "hidden")}>
              <motion.text
                y={10}
                textAnchor="middle"
                style={{ fontSize: "10px" }}
                className="font-bold fill-zinc-400 dark:fill-zinc-500 uppercase tracking-widest pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {spot.label}
              </motion.text>
            </g>
          </Marker>
        ))}
      </ComposableMap>

      {/* Stats Overlay */}
      {!isBackground && (
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Live Network Activity</span>
            </div>
            <div className="text-xl md:text-2xl font-black tracking-tighter tabular-nums">
              <Counter value={12480} />
              <span className="text-xs text-zinc-400 ml-1 font-bold">TPS Peak</span>
            </div>
          </div>

          <div className="hidden md:block text-right">
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Edge Nodes Status</div>
            <div className="flex items-center gap-1.5 justify-end">
               <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                       <div className="w-1 h-1 rounded-full bg-green-500" />
                    </div>
                  ))}
               </div>
               <span className="text-[10px] font-black text-primary uppercase ml-1">100% Online</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Counter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = React.useState(value)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValue(prev => prev + Math.floor(Math.random() * 10))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return <span>{displayValue.toLocaleString()}</span>
}
