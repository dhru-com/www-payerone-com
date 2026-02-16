"use client"

import { motion } from "framer-motion"
import { WalletMockup } from "@/components/wallet-mockup"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap } from "lucide-react"

export function WalletHero({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
       {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 italic">
                Direct Wallet Funding
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Express Wallet <br />
              <span className="text-primary italic">Top-ups</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Give your users a virtual deposit address for instant wallet credits.
              The fastest way to top up balances without a multi-step checkout process.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg hover:shadow-primary/20 transition-all">
                <a href={isLoggedIn ? "https://dashboard.payerone.com/payments/express-wallet" : "https://account.dhru.com/register?for=payerone.com"}>
                  {isLoggedIn ? "Get Started" : "Start Integrating"}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold rounded-full">
                <a href={isLoggedIn ? "https://dashboard.payerone.com/developer/docs#express-wallet" : "/developers"}>
                  View API Docs
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 p-6 rounded-2xl bg-secondary/50 border backdrop-blur-sm space-y-4 max-w-md w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest">Real-Time Detection</div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                PayerOne monitors blockchain events in real-time. As soon as a deposit is detected,
                your system is notified via secure webhooks to credit the user instantly.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex-shrink-0 scale-[0.9] md:scale-100 origin-top lg:origin-center"
          >
             {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <WalletMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
