import { SmartRoutingHero } from "@/components/smart-routing-hero"
import { Button } from "@/components/ui/button"
import { ChevronRight, GitBranch, Target, Zap, ShieldCheck, Activity, Scale, RefreshCw, ArrowDownWideNarrow, Globe, Check } from "lucide-react"
import { CTA } from "@/components/cta"
import { Metadata } from "next"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Smart Routing | PayerOne",
  description: "Intelligent traffic orchestration for your payment ecosystem. Automate selection logic based on geography, volume, and gateway health.",
}

export default async function SmartRoutingPage() {
  const isLoggedIn = await isAuthenticated()

  return (
    <div className="flex flex-col min-h-screen">
      <SmartRoutingHero isLoggedIn={isLoggedIn} />

      {/* 3-Step Process Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              How Routers Work: <br />
              <span className="text-primary">The 3-Step Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our Smart Orchestration System transforms your static list into a dynamic, 
              self-healing payment network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                name: "Visibility Check",
                title: "The &quot;Gatekeeper&quot;",
                desc: "Checks if the router applies to the order based on targeting and status.",
                items: ["Geo-fencing (Countries)", "Currency Support", "Scheduling & Hours", "Min/Max Amount Limits"],
                icon: <ShieldCheck className="h-6 w-6" />
              },
              {
                step: "02",
                name: "Quota & Health Check",
                title: "The &quot;Failover&quot;",
                desc: "Automatically skips accounts that are not ready for use to ensure 100% uptime.",
                items: ["Revenue Caps (Daily/Monthly)", "Order Count Limits", "Technical Health Status", "Gateway Latency Monitor"],
                icon: <Activity className="h-6 w-6" />
              },
              {
                step: "03",
                name: "Selection Strategy",
                title: "The &quot;Traffic Controller&quot;",
                desc: "Picks the best healthy member using your preferred distribution logic.",
                items: ["Round-Robin (Equal Load)", "Priority (Sequential Chain)", "Weighted (Custom %)", "Sticky Sessions"],
                icon: <Scale className="h-6 w-6" />
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-card border shadow-sm group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-zinc-100 group-hover:text-primary/10 transition-colors">{item.step}</span>
                </div>
                <h4 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2">{item.name}</h4>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{item.desc}</p>
                <ul className="space-y-3">
                  {item.items.map((li) => (
                    <li key={li} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Deep-Dive */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="p-8 rounded-[2rem] border bg-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <RefreshCw className="h-24 w-24" />
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  Round Robin
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Distributes traffic equally across all eligible members using a modulo operation based on total group orders. 
                  Perfect for keeping volume balanced across multiple accounts.
                </p>
                <div className="p-4 rounded-xl bg-muted/50 font-mono text-xs">
                   Order #1 → Use A | Order #2 → Use B | Order #3 → Use C
                </div>
              </div>

              <div className="p-8 rounded-[2rem] border bg-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <ArrowDownWideNarrow className="h-24 w-24" />
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <ArrowDownWideNarrow className="h-6 w-6 text-primary" />
                  Priority
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Treats the list as a sequential failover chain. Always tries the &quot;Top&quot; account first. 
                  Best for using preferred accounts with lower fees until they hit their limits.
                </p>
                <div className="p-4 rounded-xl bg-muted/50 font-mono text-xs">
                   If A is available? Use A. Else? Try B.
                </div>
              </div>

              <div className="p-8 rounded-[2rem] border bg-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Scale className="h-24 w-24" />
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary" />
                  Weighted
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Distributes traffic based on probability weights. The higher the weight, the more traffic a gateway receives.
                  Ideal for load balancing where some accounts are stronger than others.
                </p>
                <div className="p-4 rounded-xl bg-muted/50 font-mono text-xs">
                   Gateway A (80%) | Gateway B (20%)
                </div>
              </div>
            </div>

            <div className="lg:pl-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                Selection Strategies for <br />
                <span className="text-primary italic">Absolute Control.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Smart Routing moves your business logic out of your code and into a centralized control panel. 
                Change how payments are handled in real-time without a single deployment.
              </p>
              <ul className="space-y-6">
                {[
                   { title: "Zero Latency Selection", desc: "Routing decisions are made in under 10ms at the edge." },
                   { title: "Dynamic Availability", desc: "Gateways are automatically disabled if they report technical errors." },
                   { title: "Seamless Fallbacks", desc: "If a primary gateway fails, PayerOne immediately shifts to the next best path." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-24 bg-muted/30 border-y overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Real-World Scenarios
            </h2>
            <p className="text-xl text-muted-foreground">
              See how enterprise merchants use Smart Routing to protect revenue and optimize costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2.5rem] bg-white border border-primary/20 shadow-xl shadow-primary/5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                 <Globe className="h-4 w-4" /> &quot;Geo-Specific&quot; Rule
              </div>
              <h4 className="text-xl font-bold mb-4">European Card Optimization</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Create a Router called &quot;Europe Cards&quot; that only shows to customers in the EU. 
                Use 3 local merchant accounts set to Round-Robin to balance volume and minimize cross-border fees.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white border border-primary/20 shadow-xl shadow-primary/5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                 <Zap className="h-4 w-4" /> &quot;High-Ticket&quot; Rule
              </div>
              <h4 className="text-xl font-bold mb-4">Whale Transaction Guard</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trigger a specific high-priority router for orders over $5,000. 
                Route these transactions to your most stable and lowest-risk accounts with manual verification flags.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white border border-primary/20 shadow-xl shadow-primary/5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                 <ShieldCheck className="h-4 w-4" /> &quot;Safety&quot; Rule
              </div>
              <h4 className="text-xl font-bold mb-4">Automated Limit Protection</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Set a $200/day limit on a new account. Once reached, the Router automatically hides it 
                and shifts traffic to established accounts to prevent account flags.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
