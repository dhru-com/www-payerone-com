import { SubscriptionHero } from "@/components/subscription-hero"
import { SubscriptionFeatures } from "@/components/subscription-features"
import { CTA } from "@/components/cta"
import { Metadata } from "next"
import { TrendingUp, Users, RefreshCw, ShieldCheck } from "lucide-react"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Subscriptions | PayerOne",
  description: "Automated recurring billing engine for modern businesses. Handle crypto and fiat subscriptions with ease.",
}

export default async function SubscriptionsPage() {
  const isLoggedIn = await isAuthenticated()

  return (
    <div className="flex flex-col min-h-screen">
      <SubscriptionHero isLoggedIn={isLoggedIn} />

      {/* Quick Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Collection Speed", value: "2x Faster", icon: <TrendingUp className="h-5 w-5 text-primary" /> },
              { label: "Churn Recovery", value: "35% Lift", icon: <RefreshCw className="h-5 w-5 text-primary" /> },
              { label: "Global Reach", value: "135+ Fiat", icon: <Users className="h-5 w-5 text-primary" /> },
              { label: "Asset Support", icon: <ShieldCheck className="h-5 w-5 text-primary" />, value: "50+ Crypto" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="p-2 rounded-lg bg-background shadow-sm border">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscriptionFeatures />

      {/* Narrative Section */}
      <section className="py-24 bg-muted/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                From First Trial <br />
                <span className="text-primary italic">To Lifetime Value.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                PayerOne Subscriptions is more than just a billing tool. It&apos;s a complete
                infrastructure for managing customer relationships and revenue predictability
                in the Web3 era.
              </p>
              <ul className="space-y-4">
                {[
                  "Automated email dunning for failed payments",
                  "Support for hybrid fiat/crypto billing models",
                  "Native API for custom checkout experiences",
                  "Enterprise-grade reporting and data exports"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl -z-10" />
              <div className="rounded-[3rem] border bg-card p-12 shadow-2xl relative">
                 <div className="space-y-8">
                    <div className="flex justify-between items-center border-b pb-8">
                       <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Lifecycle Engine</span>
                       <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest">Active</span>
                    </div>
                    {[
                      { step: "Trial Period", status: "Completed", date: "Day 0 - 14" },
                      { step: "Subscription Active", status: "Processing", date: "Monthly" },
                      { step: "Smart Retries", status: "Standby", date: "On Failure" },
                      { step: "Annual Upgrade", status: "Suggested", date: "90% Usage" },
                    ].map((step, i) => (
                      <div key={i} className="flex justify-between items-center group">
                        <div className="flex items-center gap-4">
                           <div className="w-8 h-8 rounded-full border bg-zinc-50 flex items-center justify-center text-[10px] font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {i + 1}
                           </div>
                           <div>
                              <div className="text-sm font-bold">{step.step}</div>
                              <div className="text-[11px] text-muted-foreground">{step.date}</div>
                           </div>
                        </div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{step.status}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
