import { Button } from "@/components/ui/button"
import { CheckCircle2, Layout, ArrowRight } from "lucide-react"

export function CheckoutCustomization({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  return (
    <section className="py-24 bg-muted/50 border-y relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
             <div className="rounded-2xl border bg-card p-10 shadow-2xl relative z-10">
                <h3 className="text-2xl font-bold mb-8 italic">Merchant Control</h3>
                <div className="space-y-6">
                  {[
                    "Custom brand colors & logos",
                    "Whitelabel domain support",
                    "Custom success & cancel URLs",
                    "Real-time payment webhooks",
                    "Flexible asset configuration"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-lg font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-10 border-t flex items-center justify-between">
                   <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Checkout.js v2.4</div>
                   <div className="h-2 w-32 rounded-full bg-primary/10 overflow-hidden">
                      <div className="h-full w-2/3 bg-primary" />
                   </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              Your Brand, <br /> Our Infrastructure.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Don&apos;t settle for a generic payment experience. PayerOne allows you to fully customize the checkout look and feel to match your brand identity while we handle the complex blockchain logic.
            </p>
            <div className="space-y-6 mb-12 text-left">
               <div className="flex gap-4 p-4 rounded-2xl bg-background border hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                    <Layout className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg">Hosted or Embedded</h4>
                     <p className="text-muted-foreground text-sm">Use our high-performance hosted checkout or embed the component directly into your site.</p>
                  </div>
               </div>
            </div>
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg font-bold group">
              <a href={isLoggedIn ? "https://dashboard.payerone.com/settings?tab=branding" : "https://account.dhru.com/register?for=payerone.com"}>
                Build your Checkout
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
