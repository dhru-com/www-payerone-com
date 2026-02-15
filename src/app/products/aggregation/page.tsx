import { AggregationHero } from "@/components/aggregation-hero"
import { AggregationFeatures } from "@/components/aggregation-features"
import { AggregationGateways } from "@/components/aggregation-gateways"
import { CTA } from "@/components/cta"
import { Metadata } from "next"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Gateway Aggregation | PayerOne",
  description: "Connect to every major payment gateway in the world through a single API. Reduce engineering debt and open your business to global markets instantly.",
}

export default async function AggregationPage() {
  const isLoggedIn = await isAuthenticated()

  return (
    <div className="flex flex-col min-h-screen">
      <AggregationHero isLoggedIn={isLoggedIn} />
      <AggregationGateways />
      <AggregationFeatures />
      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
