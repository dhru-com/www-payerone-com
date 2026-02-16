"use client"

import { motion } from "framer-motion"
import { Shield, Globe, Layers, GitBranch, Terminal, Code2 } from "lucide-react"

const aggregationFeatures = [
  {
    title: "Unified API",
    description: "Connect to Stripe, PayPal, Razorpay, and hundreds more through a single, standardized JSON API.",
    icon: <Terminal className="h-6 w-6" />,
  },
  {
    title: "Smart Routing",
    description: "Automatically route transactions to the gateway with the lowest fees or highest success rates.",
    icon: <GitBranch className="h-6 w-6" />,
  },
  {
    title: "Failover Protection",
    description: "If one gateway goes down, PayerOne instantly switches to a healthy provider to ensure zero downtime.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Developer First",
    description: "Comprehensive SDKs for every major language. Test all providers in a single sandbox environment.",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: "Global Compliance",
    description: "We handle the PCI DSS compliance across all providers, reducing your regulatory burden.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "One Reconciliation",
    description: "Unified reporting and settlements. No more logging into 10 different dashboards to see your revenue.",
    icon: <Layers className="h-6 w-6" />,
  },
]

export function AggregationFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12 md:mb-20 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Eliminate Gateway Fragmentation. <br />
            <span className="text-primary italic">Simplify Your Stack.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stop wasting engineering cycles on repetitive integrations. PayerOne Aggregation gives you a single point of control for your entire payment infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aggregationFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border bg-card hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
