"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { AggregationMockup } from "@/components/aggregation-mockup"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function AggregationHero({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 italic">
              Unified Gateway Aggregation
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            One Integration. <br />
            <span className="text-primary italic">1,000+</span> Providers.
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect to every major payment gateway in the world through a single API.
            Reduce engineering debt and open your business to global markets instantly.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/20 transition-all">
              <a href={isLoggedIn ? "https://dashboard.payerone.com/billing?tab=manage" : "https://account.dhru.com/register?for=payerone.com"}>
                {isLoggedIn ? "Manage Billing" : "Start Integrating"}
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold rounded-full">
              <Link href="/developers">
                View API Docs
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] -z-10" />
          <AggregationMockup />
        </motion.div>
      </div>
    </section>
  )
}
