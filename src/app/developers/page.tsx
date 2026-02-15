import { DevelopersHero } from "@/components/developers-hero"
import { CTA } from "@/components/cta"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Developers | PayerOne",
  description: "Powerful APIs and webhooks for seamless Web3 payment integration. Built for developers, by developers.",
}

export default function DevelopersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DevelopersHero />
      <CTA />
    </div>
  )
}
