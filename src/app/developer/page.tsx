import { DeveloperHero } from "@/components/developer-hero"
import { CTA } from "@/components/cta"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Developer Hub | PayerOne",
  description: "Powerful APIs and webhooks for seamless Web3 payment integration. Built for developers, by developers.",
}

export default function DeveloperPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DeveloperHero />
      <CTA />
    </div>
  )
}
