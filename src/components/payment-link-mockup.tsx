"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

export function PaymentLinkMockup() {
  return (
    <div className="w-full max-w-md mx-auto aspect-[3/4] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-white dark:bg-zinc-950 rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border dark:border-zinc-800 p-10 flex flex-col items-center text-center relative overflow-hidden"
      >
        {/* Merchant Logo */}
        <div className="mb-8">
          <div className="h-10 w-10 rounded-lg bg-black dark:bg-white flex items-center justify-center shadow-lg animate-in fade-in slide-in-from-top-4 duration-1000">
            <Zap className="h-5 w-5 text-white dark:text-black" />
          </div>
        </div>

        {/* Header Information */}
        <div className="space-y-2 mb-10">
          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Paying</div>
          <h3 className="text-3xl font-bold tracking-tight text-foreground">DHRU</h3>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border dark:border-zinc-800 text-[11px] font-medium text-zinc-500 mt-2">
            PayerOne.me/@dhru
          </div>
        </div>

        {/* Amount Input Section */}
        <div className="w-full bg-zinc-50/80 dark:bg-zinc-900/80 rounded-xl p-8 mb-8 border border-zinc-100 dark:border-zinc-800 relative">
          <div className="flex items-center justify-center relative">
            <span className="absolute left-0 text-3xl font-light text-zinc-200 dark:text-zinc-800">$</span>
            <div className="text-5xl font-bold tracking-tighter text-foreground">
              11.11
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="h-[1px] flex-grow bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] whitespace-nowrap">Amount in USD</span>
            <div className="h-[1px] flex-grow bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>

        {/* Description Field Placeholder */}
        <div className="w-full mb-10">
          <div className="text-lg font-medium text-zinc-400/80 italic">
            What is this for?
          </div>
          <div className="h-[1px] w-full bg-zinc-100 dark:bg-zinc-800 mt-4" />
        </div>

        {/* Action Button */}
        <button className="w-full h-16 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mb-8">
          Continue
        </button>


        {/* Subtle Decorative Elements */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
      </motion.div>
    </div>
  )
}
