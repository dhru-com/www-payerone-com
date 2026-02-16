import { Check, X } from "lucide-react"

export function Comparison() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden dark">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            PayerOne Web3 Payments vs <br className="hidden md:block" /> Traditional Payments
          </h2>
          <p className="text-xl text-zinc-400">
            Same experience. Faster settlement. Lower costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {/* PayerOne Column */}
          <div className="relative p-10 rounded-2xl border border-primary/50 bg-zinc-900/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col group hover:border-primary transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8">
               <span className="bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                 Recommended
               </span>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-colors" />

            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
              PayerOne
            </h3>

            <ul className="space-y-6 flex-grow">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 bg-green-500/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-xl text-white">$0.10 Fixed Transaction Fee (+ 0%)*</p>
                  <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                    *Fixed transaction fee varies by plan: $0.50 / $0.25 / $0.10
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 bg-green-500/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="h-4 w-4 text-green-400" />
                </div>
                <p className="font-bold text-xl text-white">Real-time settlement</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 bg-green-500/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="h-4 w-4 text-green-400" />
                </div>
                <p className="font-bold text-xl text-white">Direct wallet-to-wallet funds</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 bg-green-500/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="h-4 w-4 text-green-400" />
                </div>
                <p className="font-bold text-xl text-white">$0 dispute fee</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 bg-green-500/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="h-4 w-4 text-green-400" />
                </div>
                <p className="font-bold text-xl text-white">Real-time refund processing</p>
              </li>
            </ul>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-sm text-zinc-400 leading-relaxed italic">
                PayerOne does not hold, store, or control merchant funds. Payments are forwarded directly to your wallet using contract-based architecture.
              </p>
            </div>
          </div>

          {/* Traditional Payments Column */}
          <div className="p-10 rounded-2xl border border-zinc-800 bg-zinc-900/20 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-zinc-500">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              Traditional Payments
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 opacity-40 grayscale">
                <div className="mt-1.5 bg-zinc-800 p-1.5 rounded-full flex-shrink-0">
                  <X className="h-4 w-4 text-zinc-500" />
                </div>
                <p className="font-semibold text-zinc-300 text-lg">2.9% + fixed fee per transaction</p>
              </li>
              <li className="flex items-start gap-4 opacity-40 grayscale">
                <div className="mt-1.5 bg-zinc-800 p-1.5 rounded-full flex-shrink-0">
                  <X className="h-4 w-4 text-zinc-500" />
                </div>
                <p className="font-semibold text-zinc-300 text-lg">T+1 to T+7 settlement cycle</p>
              </li>
              <li className="flex items-start gap-4 opacity-40 grayscale">
                <div className="mt-1.5 bg-zinc-800 p-1.5 rounded-full flex-shrink-0">
                  <X className="h-4 w-4 text-zinc-500" />
                </div>
                <p className="font-semibold text-zinc-300 text-lg">$15 dispute fee</p>
              </li>
              <li className="flex items-start gap-4 opacity-40 grayscale">
                <div className="mt-1.5 bg-zinc-800 p-1.5 rounded-full flex-shrink-0">
                  <X className="h-4 w-4 text-zinc-500" />
                </div>
                <p className="font-semibold text-zinc-300 text-lg">1–5 days credit time</p>
              </li>
              <li className="flex items-start gap-4 opacity-40 grayscale">
                <div className="mt-1.5 bg-zinc-800 p-1.5 rounded-full flex-shrink-0">
                  <X className="h-4 w-4 text-zinc-500" />
                </div>
                <p className="font-semibold text-zinc-300 text-lg">2–10 days refund processing</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
