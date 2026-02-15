"use client"

import { motion } from "framer-motion"
import { Repeat, FileText, Globe, Shield, BarChart3, Clock } from "lucide-react"

const invoicingFeatures = [
  {
    title: "Recurring Billing",
    description: "Set up automated subscription cycles. Bill monthly, annually, or on custom intervals with ease.",
    icon: <Repeat className="h-6 w-6" />,
  },
  {
    title: "Professional Templates",
    description: "Fully customizable, white-label invoice templates that match your brand identity perfectly.",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Multi-Currency Support",
    description: "Issue invoices in fiat or crypto. 135+ traditional currencies and 50+ major crypto assets supported.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Automated Tax Logic",
    description: "Built-in tax calculation engine for VAT, GST, and Sales Tax based on customer location.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Real-time Reconciliation",
    description: "Automatically match payments to invoices. Zero manual entry for blockchain transactions.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Smart Reminders",
    description: "Automated dunning and payment reminders to ensure you get paid on time, every time.",
    icon: <Clock className="h-6 w-6" />,
  },
]

export function InvoicingFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Everything You Need <br />
            <span className="text-primary font-serif italic">to Get Paid.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From one-time payments to complex subscription models, PayerOne provides the infrastructure to manage your entire revenue lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {invoicingFeatures.map((feature, index) => (
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
