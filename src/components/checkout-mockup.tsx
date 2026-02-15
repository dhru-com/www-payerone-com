"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Clock, CreditCard, Wallet, ArrowLeft, Info, ChevronRight, Copy, ChevronDown, QrCode } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function CheckoutMockup() {
  const [view, setView] = React.useState<"methods" | "crypto" | "card" | "binance">("methods")
  const wallets = [
    { name: "Trust", logo: "/logos/trust.svg" },
    { name: "MetaMask", logo: "/logos/metamask.svg" },
    { name: "TronLink", logo: "/logos/tron_link.svg" },
    { name: "Base", logo: "/logos/base.svg" },
    { name: "Ledger Wallet", logo: "/logos/ledger_wallet.svg" },
    { name: "Binance", logo: "/logos/binance.svg" },
    { name: "OKX Wallet", logo: "/logos/okx_wallet.svg" },
    { name: "Rainbow", logo: "/logos/rainbow.svg" },
    { name: "Exodus Wallet", logo: "/logos/exodus_wallet.svg" },
    { name: "Trezor", logo: "/logos/trezor.svg" },
    { name: "SafePal", logo: "/logos/safepal.svg" },
    { name: "Other Wallets", logo: "/logos/wallet_connect.svg", isOther: true },
  ]

  const cryptoAssets = [
    { name: "BTC", logo: "/logos/btc.svg" },
    { name: "ETH", logo: "/logos/ethereum.svg" },
    { name: "USDT", logo: "/logos/usdt.svg" },
    { name: "USDC", logo: "/logos/usdc.svg" },
    { name: "TRX", logo: "/logos/tron.svg" },
    { name: "SOL", logo: "/logos/solana.svg" },
    { name: "BNB", logo: "/logos/bsc.svg" },
    { name: "MATIC", logo: "/logos/polygon.svg" },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto rounded-[2rem] border bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] text-foreground">
      {/* Left Panel */}
      <div className="w-full md:w-[380px] bg-zinc-50 border-r p-8 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest cursor-pointer hover:text-zinc-600 transition-colors">
            <ArrowLeft className="h-3 w-3" />
            Cancel and return
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white shadow-lg overflow-hidden">
               <Image src="/logo.svg" alt="Merchant Logo" width={40} height={40} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">DHRU</h3>
              <div className="text-3xl font-bold tracking-tighter mt-1">$11.11</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border shadow-sm p-6 space-y-6">
            <div className="flex justify-between items-center">
               <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Order Summary</span>
               <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-100 text-[10px] font-bold">
                 <Clock className="h-3 w-3 text-zinc-500" />
                 00:29:27
               </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                 <span className="text-sm font-medium">1 Year Domain Registration</span>
              </div>
              <div className="h-[1px] bg-zinc-100 w-full" />
              <div className="flex justify-between items-center pt-2">
                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Total</span>
                 <span className="text-lg font-bold tracking-tight">$11.11</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-green-50/50 border border-green-100">
             <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="h-5 w-5" />
             </div>
             <div>
               <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest leading-none">Secure Checkout</div>
               <div className="text-[9px] font-medium text-zinc-400 mt-1 uppercase tracking-wider">Guaranteed by DHRU</div>
             </div>
          </div>

          <div className="space-y-4">
             <div className="flex gap-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
               <a href="https://www.dhru.com/eula" target="_blank" rel="noopener noreferrer" className="border-b-2 border-zinc-200 cursor-pointer hover:border-zinc-400 transition-colors">EULA</a>
               <a href="https://www.dhru.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="border-b-2 border-zinc-200 cursor-pointer hover:border-zinc-400 transition-colors">Privacy</a>
             </div>
             <div className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest">Powered by PayerOne</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-grow p-8 md:p-12 bg-white relative overflow-hidden">
        <AnimatePresence mode="wait">
          {view === "methods" && (
            <motion.div
              key="methods"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Select Payment methods</h2>
                <p className="text-zinc-500 text-sm">Choose your preferred payment method to continue.</p>
              </div>

              <div className="relative rounded-[2.5rem] border-2 border-amber-100 bg-amber-50/20 p-8 pt-10">
                <div className="absolute top-0 right-0 p-8 text-zinc-300">
                  <Info className="h-4 w-4" />
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-lg font-bold">Connect Wallet</h3>
                  <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</span>
                </div>

                <div className="grid grid-cols-4 gap-y-8 gap-x-4">
                  {wallets.map((wallet, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer relative">
                      <div className="w-14 h-14 rounded-2xl bg-white border shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                        <Image src={wallet.logo} alt={wallet.name} width={28} height={28} className="grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <span className="text-[10px] font-bold text-zinc-500 group-hover:text-foreground transition-colors text-center">{wallet.name}</span>

                      {/* Tooltip for WalletConnect / Other Wallets */}
                      {wallet.isOther && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                          <div className="bg-white rounded-3xl border shadow-2xl p-6 w-[280px] relative">
                            {/* Tooltip Arrow */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r rotate-45" />

                            <div className="flex gap-4">
                              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                                <Image src="/logos/wallet_connect.svg" alt="WalletConnect" width={20} height={20} />
                              </div>
                              <div className="space-y-1">
                                <div className="text-[10px] font-black text-amber-700 uppercase tracking-[0.2em]">WalletConnect</div>
                                <div className="text-sm font-bold text-foreground">500+ wallets supported</div>
                                <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
                                  Scan the QR or open your wallet app to connect.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-[11px] text-zinc-400 text-center font-medium">Fastest checkout — auto-detects network and token.</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Other Methods</h4>

                <div
                  onClick={() => setView("crypto")}
                  className="flex items-center justify-between p-6 rounded-3xl border bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group"
                >
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-zinc-950 flex items-center justify-center shadow-lg p-2.5">
                        <Image src="/logos/crypto.svg" alt="Crypto" width={28} height={28} className="brightness-0 invert" />
                     </div>
                     <div>
                        <div className="text-sm font-bold">Crypto</div>
                        <div className="text-[11px] text-zinc-400 font-medium">Deposit Manually</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="flex -space-x-2">
                        {cryptoAssets.slice(0, 4).map((asset, i) => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center p-1">
                            <Image src={asset.logo} alt={asset.name} width={16} height={16} />
                          </div>
                        ))}
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-100 text-[8px] font-bold flex items-center justify-center shadow-sm">
                          +7
                        </div>
                     </div>
                     <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-primary transition-colors" />
                   </div>
                </div>

                <div
                  onClick={() => setView("card")}
                  className="flex items-center justify-between p-6 rounded-3xl border bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group"
                >
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-[#6772e5] flex items-center justify-center shadow-lg overflow-hidden p-2">
                        <Image src="/logos/stripe.svg" alt="Stripe" width={32} height={32} />
                     </div>
                     <div>
                        <div className="text-sm font-bold">Credit Or Debit Card</div>
                        <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider">Fiat / Card</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hidden sm:block">via Stripe</div>
                     <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-primary transition-colors" />
                   </div>
                </div>

                <div
                  onClick={() => setView("binance")}
                  className="flex items-center justify-between p-6 rounded-3xl border bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group"
                >
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-[#F0B90B] flex items-center justify-center shadow-lg overflow-hidden">
                        <Image src="/logos/binance_pay_c2c.svg" alt="Binance Pay" width={32} height={32} />
                     </div>
                     <div>
                        <div className="text-sm font-bold">Binance Pay</div>
                        <div className="text-[11px] text-zinc-400 font-medium">C2C / Direct Payment</div>
                     </div>
                   </div>
                   <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          )}

          {view === "crypto" && (
            <motion.div
              key="crypto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto space-y-8"
            >
              <div
                onClick={() => setView("methods")}
                className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest cursor-pointer hover:text-zinc-600 transition-colors w-fit"
              >
                <ArrowLeft className="h-3 w-3" />
                Back
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Crypto Payment</h2>
                <p className="text-zinc-500 text-sm">Select your preferred network and coin.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-2xl border bg-zinc-50 flex items-center justify-between cursor-pointer hover:bg-zinc-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm p-1">
                      <Image src="/logos/bsc.svg" alt="Binance" width={16} height={16} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Binance [BEP-20]</span>
                  </div>
                  <ChevronDown className="h-3 w-3 text-zinc-400" />
                </div>
                <div className="p-3 rounded-2xl border bg-zinc-50 flex items-center justify-between cursor-pointer hover:bg-zinc-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm p-1">
                      <Image src="/logos/usdt.svg" alt="USDT" width={16} height={16} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">USDT (Tether US...)</span>
                  </div>
                  <ChevronDown className="h-3 w-3 text-zinc-400" />
                </div>
              </div>

              <div className="rounded-3xl bg-black p-8 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">Amount to pay</div>
                      <div className="text-3xl font-bold tracking-tighter">11.11000000</div>
                      <div className="text-xs font-bold text-zinc-500 mt-1 uppercase tracking-widest">USDT</div>
                    </div>
                    <div className="flex flex-col items-end gap-6">
                      <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                        <Copy className="h-4 w-4" />
                      </button>
                      <span className="bg-red-950/50 text-red-500 text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-red-500/20">
                        Send exact amount
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.3em] text-center mb-6">Select your wallet to quick scan and pay</div>
                <div className="flex justify-between px-4">
                  {[
                    { name: "Manual", logo: "/logos/crypto.svg", active: true },
                    { name: "Binance", logo: "/logos/binance.svg" },
                    { name: "Coinbase", logo: "/logos/coinbase_wallet.svg" },
                    { name: "Metamask", logo: "/logos/metamask.svg" },
                    { name: "Trust", logo: "/logos/trust.svg" },
                  ].map((w, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 relative",
                        w.active ? "border-black shadow-md scale-110" : "bg-white shadow-sm group-hover:scale-105"
                      )}>
                        <Image src={w.logo} alt={w.name} width={24} height={24} className={cn("object-contain", !w.active && "grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100")} />
                        {w.active && (
                          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-black border-2 border-white flex items-center justify-center">
                            <ShieldCheck className="h-2 w-2 text-white" />
                          </div>
                        )}
                      </div>
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">{w.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.5rem] border-2 border-zinc-100 bg-zinc-50/50 p-10 flex flex-col items-center text-center">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-zinc-300" />
                   Deposit Address
                </div>

                <div className="relative mb-8 p-4 bg-white rounded-3xl border shadow-sm group cursor-pointer">
                  <QrCode className="h-32 w-32 text-black" />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/0 group-hover:bg-white/80 transition-all opacity-0 group-hover:opacity-100 rounded-3xl">
                    <div className="p-3 rounded-full bg-black text-white shadow-xl">
                      <Copy className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white border shadow-md flex items-center justify-center p-1.5">
                    <Image src="/logos/usdt.svg" alt="USDT" width={16} height={16} />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-6">
                  <div className="flex items-center gap-1.5">
                    <Image src="/logos/usdt.svg" alt="USDT" width={12} height={12} />
                    <span>USDT (Tether USD)</span>
                  </div>
                  <div className="w-[1px] h-3 bg-zinc-200" />
                  <div className="flex items-center gap-1.5">
                    <Image src="/logos/bsc.svg" alt="Binance" width={12} height={12} />
                    <span>Binance [BEP-20]</span>
                  </div>
                </div>

                <div className="w-full flex items-center gap-2 p-4 rounded-2xl bg-white border shadow-sm group cursor-pointer hover:border-black transition-colors">
                  <span className="text-[10px] font-mono font-medium text-zinc-600 truncate flex-grow text-left">
                    0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                  </span>
                  <Copy className="h-4 w-4 text-zinc-300 group-hover:text-black transition-colors" />
                </div>

                <p className="mt-6 text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                  Only send USDT (Tether USD) to this address
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Waiting for payment</span>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-[9px] font-bold text-zinc-300 uppercase tracking-[0.3em] leading-none">Monitoring network in real-time</div>
                  <div className="text-[9px] font-medium text-zinc-300 uppercase tracking-[0.3em] italic">Awaiting payment signature...</div>
                </div>
              </div>
            </motion.div>
          )}

          {view === "binance" && (
            <motion.div
              key="binance"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto space-y-8"
            >
              <div
                onClick={() => setView("methods")}
                className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest cursor-pointer hover:text-zinc-600 transition-colors w-fit"
              >
                <ArrowLeft className="h-3 w-3" />
                Back
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Payment Details</h2>
                <p className="text-zinc-500 text-sm">Select your preferred network and coin.</p>
              </div>

              <div className="p-3 px-6 rounded-2xl border bg-zinc-50 flex items-center gap-3 w-fit">
                <div className="w-8 h-8 rounded-lg bg-[#F0B90B] flex items-center justify-center p-1.5">
                   <Image src="/logos/binance_pay_c2c.svg" alt="Binance Pay" width={20} height={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Binance Pay - C2C</span>
              </div>

              <div className="rounded-[2.5rem] border bg-white p-10 space-y-10 shadow-sm flex flex-col items-center">
                <div className="flex items-center justify-center bg-white">
                  <QrCode className="h-56 w-56 text-black" />
                </div>

                <div className="text-center">
                   <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">USD</div>
                   <div className="text-4xl font-bold tracking-tighter">11.11</div>
                </div>

                <div className="w-full max-w-sm p-8 rounded-[2rem] bg-zinc-50 flex flex-col items-center gap-3">
                   <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Add Note</span>
                   <span className="text-3xl font-bold tracking-tight">67736</span>
                </div>

                <div className="w-full p-8 rounded-[2rem] border-2 border-dashed border-red-200 bg-red-50/30 text-center">
                  <p className="text-sm font-medium text-red-900 leading-relaxed max-w-md mx-auto">
                    Please ensure you type the correct amount and add this number <span className="font-bold underline">&quot;67736&quot;</span> in the NOTE. If any details are mismatched, the payment will not be processed automatically.
                  </p>
                </div>

                <div className="space-y-8 w-full text-center">
                  <p className="text-sm font-medium text-zinc-600 max-w-xs mx-auto">
                    Please scan this QR code with the Binance App, and continue to complete the payment.
                  </p>
                  <div className="relative h-48 w-full max-w-sm mx-auto rounded-[2rem] overflow-hidden border bg-zinc-50 flex items-center justify-center">
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-2xl bg-white border shadow-sm flex items-center justify-center">
                           <Image src="/logos/binance.svg" alt="Binance" width={24} height={24} />
                        </div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Binance App Scan</span>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {view === "card" && (
            <motion.div
              key="card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto space-y-8"
            >
              <div
                onClick={() => setView("methods")}
                className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest cursor-pointer hover:text-zinc-600 transition-colors w-fit"
              >
                <ArrowLeft className="h-3 w-3" />
                Back
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Payment Details</h2>
                <p className="text-zinc-500 text-sm">Select your preferred network and coin.</p>
              </div>

              <div className="p-3 px-6 rounded-2xl border bg-zinc-50 flex items-center gap-3 w-fit">
                <div className="w-8 h-8 rounded-lg bg-[#6772e5] flex items-center justify-center p-1.5">
                  <Image src="/logos/stripe.svg" alt="Stripe" width={20} height={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Credit or Debit Card</span>
              </div>

              <div className="rounded-[2.5rem] border bg-white p-10 space-y-8 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline group">
                   <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-black italic">S</div>
                   <span className="text-primary font-bold">Secure, fast checkout with Link</span>
                   <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Card number</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-100 text-lg font-medium focus:outline-none focus:border-primary/30 transition-colors"
                        readOnly
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                         <div className="w-9 h-6 rounded bg-blue-700 flex items-center justify-center shadow-sm">
                            <span className="text-[7px] font-black italic text-white tracking-tighter">VISA</span>
                         </div>
                         <div className="w-9 h-6 rounded bg-zinc-100 flex items-center justify-center shadow-sm relative overflow-hidden border">
                            <div className="absolute left-2 w-3.5 h-3.5 rounded-full bg-red-500/80" />
                            <div className="absolute right-2 w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Expiration date</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-100 text-lg font-medium focus:outline-none focus:border-primary/30 transition-colors"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Security code</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="CVC"
                          className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-100 text-lg font-medium focus:outline-none focus:border-primary/30 transition-colors"
                          readOnly
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                           <CreditCard className="h-5 w-5 text-zinc-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Country</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="United Kingdom"
                        className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-100 text-lg font-medium focus:outline-none focus:border-primary/30 transition-colors"
                        readOnly
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                         <ChevronDown className="h-5 w-5 text-zinc-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20">
                  Pay now
                </Button>
              </div>

              <div className="flex flex-col items-center gap-4 pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Waiting for payment</span>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-[9px] font-bold text-zinc-300 uppercase tracking-[0.3em] leading-none">Monitoring network in real-time</div>
                  <div className="text-[9px] font-medium text-zinc-300 uppercase tracking-[0.3em] italic">Connection active...</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
