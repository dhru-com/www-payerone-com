import { Hero } from "@/components/hero"
import { Trust } from "@/components/trust"
import { Features } from "@/components/features"
import { Comparison } from "@/components/comparison"
import { Scale } from "@/components/scale"
import { GlobalNetwork } from "@/components/global-network"
import { Integration } from "@/components/integration"
import { Solutions } from "@/components/solutions"
import { Plugins } from "@/components/plugins"
import { CTA } from "@/components/cta"
import { Metadata } from "next"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "PayerOne | Non-Custodial Crypto Payment Gateway",
  description: "The pure non-custodial crypto payment gateway that settles payments directly to your wallet. Accept crypto with 0% commission and flat fixed fees.",
}

export default async function Home() {
  const isLoggedIn = await isAuthenticated()

  return (
    <div className="flex flex-col min-h-screen">
      <Hero isLoggedIn={isLoggedIn} />
      <Trust />
      <Comparison />
      <Features />
      <Scale />
      <GlobalNetwork />
      <Solutions />
      <Plugins />
      <Integration />
      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
