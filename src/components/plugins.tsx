"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const plugins = [
  {
    name: "Shopify",
    description: "Official app for the world's leading commerce platform.",
    logo: "/plugins/shopify.svg",
    status: "Official App",
  },
  {
    name: "WooCommerce",
    description: "Native plugin for the most customizable platform.",
    logo: "/plugins/woocommerce.svg",
    status: "Plugin",
  },
  {
    name: "WHMCS",
    description: "Complete automation solution for web hosting providers.",
    logo: "/plugins/whmcs.svg",
    status: "Gateway",
  },
  {
    name: "OpenCart",
    description: "Free, open-source and highly performant e-commerce.",
    logo: "/plugins/opencart.svg",
    status: "Extension",
  },
  {
    name: "PrestaShop",
    description: "Efficient and innovative e-commerce Checkout experience.",
    logo: "/plugins/prestashop.svg",
    status: "Module",
  },
  {
    name: "Magento",
    description: "Enterprise-level commerce for high-volume merchants.",
    logo: "/plugins/magento.svg",
    status: "Extension",
  },
]

export function Plugins() {
  return (
    <section className="py-24 bg-muted/50 border-y overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center md:justify-start mb-6">
          <span className="px-4 py-1.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary/30" />
            05 Ecosystem
            <span className="w-4 h-[1px] bg-primary/30" />
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              E-commerce Plugins <br /> & Apps
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect PayerOne to your favorite platforms and start accepting Web3 payments without writing a single line of code.
            </p>
          </div>
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full group">
              <a href="https://dashboard.payerone.com/developer/docs/plugins" target="_blank" rel="noopener noreferrer">
                View All Integrations
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {plugins.map((plugin, index) => (
            <motion.div
              key={plugin.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group p-6 rounded-2xl border bg-card hover:bg-secondary/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 relative mb-4 flex items-center justify-center">
                <Image
                  src={plugin.logo}
                  alt={`${plugin.name} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">{plugin.name}</h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mb-3">
                {plugin.status}
              </p>
              <p className="text-[11px] text-muted-foreground leading-tight line-clamp-2">
                {plugin.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-secondary/30 border-2 border-dashed border-border flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Don&apos;t see your platform?</h3>
            <p className="text-muted-foreground">We&apos;re constantly building new integrations. Let us know what you need.</p>
          </div>
          <Button asChild size="lg" className="rounded-full px-8 font-bold">
            <a href="https://account.dhru.com/contact-us" target="_blank" rel="noopener noreferrer">
              Request Integration
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
