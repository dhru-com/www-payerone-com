"use client"

import { motion } from "framer-motion"
import { Shield, Zap, RefreshCw, BarChart3, Lock, Cpu } from "lucide-react"

const walletFeatures = [
  {
    title: "Instant Credit",
    description: "Real-time on-chain monitoring ensures user balances are updated the moment the transaction is confirmed.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Non-Custodial",
    description: "Funds move directly to your merchant wallet. PayerOne never holds or controls your revenue.",
    icon: <Lock className="h-6 w-6" />,
  },
  {
    title: "Multi-Asset Support",
    description: "Accept USDC, USDT, BTC, ETH, and hundreds of other tokens across 15+ major networks.",
    icon: <RefreshCw className="h-6 w-6" />,
  },
  {
    title: "Address Pooling",
    description: "Efficiently manage thousands of virtual deposit addresses with our smart address reuse engine.",
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: "Detailed Analytics",
    description: "Track every top-up and deposit with granular data on asset performance and network usage.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Enterprise Security",
    description: "Built-in protection against double-spending and network-level attacks. 99.999% uptime guaranteed.",
    icon: <Shield className="h-6 w-6" />,
  },
]

export function WalletFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12 md:mb-20 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Everything you need for <br />
            <span className="text-primary">Global Funding Infrastructure.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Express Wallet provides a robust, developer-first solution for adding crypto balance top-ups to any application or platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {walletFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl border bg-card hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
