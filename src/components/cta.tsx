import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, ShieldCheck, CheckCircle2, Zap } from "lucide-react"

export function CTA({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const benefits = [
    {
      title: "Simple onboarding",
      description: "Get started in 5 minutes with automated verification.",
      icon: <Clock className="h-5 w-5 text-white" />,
    },
    {
      title: "No custody",
      description: "Funds go directly to your wallet. No middleman.",
      icon: <ShieldCheck className="h-5 w-5 text-white" />,
    },
    {
      title: "Secure infrastructure",
      description: "No private key storage. You maintain full control.",
      icon: <CheckCircle2 className="h-5 w-5 text-white" />,
    },
    {
      title: "Instant Go-Live",
      description: "Start accepting Web3 payments immediately.",
      icon: <Zap className="h-5 w-5 text-white" />,
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-zinc-900 dark:bg-zinc-900/50 rounded-2xl p-8 md:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                Modernize Your <br /> Payment Stack
              </h2>
              <p className="text-white/80 text-xl mb-12 max-w-lg leading-relaxed">
                Join the next generation of businesses accepting Web3 payments with the lowest fixed fees and absolute control over funds.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-white text-black hover:bg-zinc-100 shadow-xl hover:scale-105 transition-transform border-none">
                  <a href={isLoggedIn ? "https://dashboard.payerone.com/billing?tab=manage" : "https://account.dhru.com/register?for=payerone.com"}>
                    {isLoggedIn ? "Manage Billing" : "Become a Merchant"}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg font-semibold rounded-full border-white/20 text-white hover:bg-white/10 transition-all bg-transparent">
                  <a href="https://account.dhru.com/contact-us" target="_blank" rel="noopener noreferrer">
                    Contact Sales
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl mb-2">{benefit.title}</h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
