"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Plus, ArrowUpRight } from "lucide-react"

const gateways = [
  { name: "Stripe", logo: "/gateways/stripe.svg", region: "Global" },
  { name: "PayPal", logo: "/gateways/paypal.svg", region: "Global" },
  { name: "Razorpay", logo: "/gateways/razorpay.svg", region: "India" },
  { name: "Square", logo: "/gateways/square.svg", region: "US / Canada" },
]

export function AggregationGateways() {
  return (
    <section className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Supported Gateways
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect to the world&apos;s most popular gateways, plus over 1,000+ local providers via a single integration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {gateways.map((gateway, index) => (
            <motion.div
              key={gateway.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 rounded-[2rem] border bg-card hover:bg-secondary/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 relative mb-6 flex items-center justify-center">
                <Image
                  src={gateway.logo}
                  alt={`${gateway.name} logo`}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all p-2"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{gateway.name}</h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                {gateway.region}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2rem] border bg-primary text-primary-foreground flex flex-col items-center justify-center text-center group hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            <div className="text-3xl font-bold mb-2">1,000+</div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-80">Local Providers</h3>
            <p className="text-[10px] leading-relaxed opacity-70">
              One API to rule them all. Worldwide coverage.
            </p>
          </motion.div>

          <motion.a
            href="https://account.dhru.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="p-8 rounded-[2rem] border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-center group hover:border-primary transition-colors cursor-pointer"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Plus className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Request Gateway</h3>
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <span>Submit Request</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
