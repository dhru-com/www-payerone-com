"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AggregationMockup() {
  const gateways = [
    { name: "Stripe", logo: "/gateways/stripe.svg" },
    { name: "PayPal", logo: "/gateways/paypal.svg" },
    { name: "Razorpay", logo: "/gateways/razorpay.svg" },
    { name: "Adyen", logo: "/gateways/adyen.svg" },
    { name: "Square", logo: "/gateways/square.svg" },
  ]

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-primary/10 animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      {/* Central Node (PayerOne) */}
      <motion.div
        className="relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-black flex items-center justify-center shadow-2xl border border-white/10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image src="/logo.svg" alt="PayerOne" fill className="object-contain" />
        </div>
        <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl -z-10 animate-pulse" />
      </motion.div>

      {/* Gateway Nodes */}
      {gateways.map((gateway, i) => {
        const angle = (i / gateways.length) * (2 * Math.PI) - Math.PI / 2
        const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 180
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={gateway.name}
            className="absolute z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border shadow-lg flex items-center justify-center p-3 md:p-4 group cursor-pointer"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x, y }}
            transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.1, zIndex: 30 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={gateway.logo}
                alt={gateway.name}
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>

            {/* Connection Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ left: '50%', top: '50%' }}>
              <motion.line
                x1={0}
                y1={0}
                x2={-x}
                y2={-y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/20"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
              />
            </svg>
          </motion.div>
        )
      })}

      {/* Pulsing Data Flow Particles */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * (2 * Math.PI) - Math.PI / 2
        const radius = 180
        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary z-15 hidden md:block"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, Math.cos(angle) * radius],
              y: [0, Math.sin(angle) * radius],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        )
      })}
    </div>
  )
}
