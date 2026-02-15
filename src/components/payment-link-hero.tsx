"use client"

import { motion } from "framer-motion"
import { PaymentLinkMockup } from "@/components/payment-link-mockup"
import { Button } from "@/components/ui/button"
import { ChevronRight, Link as LinkIcon } from "lucide-react"

export function PaymentLinkHero({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
       {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 italic">
                Get paid with a single URL
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Payment Links. <br />
              <span className="text-primary italic">No Code</span> Required.
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Create a custom payment page in seconds. Share your personal handle like <span className="text-foreground font-bold">payerone.me/@username</span> and accept Web3 payments instantly across social media, emails, or messages.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg hover:shadow-primary/20 transition-all">
                <a href={isLoggedIn ? "https://dashboard.payerone.com/payments/payerone-me-link/introduction" : "https://account.dhru.com/register?for=payerone.com"}>
                  {isLoggedIn ? "Getting Started" : "Create your link"}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
              {!isLoggedIn && (
                <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold rounded-full group">
                  <a href="https://account.dhru.com/register?for=payerone.com">
                    <LinkIcon className="mr-2 h-5 w-5" />
                    Claim your handle
                  </a>
                </Button>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
             {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <PaymentLinkMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
