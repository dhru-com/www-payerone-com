"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Globe, Zap, Shield, Cpu, Activity, Server, Database } from "lucide-react"

export function Scale() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [bars, setBars] = useState<{ h1: string; h2: string; h3: string; dur: number }[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setBars(
        Array.from({ length: 40 }).map(() => ({
          h1: `${20 + Math.random() * 40}%`,
          h2: `${40 + Math.random() * 50}%`,
          h3: `${10 + Math.random() * 30}%`,
          dur: 2 + Math.random() * 2,
        }))
      )
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  const metrics = [
    {
      label: "Global Uptime",
      value: "99.999%",
      description: "Redundant contract-based architecture across all major networks.",
      icon: <Server className="h-5 w-5" />,
    },
    {
      label: "Settlement Time",
      value: "< 1s",
      description: "Funds move at the speed of the blockchain, directly to your wallet.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      label: "Transaction Capacity",
      value: "∞",
      description: "Horizontal scaling via decentralized nodes. No bottlenecks.",
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      label: "Data Integrity",
      value: "Immutable",
      description: "Every transaction is verified and secured by smart contracts.",
      icon: <Database className="h-5 w-5" />,
    },
  ]

  const supportedAssets = [
    { name: "Ethereum", logo: "/logos/ethereum.svg" },
    { name: "BSC", logo: "/logos/bsc.svg" },
    { name: "Polygon", logo: "/logos/polygon.svg" },
    { name: "Solana", logo: "/logos/solana.svg" },
    { name: "Base", logo: "/logos/base.svg" },
    { name: "Arbitrum", logo: "/logos/arbitrum.svg" },
    { name: "Optimism", logo: "/logos/optimism.svg" },
    { name: "Tron", logo: "/logos/tron.svg" },
    { name: "opBNB", logo: "/logos/opbnb.svg" },
    { name: "BTC", logo: "/logos/btc.svg" },
    { name: "USDT", logo: "/logos/usdt.svg" },
    { name: "USDC", logo: "/logos/usdc.svg" },
  ]

  return (
    <section ref={containerRef} className="py-32 bg-muted/30 border-y relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div style={{ opacity, scale }} className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="flex justify-center mb-6">
              <span className="px-4 py-1.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-primary/30" />
                02 Performance
                <span className="w-4 h-[1px] bg-primary/30" />
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              Built for <span className="text-primary italic">Infinite</span> Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              PayerOne is engineered to handle the demands of global enterprise commerce with zero latency and absolute reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Visual: Performance Dashboard */}
            <div className="lg:col-span-2 rounded-[2.5rem] border bg-card/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Activity className="h-24 w-24 text-primary" />
              </div>

              <div className="relative z-10">
                <Link href="/status" className="flex items-center gap-4 mb-12 w-fit hover:opacity-80 transition-opacity">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Network Status: Operational</span>
                </Link>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  {metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-primary mb-3">{metric.icon}</div>
                      <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Simulated "Scaling" Visualization */}
                <div className="h-48 w-full bg-secondary/30 rounded-3xl border relative overflow-hidden p-6">
                  <div className="flex items-end justify-between h-full gap-2">
                    {bars.map((bar, i) => (
                      <motion.div
                        key={i}
                        className="w-full bg-primary/20 rounded-t-sm"
                        initial={{ height: "20%" }}
                        animate={{
                          height: [bar.h1, bar.h2, bar.h3],
                        }}
                        transition={{
                          duration: bar.dur,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-6 py-2 rounded-full bg-background/80 border backdrop-blur-md shadow-xl">
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Load Balancing: Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Content: Reliability Features */}
            <div className="space-y-6">
              <div className="p-8 rounded-[2rem] border bg-secondary/10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Enterprise Reliability</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Our platform is built on a distributed network of validator nodes, ensuring that your payments are processed even during peak network congestion.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Multi-chain redundancy",
                    "Geographic failover",
                    "Real-time fraud monitoring",
                    "Automated error recovery"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <Shield className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Global Reach */}
          <div className="mt-8 p-8 rounded-[2rem] border bg-card flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-2xl bg-primary/10">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-lg font-bold">Multi-Chain Settlement Engine</div>
                <div className="text-sm text-muted-foreground">Direct integration with major blockchains and high-liquidity assets.</div>
              </div>
            </div>
            <div className="flex -space-x-3 overflow-hidden p-2">
              {supportedAssets.map((asset, i) => (
                <div
                  key={asset.name}
                  className="w-12 h-12 rounded-full border-4 border-card bg-white flex items-center justify-center overflow-hidden shadow-sm relative z-10 hover:-translate-y-1 transition-transform cursor-pointer"
                  title={asset.name}
                >
                  <Image
                    src={asset.logo}
                    alt={`${asset.name} logo`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-card bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold shadow-lg relative z-20">
                +20
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
