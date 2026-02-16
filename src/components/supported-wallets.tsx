"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
  { name: "Other Wallets", logo: "/logos/wallet_connect.svg" },
]

const networks = [
  { name: "Ethereum", logo: "/logos/ethereum.svg" },
  { name: "BSC", logo: "/logos/bsc.svg" },
  { name: "Polygon", logo: "/logos/polygon.svg" },
  { name: "Solana", logo: "/logos/solana.svg" },
  { name: "Base", logo: "/logos/base.svg" },
  { name: "Arbitrum", logo: "/logos/arbitrum.svg" },
  { name: "Optimism", logo: "/logos/optimism.svg" },
  { name: "Tron", logo: "/logos/tron.svg" },
  { name: "opBNB", logo: "/logos/opbnb.svg" },
]

export function SupportedWallets() {
  return (
    <section className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Supported Wallets & Networks
          </h2>
          <p className="text-xl text-muted-foreground">
            PayerOne integrates with over 500+ wallets and all major blockchain networks to ensure your customers can pay exactly how they want.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-center text-muted-foreground mb-10">Popular Wallets</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {wallets.map((wallet, i) => (
                <motion.div
                  key={wallet.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-zinc-800 border dark:border-zinc-700 shadow-sm flex items-center justify-center p-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Image
                      src={wallet.logo}
                      alt={wallet.name}
                      width={48}
                      height={48}
                      className="object-contain grayscale group-hover:grayscale-0 transition-all dark:invert dark:brightness-0 dark:group-hover:invert-0 dark:group-hover:brightness-100"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-zinc-500 group-hover:text-foreground transition-colors">{wallet.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-center text-muted-foreground mb-10">Major Networks</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {networks.map((network, i) => (
                <motion.div
                  key={network.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-zinc-800 border dark:border-zinc-700 shadow-sm flex items-center justify-center p-3">
                    <Image
                      src={network.logo}
                      alt={network.name}
                      width={32}
                      height={32}
                      className="object-contain dark:invert dark:brightness-0 hover:dark:invert-0 hover:dark:brightness-100 transition-all"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-zinc-400 dark:text-zinc-500">{network.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
