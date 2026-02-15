import { CheckoutHero } from "@/components/checkout-hero"
import { CTA } from "@/components/cta"
import { CheckoutFeatures } from "@/components/checkout-features"
import { CheckoutStats } from "@/components/checkout-stats"
import { CheckoutCustomization } from "@/components/checkout-customization"
import { SupportedWallets } from "@/components/supported-wallets"
import { Metadata } from "next"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Checkout | PayerOne",
  description: "The world's most advanced Web3 checkout experience. High-conversion, non-custodial, and fully customizable.",
}

export default async function CheckoutPage() {
  const isLoggedIn = await isAuthenticated()

  return (
    <div className="flex flex-col min-h-screen">
      <CheckoutHero isLoggedIn={isLoggedIn} />
      <CheckoutStats />
      <SupportedWallets />
      <CheckoutFeatures />
      <CheckoutCustomization isLoggedIn={isLoggedIn} />
      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
