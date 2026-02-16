"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe, Cpu, Smartphone, Layout } from "lucide-react"

const checkoutFeatures = [
  {
    title: "500+ Wallets Supported",
    description: "MetaMask, Trust Wallet, Coinbase Wallet, Ledger, and many more via WalletConnect.",
    icon: <Layout className="h-6 w-6" />,
  },
  {
    title: "Direct Merchant Settlement",
    description: "Non-custodial architecture ensures funds move directly to your wallet. No middleman holding periods.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Fiat On-Ramps",
    description: "Allow customers to pay with Credit Cards or Bank Transfers directly into your crypto address.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Multi-Chain Routing",
    description: "Automatically detect and route payments across Ethereum, BSC, Polygon, Solana, and more.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Mobile First Design",
    description: "Optimized for deep-linking into mobile wallets for a seamless one-tap payment experience.",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "Developer SDKs",
    description: "Integrate with just a few lines of code using our React, Vue, and plain JS SDKs.",
    icon: <Cpu className="h-6 w-6" />,
  },
]

export function CheckoutFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12 md:mb-20 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Built for Conversion. <br />
            <span className="text-primary">Optimized for Speed.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every pixel of PayerOne Checkout is engineered to reduce friction and increase trust at the most critical point of the customer journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {checkoutFeatures.map((feature, index) => (
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
