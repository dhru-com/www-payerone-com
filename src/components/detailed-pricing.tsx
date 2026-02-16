"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, Info, ArrowRight, Zap, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface SubscriptionPlan {
  name: string
  badge: string
  popular?: boolean
  short_description: string
  full_description: string
  features: string[]
  pricing: {
    monthly: number
    annually: number
  }
  fees: {
    default: {
      fixed: number
      percent: number
      label: string
    }
    gateways: Record<string, {
      fixed: number
      percent: number
      label: string
    }>
  }
}

interface ApiResponse {
  status: string
  data: {
    subscription_plans: Record<string, SubscriptionPlan>
  }
}

export function DetailedPricing({ initialData, isLoggedIn = false }: { initialData: ApiResponse | null, isLoggedIn?: boolean }) {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annually">("annually")

  // Use initialData or fallback to empty if it fails (though the server should ideally handle this)
  const plans = initialData?.data?.subscription_plans || {}
  const planKeys = ["FREE", "STARTER", "PRO"]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl opacity-50" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Simple, <span className="text-primary italic">Fixed-Fee</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Predictable costs for modern Web3 commerce. No percentages, no hidden charges, just transparent fixed fees.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <span className={cn("text-sm font-bold transition-colors", billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
              className="relative w-14 h-8 rounded-full bg-muted border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <motion.div
                className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary shadow-lg"
                animate={{ x: billingCycle === "annually" ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={cn("text-sm font-bold transition-colors", billingCycle === "annually" ? "text-foreground" : "text-muted-foreground")}>Annually</span>
              <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Save 20%</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {planKeys.map((key, index) => {
            const plan = plans[key]
            if (!plan) return null

            const price = billingCycle === "monthly" ? plan.pricing.monthly : plan.pricing.annually
            const period = billingCycle === "monthly" ? "/mo" : "/yr"

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative p-8 md:p-10 rounded-2xl border bg-card flex flex-col transition-all duration-500",
                  plan.popular ? "border-primary shadow-2xl scale-105 z-20" : "shadow-sm hover:shadow-xl hover:-translate-y-1"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.short_description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold tracking-tighter">${price}</span>
                    <span className="text-muted-foreground font-medium">{period}</span>
                  </div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2 italic">
                    billed {billingCycle}
                  </p>
                </div>

                <div className="mb-8 p-4 rounded-2xl bg-secondary/50 border border-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Default Fee</span>
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{plan.fees.default.label}</div>
                  <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">+ 0% Percentage Fee</div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className={cn(
                    "w-full h-14 rounded-2xl font-bold text-base shadow-sm group",
                    plan.popular ? "shadow-primary/20" : ""
                  )}
                >
                  <a href={isLoggedIn ? "https://dashboard.payerone.com/billing?tab=manage" : "https://account.dhru.com/register?for=payerone.com"}>
                    {isLoggedIn ? "Manage Billing" : "Get Started"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </div>

        {/* Gateway Fee Breakdown Section */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Transparent Gateway Fees</h2>
            <p className="text-muted-foreground">We optimize every route to provide the lowest fixed fees per gateway.</p>
          </div>

          <div className="rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 border-b bg-muted/30">
              <div className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Gateway</div>
              <div className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Free Plan</div>
              <div className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Starter Plan</div>
              <div className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Pro Plan</div>
            </div>

            {/* Gateway Rows */}
            {["stripe", "paypal", "binance_pay", "binance_pay_c2c", "gate_io"].map((gw) => (
              <div key={gw} className="grid grid-cols-2 md:grid-cols-4 border-b last:border-0 hover:bg-secondary/20 transition-colors">
                <div className="p-6 flex items-center gap-3">
                   <div className="w-8 h-8 relative rounded-lg bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center p-1.5 overflow-hidden border dark:border-zinc-700">
                     {gw.includes('binance') ? (
                       <Image src="/logos/binance.svg" alt="Binance" fill className="object-contain p-1.5" />
                     ) : gw === 'gate_io' ? (
                       <div className="bg-primary text-white text-[8px] font-bold p-1">GATE</div>
                     ) : (
                       <Image
                         src={`/gateways/${gw}.svg`}
                         alt={gw}
                         fill
                         className="object-contain p-1.5"
                       />
                     )}
                   </div>
                   <span className="text-sm font-bold capitalize">{gw.replace(/_/g, ' ')}</span>
                </div>
                {planKeys.map((key) => {
                  const feeLabel = plans[key]?.fees.gateways[gw]?.label || "-"
                  return (
                    <div key={key} className="p-6 flex items-center">
                      <span className={cn(
                        "text-sm font-bold",
                        feeLabel === "FREE" ? "text-green-500" : "text-foreground"
                      )}>
                        {feeLabel}
                      </span>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              * Fixed transaction fees are charged per successful payment. No percentages are taken from your transaction volume on any plan.
              <br />
              Enterprise customers with high volume can <a href="https://account.dhru.com/contact-us" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">contact us</a> for custom volume-based fixed pricing.
            </p>
          </div>
        </div>

        {/* Feature Comparison Grid */}
        <div className="mt-32">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="h-6 w-6" />
                 </div>
                 <h4 className="text-xl font-bold">Instant Activation</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                    Set up your account and start accepting payments in minutes. No lengthy approval processes for crypto tiers.
                 </p>
              </div>
              <div className="space-y-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Shield className="h-6 w-6" />
                 </div>
                 <h4 className="text-xl font-bold">Absolute Security</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                    Non-custodial architecture means we never touch your funds. Your private keys stay yours, and funds move directly to your wallet.
                 </p>
              </div>
              <div className="space-y-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Globe className="h-6 w-6" />
                 </div>
                 <h4 className="text-xl font-bold">Global Compliance</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                    Automated tax calculation and geographic compliance rules built-in. Scale globally without regulatory headaches.
                 </p>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-48 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about PayerOne pricing.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What is a fixed transaction fee?",
                a: "Unlike traditional processors that charge a percentage (e.g., 2.9% + $0.30), PayerOne only charges a flat fee per transaction. This means whether you process $10 or $10,000, your PayerOne cost stays exactly the same."
              },
              {
                q: "Do I need a separate wallet for each plan?",
                a: "No, you can use any compatible Web3 wallet across all plans. PayerOne supports over 500+ wallets including MetaMask, Trust Wallet, and Hardware wallets via WalletConnect."
              },
              {
                q: "Are there any hidden monthly costs?",
                a: "The monthly/annual subscription price and the transaction fee are the only costs from PayerOne. Please note that blockchain network fees (gas) are separate and paid by the customer or merchant depending on your configuration."
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan at any time from your merchant dashboard. Changes take effect immediately, and billing is prorated."
              },
              {
                q: "How does the 'FREE' plan work for gateways like Stripe?",
                a: "On Starter and Pro plans, we don't charge any PayerOne fee for processing through your own Stripe account. You only pay Stripe's native processing fees. This makes PayerOne a powerful orchestration layer for all your payments."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border bg-card hover:bg-secondary/20 transition-all group"
              >
                <h4 className="text-lg font-bold mb-3 flex items-center justify-between">
                  {faq.q}
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
