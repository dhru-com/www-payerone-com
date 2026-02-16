"use client"

import * as React from "react"
import { Copy, ChevronDown, Info } from "lucide-react"
import Image from "next/image"

export function WalletMockup() {
  return (
    <div className="w-full max-w-[340px] md:max-w-md mx-auto bg-white dark:bg-zinc-950 rounded-xl md:rounded-2xl border dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col min-h-[600px] md:min-h-[700px] text-foreground">
      <div className="p-5 md:p-8 space-y-4 md:space-y-6 flex-grow">
        {/* Header Selectors */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Select Coin</label>
            <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden flex items-center justify-center bg-white dark:bg-zinc-800 shadow-sm p-1">
                  <Image src="/logos/usdc.svg" alt="USDC" width={16} height={16} />
                </div>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">USDC</span>
              </div>
              <ChevronDown className="h-3 w-3 text-zinc-400" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Select Network</label>
            <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden flex items-center justify-center bg-white dark:bg-zinc-800 shadow-sm p-1">
                  <Image src="/logos/bsc.svg" alt="Binance" width={16} height={16} />
                </div>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider truncate">Binance [BEP-20]</span>
              </div>
              <ChevronDown className="h-3 w-3 text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="p-4 md:p-5 rounded-lg md:rounded-xl border border-amber-100 dark:border-amber-900/30 bg-amber-50/30 dark:bg-amber-900/10 space-y-3">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500">
            <Info className="h-4 w-4" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Important:</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-[10px] md:text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
              <div className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span>Only send <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 text-[9px] font-black text-indigo-600 dark:text-indigo-400 gap-1"><Image src="/logos/usdc.svg" width={10} height={10} alt="USDC" /> USDC</span> via <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 text-[9px] font-black text-amber-600 dark:text-amber-500 gap-1"><Image src="/logos/bsc.svg" width={10} height={10} alt="BSC" /> Binance [BEP-20]</span> network.</span>
            </li>
            <li className="flex items-start gap-2 text-[10px] md:text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
              <div className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span>Other tokens or networks will cause <span className="font-bold text-zinc-900 dark:text-zinc-100">permanent loss.</span></span>
            </li>
            <li className="flex items-start gap-2 text-[10px] md:text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
              <div className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span>Minimum deposit: <span className="px-2 py-0.5 rounded bg-black dark:bg-zinc-800 text-white dark:text-zinc-100 font-bold">USDC: 10.00</span></span>
            </li>
          </ul>
        </div>

        {/* Address Bar */}
        <div className="w-full flex items-center gap-2 p-3 md:p-4 rounded-lg md:rounded-xl bg-white dark:bg-zinc-900 border dark:border-zinc-800 shadow-sm group cursor-pointer hover:border-black dark:hover:border-white transition-colors">
          <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
             <Image src="/logos/usdc.svg" alt="USDC" width={14} height={14} />
          </div>
          <span className="text-[9px] md:text-[10px] font-mono font-medium text-zinc-600 dark:text-zinc-400 truncate flex-grow text-left">
            0x82f9b78818f4BEECBD2c16734092b99613939E01
          </span>
          <Copy className="h-4 w-4 text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" />
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center justify-center pt-2 md:pt-4">
          <div className="relative p-5 md:p-6 bg-white dark:bg-zinc-100 rounded-xl md:rounded-2xl border shadow-sm">
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,black_0%,transparent_70%)]" />
             </div>
             <div className="relative">
                {/* Simulated QR Code */}
                <div className="w-40 h-40 md:w-56 md:h-56 bg-white flex items-center justify-center relative">
                   <div className="grid grid-cols-5 grid-rows-5 w-full h-full gap-1 opacity-20">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="bg-black rounded-sm" />
                      ))}
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 md:w-48 md:h-48 border-[8px] md:border-[12px] border-black rounded-md" />
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center p-2 md:p-3">
                      <Image src="/logos/bsc.svg" alt="Binance" width={40} height={40} />
                   </div>
                </div>
             </div>
          </div>

          <div className="mt-6 md:mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">WAITING FOR PAYMENT...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
