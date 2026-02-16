"use client"

import { motion } from "framer-motion"
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Users,
  RefreshCw,
  Layers
} from "lucide-react"

const subscriptionFeatures = [
  {
    title: "Flexible Plan Logic",
    description: "Easily configure monthly, yearly, or custom billing cycles with support for trials and setup fees.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Smart Churn Recovery",
    description: "Automated retry logic and customer notifications for failed payments to maximize retention.",
    icon: <RefreshCw className="h-6 w-6" />,
  },
  {
    title: "Instant Proration",
    description: "Handle upgrades and downgrades automatically with precise, mid-cycle calculations.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Global Compliance",
    description: "Built-in tax logic and regulatory compliance for global subscription businesses.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Subscription Analytics",
    description: "Deep insights into MRR, Churn, LTV, and cohort performance in real-time.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Customer Portal",
    description: "Self-service portal for your users to manage plans, view history, and update payments.",
    icon: <Users className="h-6 w-6" />,
  },
]

export function SubscriptionFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12 md:mb-20 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Engineered for <br />
            <span className="text-primary italic">Sustainable Growth.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Managing recurring revenue shouldn&apos;t be a headache. PayerOne provides the
            tools to automate the entire lifecycle of your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptionFeatures.map((feature, index) => (
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
