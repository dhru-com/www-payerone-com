"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code2, Terminal, Cpu } from "lucide-react"

export function DevelopersHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 italic">
              Developer-First Payments Infrastructure
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Built by Developers. <br />
            <span className="text-primary italic">For</span> Developers.
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Integrate global Web3 payments with a single API. Robust documentation,
            powerful SDKs, and a high-fidelity sandbox environment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/20 transition-all">
              <Link href="https://dashboard.payerone.com/developer/docs">
                Quickstart Guide
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold rounded-full">
              <Link href="https://dashboard.payerone.com/developer/docs?tab=simulator">
                Explore API Reference
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              title: "Unified API",
              description: "One request to support 500+ wallets and all major chains.",
              icon: <Code2 className="h-6 w-6 text-primary" />,
            },
            {
              title: "Smart Webhooks",
              description: "Real-time, signed notifications for every transaction event.",
              icon: <Terminal className="h-6 w-6 text-primary" />,
            },
            {
              title: "Modern SDKs",
              description: "Official libraries for Node.js, Python, Go, and PHP.",
              icon: <Cpu className="h-6 w-6 text-primary" />,
            },
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
