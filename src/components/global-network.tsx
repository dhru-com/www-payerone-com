"use client"

import { motion } from "framer-motion"
import { WorldMap } from "@/components/world-map"
import { Globe, Zap, Shield, ArrowUpRight } from "lucide-react"

export function GlobalNetwork() {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden dark">
      {/* Background Map Integration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <WorldMap isBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-[0.2em] flex items-center gap-2 mb-8">
              <span className="w-4 h-[1px] bg-primary/30" />
              03 Global Reach
              <span className="w-4 h-[1px] bg-primary/30" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            The World&apos;s <span className="text-primary italic">Connected</span> <br />
            Payment Infrastructure.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl leading-relaxed"
          >
            PayerOne provides high-performance nodes in every major financial hub,
            ensuring your transactions are forwarded instantly, anywhere on Earth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              label: "150+ Countries",
              title: "Global Reach",
              desc: "Optimized for high-speed, multi-currency payment flows.",
              icon: <Globe className="h-6 w-6" />
            },
            {
              label: "Low Latency",
              title: "Edge Decisioning",
              desc: "Average routing decision made in under 10ms at the edge.",
              icon: <Zap className="h-6 w-6" />
            },
            {
              label: "Zero Trust",
              title: "Pure Non-Custodial",
              desc: "Direct wallet-to-wallet flow with zero-trust architecture.",
              icon: <Shield className="h-6 w-6" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">{item.label}</div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
           <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-md">
              <div className="flex items-center gap-4 px-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Edge Nodes Active Across 6 Continents</span>
                <div className="h-4 w-px bg-white/10 mx-2" />
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">100% Uptime Verified</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
