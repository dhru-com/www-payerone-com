"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Billing Precision", value: "100%", description: "Error-free tax and amount calculation." },
  { label: "Collection Speed", value: "2x Faster", description: "Accelerated receivables with automated reminders." },
  { label: "Uptime", value: "99.99%", description: "Reliable infrastructure for global operations." },
  { label: "Currency Options", value: "135+", description: "Support for global fiat and crypto payments." },
]

export function InvoicingStats() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">{stat.value}</div>
              <div className="text-sm font-bold text-foreground uppercase tracking-widest mb-2">{stat.label}</div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[150px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
