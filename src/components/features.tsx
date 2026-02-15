import { CreditCard, Globe, Zap, ShieldCheck, BarChart3, Users } from "lucide-react"

const features = [
  {
    title: "Instant Settlement",
    description: "Funds are settled directly to your wallet in real-time. No holding periods, no delays.",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    title: "Pure Non-Custodial",
    description: "We never hold your funds. You maintain full control over your private keys and revenue.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Multi-Chain Support",
    description: "Accept payments across Ethereum, BNB Chain, Polygon, Arbitrum, and more.",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    title: "0% Commission",
    description: "Stop paying 1-3% in fees. We charge a tiny, flat fixed-fee per transaction.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Developer First",
    description: "Simple API and webhooks designed to integrate into any stack in minutes.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Smart Contracts",
    description: "Automated, transparent, and secure payment processing via audited smart contracts.",
    icon: <CreditCard className="h-6 w-6 text-primary" />,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_100%)] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-start mb-6">
          <span className="px-4 py-1.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary/30" />
            01 Crypto Gateway
            <span className="w-4 h-[1px] bg-primary/30" />
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              The Crypto Payment Gateway <br /> for Modern Business
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              PayerOne provides the pure non-custodial infrastructure needed to settle payments directly to your wallet.
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="px-4 py-2 rounded-full border bg-card text-sm font-semibold text-primary">
                Multiple Networks Supported
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="group p-8 rounded-3xl border bg-card hover:bg-secondary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
