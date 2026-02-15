import { DetailedPricing } from "@/components/detailed-pricing"
import { CTA } from "@/components/cta"
import { Metadata } from "next"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Pricing | PayerOne",
  description: "Simple, transparent pricing for every business stage. Choose the plan that fits your needs.",
}

interface SubscriptionPlan {
  name: string
  badge: string
  popular?: boolean
  short_description: string
  full_description: string
  features: string[]
  pricing: {
    monthly: number
    annually: number
  }
  fees: {
    default: {
      fixed: number
      percent: number
      label: string
    }
    gateways: Record<string, {
      fixed: number
      percent: number
      label: string
    }>
  }
}

interface ApiResponse {
  status: string
  data: {
    subscription_plans: Record<string, SubscriptionPlan>
  }
}

async function getPricingData(): Promise<ApiResponse | null> {
  try {
    const res = await fetch("https://api.payerone.com/client/v1/init", {
      next: { revalidate: 3600 } // Cache for 1 hour
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch pricing data")
    }
    
    return res.json()
  } catch (error) {
    console.error("Pricing Fetch Error:", error)
    return null
  }
}

export default async function PricingPage() {
  const data = await getPricingData()
  const isLoggedIn = await isAuthenticated()
  
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <DetailedPricing initialData={data} isLoggedIn={isLoggedIn} />
      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
