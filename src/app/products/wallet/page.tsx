import { WalletHero } from "@/components/wallet-hero"
import { WalletFeatures } from "@/components/wallet-features"
import { NetworkSupport } from "@/components/network-support"
import { CTA } from "@/components/cta"
import { Metadata } from "next"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Express Wallet | PayerOne",
  description: "Virtual deposit addresses for instant wallet top-ups. The fastest way to fund user balances without a multi-step checkout.",
}

export default async function WalletPage() {
  const isLoggedIn = await isAuthenticated()

  return (
    <div className="flex flex-col min-h-screen">
      <WalletHero isLoggedIn={isLoggedIn} />
      <WalletFeatures />
      <NetworkSupport />
      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
