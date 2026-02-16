"use client"

import { motion } from "framer-motion"
import { WorldMap } from "@/components/world-map"
import { Globe, Zap, Shield, ArrowUpRight } from "lucide-react"

export function GlobalNetwork() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center md:justify-start mb-6">
          <span className="px-4 py-1.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary/30" />
            03 Global Reach
            <span className="w-4 h-[1px] bg-primary/30" />
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight"
            >
              The World&apos;s <span className="text-primary italic">Connected</span> <br />
              Payment Infrastructure.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              PayerOne provides high-performance nodes in every major financial hub,
              ensuring your transactions are forwarded instantly, anywhere on Earth.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 w-full text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-bold uppercase tracking-wider">150+ Countries</span>
                </div>
                <p className="text-xs text-muted-foreground">Optimized for high-speed, multi-currency payment flows.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-bold uppercase tracking-wider">Low Latency</span>
                </div>
                <p className="text-xs text-muted-foreground">Average routing decision made in under 10ms at the edge.</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 p-6 rounded-2xl bg-secondary/30 border border-border w-full group cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Pure Non-Custodial</h4>
                    <p className="text-xs text-muted-foreground">Direct wallet-to-wallet flow with zero-trust architecture.</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="rounded-2xl border bg-card/50 backdrop-blur-sm p-4 md:p-10 shadow-2xl overflow-hidden relative group">
               <WorldMap />

               {/* Overlay Decorative Elements */}
               <div className="absolute top-6 left-6 p-3 rounded-xl bg-white/10 dark:bg-zinc-900/50 backdrop-blur-md border border-white/20 dark:border-zinc-800 shadow-sm pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/80">Edge Nodes Active</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
