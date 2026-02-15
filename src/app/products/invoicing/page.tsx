import { InvoicingHero } from "@/components/invoicing-hero"
import { InvoicingStats } from "@/components/invoicing-stats"
import { InvoicingFeatures } from "@/components/invoicing-features"
import { CTA } from "@/components/cta"
import { Metadata } from "next"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Invoices & Billing | PayerOne",
  description: "Enterprise-grade invoicing and billing infrastructure. Automate recurring billing, manage global tax logic, and collect payments in fiat or crypto.",
}

export default async function InvoicingPage() {
  const isLoggedIn = await isAuthenticated()

  return (
    <div className="flex flex-col min-h-screen">
      <InvoicingHero isLoggedIn={isLoggedIn} />
      <InvoicingStats />
      <InvoicingFeatures />
      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
