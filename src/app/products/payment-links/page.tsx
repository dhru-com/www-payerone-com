import { PaymentLinkHero } from "@/components/payment-link-hero"
import { PaymentLinkFeatures } from "@/components/payment-link-features"
import { CheckoutStats } from "@/components/checkout-stats"
import { CTA } from "@/components/cta"
import { Metadata } from "next"
import { isAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Payment Links | PayerOne",
  description: "Create a custom payment page in seconds. Share your personal handle like payerone.me/@username and accept Web3 payments instantly.",
}

export default async function PaymentLinksPage() {
  const isLoggedIn = await isAuthenticated()

  return (
    <div className="flex flex-col min-h-screen">
      <PaymentLinkHero isLoggedIn={isLoggedIn} />
      <CheckoutStats />
      <PaymentLinkFeatures />
      <div className="bg-muted/30 py-24 border-y">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Start Selling <span className="text-primary italic">Everywhere.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Whether you&apos;re selling digital art, collecting donations, or billing for services, PayerOne Payment Links give you a professional presence in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="p-8 rounded-2xl bg-background border shadow-sm">
               <div className="text-primary font-bold text-3xl mb-2">0%</div>
               <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Variable Fees</div>
            </div>
            <div className="p-8 rounded-2xl bg-background border shadow-sm">
               <div className="text-primary font-bold text-3xl mb-2">Instant</div>
               <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Settlement</div>
            </div>
            <div className="p-8 rounded-2xl bg-background border shadow-sm">
               <div className="text-primary font-bold text-3xl mb-2">Global</div>
               <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
      <CTA isLoggedIn={isLoggedIn} />
    </div>
  )
}
