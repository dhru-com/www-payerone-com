"use client"

import { Building2, ShoppingBag, Store, Zap, CreditCard, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const solutions = [
  {
    title: "SaaS Platforms",
    description: "Automate recurring billing and scale your subscription engine with ease. Reduce churn with smart retries and local payment methods.",
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    title: "E-commerce Stores",
    description: "High-conversion Checkout experiences for global physical and digital goods. Zero-percent variable fees mean more profit for you.",
    icon: <ShoppingBag className="h-6 w-6" />,
  },
  {
    title: "Marketplaces",
    description: "Manage complex payouts to vendors and split payments automatically. Real-time settlement ensures your sellers are always happy.",
    icon: <Store className="h-6 w-6" />,
  },
  {
    title: "Web3 Applications",
    description: "Seamlessly bridge the gap between fiat and crypto for your dApp users. Non-custodial infrastructure keeps you in full control.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Subscription Businesses",
    description: "Advanced churn prevention and automated invoicing. Maintain consistent revenue with predictable fixed transaction costs.",
    icon: <CreditCard className="h-6 w-6" />,
  },
]

export function Solutions() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary/30" />
            03 Industry
            <span className="w-4 h-[1px] bg-primary/30" />
          </span>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight"
          >
            Solutions for Every Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Reduce payment fees. Eliminate settlement delays. Maintain full control of funds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] border bg-card hover:bg-secondary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {solution.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}

          <motion.a
            href="https://account.dhru.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-[2rem] border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-center group hover:border-primary transition-colors cursor-pointer"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Custom Solution?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Need something tailored for your specific business model? We&apos;re here to help.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold">
              <span>Talk to an expert</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
