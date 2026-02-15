"use client"

import { motion } from "framer-motion"
import { Share2, Zap, Globe, Shield, Smartphone, QrCode } from "lucide-react"

const paymentLinkFeatures = [
  {
    title: "Personalized URLs",
    description: "Claim your unique handle like payerone.me/@dhru. Professional, memorable, and trust-building.",
    icon: <Share2 className="h-6 w-6" />,
  },
  {
    title: "Instant Setup",
    description: "Create a payment link in under 30 seconds. No coding, no complicated integration required.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Social Media Ready",
    description: "Perfect for Instagram bios, Twitter profiles, or Telegram messages. Get paid anywhere you have an audience.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Non-Custodial",
    description: "Payments go directly to your wallet. You maintain 100% control over your funds at all times.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Mobile Optimized",
    description: "A seamless payment experience on any device, with deep-linking to popular mobile wallets.",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "Static QR Codes",
    description: "Download and print QR codes for your payment links. Perfect for physical stores or events.",
    icon: <QrCode className="h-6 w-6" />,
  },
]

export function PaymentLinkFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The Simplest Way to <br />
            <span className="text-primary italic">Accept Web3 Payments.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Payment Links remove all barriers to entry. No website needed, no technical skills required—just a link and a wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paymentLinkFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] border bg-card hover:bg-secondary/30 transition-all duration-300"
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
