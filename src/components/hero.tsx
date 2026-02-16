"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, ShieldCheck, Lock, Globe, ArrowUpRight, CheckCircle2, Activity } from "lucide-react"
import { DashboardMockup } from "@/components/dashboard-mockup"
import Image from "next/image"

export function Hero({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 border border-primary/20 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Pure Non-Custodial Crypto Payment Gateway
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Accept Crypto. <br />
              <span className="text-muted-foreground">Keep 100% Profits.</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Stop losing revenue to high percentage fees. PayerOne is a non-custodial gateway
              that settles payments directly to your wallet for a small, flat fixed-fee.
              Pure control. Zero custody.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <a href={isLoggedIn ? "https://dashboard.payerone.com/billing?tab=manage" : "https://account.dhru.com/register?for=payerone.com"}>
                  {isLoggedIn ? "Manage Billing" : "Get Started for Free"}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-xl backdrop-blur-sm hover:bg-secondary/80 transition-all">
                <Link href="/developers">
                  Explore Documentation
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap gap-8 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">0%</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Commission</span>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">Flat</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Fixed Fee</span>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">100%</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Non-Custodial</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative lg:mt-0 mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative group">
              {/* Animated Background Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[120%] md:h-[120%] -z-10 pointer-events-none">
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/5"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-[15%] rounded-full border border-primary/10"
                  animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-3xl blur-3xl group-hover:blur-4xl transition-all opacity-50" />

              <div className="relative rounded-2xl md:rounded-3xl border border-white/20 bg-white/5 p-1.5 md:p-2 shadow-2xl backdrop-blur-md overflow-hidden group/mockup">
               {/* Browser Window Chrome */}
               <div className="absolute top-4 left-5 md:top-5 md:left-6 flex gap-1.5 z-20">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/20 group-hover/mockup:bg-red-500/40 transition-colors" />
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-500/20 group-hover/mockup:bg-amber-500/40 transition-colors" />
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-500/20 group-hover/mockup:bg-emerald-500/40 transition-colors" />
               </div>

               <div className="rounded-xl md:rounded-2xl border border-zinc-200/50 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 overflow-hidden shadow-inner aspect-[4/5] md:aspect-[16/10] w-full relative">
                  <DashboardMockup />
               </div>
            </div>

              {/* Floating Element 1: Profit Maximizer (Fee Comparison) */}
              <motion.div
                className="absolute -bottom-16 -left-16 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-6 hidden md:block z-20 group/card"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Activity className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Profit Saved</span>
                    </div>
                    <div className="h-6 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-[10px] font-black text-green-600">
                      +98%
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-end justify-between gap-4">
                      <div className="text-3xl font-bold tracking-tighter text-foreground">$1,240.00</div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-600 mb-1">
                        <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                        <ArrowUpRight className="h-3 w-3" />
                        Live
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                       <motion.div
                         className="h-full bg-primary"
                         initial={{ width: "0%" }}
                         animate={{ width: "85%" }}
                         transition={{ duration: 1.5, delay: 1 }}
                       />
                    </div>
                    <div className="flex justify-between text-[9px] font-bold text-muted-foreground uppercase">
                       <span>Traditional Fee: $37.20</span>
                       <span className="text-primary font-black">Flat Fee: $0.10</span>
                    </div>
                  </div>
                </div>

                {/* Decorative glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity -z-10" />
              </motion.div>

              {/* Floating Element 2: Activity Notification (Social Proof) */}
              <motion.div
                className="absolute -top-16 -right-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-zinc-200/50 dark:border-zinc-800 shadow-2xl p-4 hidden md:flex items-center gap-4 z-20"
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="relative">
                  <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-200/50 dark:border-zinc-700">
                     <Image src="/logos/ethereum.svg" alt="ETH" width={24} height={24} className="dark:invert dark:brightness-0" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold text-foreground">Incoming Payment</span>
                    <span className="text-[9px] font-medium text-muted-foreground">Just now</span>
                  </div>
                  <div className="text-sm font-bold text-foreground">0.85 ETH <span className="text-muted-foreground font-medium text-xs ml-1">Received</span></div>
                  <div className="flex items-center gap-1.5 mt-1">
                     <div className="flex -space-x-1.5">
                        {[1, 2, 3].map((i) => (
                           <div key={i} className="h-4 w-4 rounded-full border border-white bg-zinc-200 overflow-hidden text-[6px] flex items-center justify-center font-bold">
                              {String.fromCharCode(64 + i)}
                           </div>
                        ))}
                     </div>
                     <span className="text-[9px] font-bold text-muted-foreground">10k+ Merchants live</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 3: Premium Mini Checkout */}
              <motion.div
                className="absolute top-1/2 -right-32 -translate-y-1/2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-2xl border border-zinc-200/50 dark:border-zinc-800 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] p-6 w-72 hidden xl:block z-30 group/checkout"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[11px] font-black text-foreground uppercase tracking-widest">Secure Checkout</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-bold text-primary flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </div>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-5 border border-zinc-100 dark:border-zinc-700 mb-6 relative overflow-hidden group/amount">
                   <div className="relative z-10">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Total Amount</div>
                      <div className="flex items-center gap-3 mb-1">
                         <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border dark:border-zinc-800 shadow-sm flex items-center justify-center">
                            <Image src="/logos/usdt.svg" alt="USDT" width={22} height={22} />
                         </div>
                         <span className="text-2xl font-bold tracking-tight text-foreground">1,240.00 <span className="text-sm text-muted-foreground uppercase font-medium">USDT</span></span>
                      </div>
                   </div>
                   <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="space-y-4">
                  <Button className="w-full h-12 rounded-2xl bg-primary text-white text-sm font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 relative overflow-hidden group/btn">
                    <span className="relative z-10 flex items-center gap-2">
                      Pay Now
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      animate={{ x: ['100%', '-100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </Button>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground font-bold uppercase tracking-wider">
                      <Lock className="h-3 w-3" />
                      Direct Settlement to Wallet
                    </div>
                    <div className="h-1 w-12 bg-zinc-100 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 4: Omnichain Hub */}
              <motion.div
                className="absolute bottom-1/4 -left-32 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md rounded-full border border-white/40 dark:border-zinc-800 shadow-xl px-6 py-3 hidden xl:flex items-center gap-4 z-20"
                animate={{
                  x: [0, 15, 0],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex -space-x-2">
                   {['polygon', 'arbitrum', 'solana', 'opbnb', 'base'].map((network) => (
                      <div key={network} className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-900 bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center p-1.5">
                         <Image src={`/logos/${network}.svg`} alt={network} width={20} height={20} className="dark:invert dark:brightness-0" />
                      </div>
                   ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-foreground uppercase tracking-widest leading-none">Omnichain</span>
                  <span className="text-[9px] font-bold text-muted-foreground">20+ Networks</span>
                </div>
                <div className="h-4 w-px bg-zinc-200" />
                <Globe className="h-4 w-4 text-primary animate-spin-slow" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
