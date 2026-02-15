"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const networks = [
  { 
    name: "Ethereum", 
    logo: "/logos/ethereum.svg", 
    description: "The world's first smart contract platform.",
    type: "L1"
  },
  { 
    name: "Binance Smart Chain", 
    logo: "/logos/bsc.svg", 
    description: "High-performance EVM compatible network.",
    type: "L1"
  },
  { 
    name: "Polygon", 
    logo: "/logos/polygon.svg", 
    description: "Ethereum's primary scaling and infrastructure layer.",
    type: "L2/Sidechain"
  },
  { 
    name: "Solana", 
    logo: "/logos/solana.svg", 
    description: "High-speed, low-cost Layer 1 network.",
    type: "L1"
  },
  { 
    name: "Base", 
    logo: "/logos/base.svg", 
    description: "Secure, low-cost, builder-friendly L2 by Coinbase.",
    type: "L2"
  },
  { 
    name: "Arbitrum", 
    logo: "/logos/arbitrum.svg", 
    description: "The gold standard for Ethereum L2 scaling.",
    type: "L2"
  },
  { 
    name: "Optimism", 
    logo: "/logos/optimism.svg", 
    description: "Low-cost and lightning-fast L2 blockchain.",
    type: "L2"
  },
  { 
    name: "Tron", 
    logo: "/logos/tron.svg", 
    description: "Leading network for stablecoin transactions.",
    type: "L1"
  },
  { 
    name: "opBNB", 
    logo: "/logos/opbnb.svg", 
    description: "High-performance L2 solution for the BNB ecosystem.",
    type: "L2"
  },
  { 
    name: "Bitcoin", 
    logo: "/logos/btc.svg", 
    description: "The original decentralized digital currency.",
    type: "L1"
  },
]

const assets = [
  { name: "USDT", logo: "/logos/usdt.svg", fullName: "Tether USD" },
  { name: "USDC", logo: "/logos/usdc.svg", fullName: "USD Coin" },
]

export function NetworkSupport() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary/30" />
            Ecosystem Support
            <span className="w-4 h-[1px] bg-primary/30" />
          </span>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            Native Support for <br />
            <span className="text-primary italic">Every Major Network</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            PayerOne connects you to the entire Web3 ecosystem through a single integration. 
            No more managing multiple providers or complex node infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {networks.map((network, index) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group p-6 rounded-[2rem] border bg-card hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm">
                <Image
                  src={network.logo}
                  alt={`${network.name} logo`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-foreground text-sm">{network.name}</h3>
                <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-primary/10 text-primary uppercase">
                  {network.type}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {network.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-[2rem] bg-muted/30 border">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-1">High-Liquidity Assets</h4>
            <p className="text-sm text-muted-foreground">Native settlement for the world&apos;s most trusted stablecoins.</p>
          </div>
          <div className="flex gap-6">
            {assets.map((asset) => (
              <div key={asset.name} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border shadow-sm group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-8 h-8 relative">
                  <Image
                    src={asset.logo}
                    alt={asset.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold leading-none">{asset.name}</div>
                  <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{asset.fullName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
