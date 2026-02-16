"use client"

import { motion } from "framer-motion"
import { FileText, Download, Send, CreditCard, Wallet, CheckCircle2, MoreVertical, Plus, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function InvoicingMockup() {
  const lineItems = [
    { desc: "Enterprise Platform Subscription", qty: 1, price: 2500.00 },
    { desc: "Priority API Support (Overage)", qty: 450, price: 0.50 },
    { desc: "Custom Domain Integration", qty: 1, price: 0.00 },
  ]

  const subtotal = lineItems.reduce((acc, item) => acc + (item.qty * item.price), 0)
  const tax = subtotal * 0.05
  const total = subtotal + tax

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950 p-4 md:p-8 shadow-2xl overflow-hidden text-foreground">
      <div className="bg-white dark:bg-zinc-900 rounded-xl border dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        {/* Sidebar / Actions */}
        <div className="w-full lg:w-72 bg-zinc-50 dark:bg-zinc-900/50 border-r dark:border-zinc-800 p-8 space-y-8">
          <div>
            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Invoice #INV-2026-001</div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Pending Payment
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-3">
                <Send className="h-4 w-4" />
                Send Invoice
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-800 border dark:border-zinc-700 font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <Download className="h-4 w-4" />
                Download PDF
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-800 border dark:border-zinc-700 font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <MoreVertical className="h-4 w-4" />
                More Actions
              </div>
            </button>
          </div>

          <div className="pt-8 border-t dark:border-zinc-800 space-y-4">
             <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">History</div>
             <div className="space-y-4">
                <div className="flex gap-3 text-xs">
                   <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-500" />
                   </div>
                   <div>
                      <div className="font-bold">Invoice Created</div>
                      <div className="text-zinc-400">Feb 15, 2026 • 14:32</div>
                   </div>
                </div>
                <div className="flex gap-3 text-xs">
                   <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Send className="h-3 w-3 text-blue-600 dark:text-blue-500" />
                   </div>
                   <div>
                      <div className="font-bold">Sent to Customer</div>
                      <div className="text-zinc-400">Feb 15, 2026 • 14:35</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Main Content / Invoice Document */}
        <div className="flex-grow p-8 md:p-12 space-y-12 bg-white dark:bg-zinc-900">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="space-y-4">
            <div className="h-10 w-10 rounded-lg bg-black dark:bg-zinc-800 flex items-center justify-center shadow-lg animate-in fade-in slide-in-from-top-4 duration-1000">
               <Zap className="h-5 w-5 text-white" />
            </div>
               <div>
                  <h3 className="text-xl font-bold">PayerOne Inc.</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">221B Baker Street<br />London, NW1 6XE</p>
               </div>
            </div>
            <div className="text-right space-y-1">
               <h2 className="text-3xl font-bold tracking-tighter uppercase">Invoice</h2>
               <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Billed to: Global Tech Corp</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y dark:border-zinc-800">
             <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Invoice Number</div>
                <div className="text-sm font-bold tracking-tight">INV-2026-001</div>
             </div>
             <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Date Issued</div>
                <div className="text-sm font-bold tracking-tight">Feb 15, 2026</div>
             </div>
             <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Due Date</div>
                <div className="text-sm font-bold tracking-tight">Mar 01, 2026</div>
             </div>
             <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Amount Due</div>
                <div className="text-sm font-bold tracking-tight text-primary">$2,861.25</div>
             </div>
          </div>

          {/* Line Items Table */}
          <div className="space-y-6">
             <table className="w-full text-left">
                <thead>
                   <tr className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                      <th className="pb-4">Description</th>
                      <th className="pb-4 text-center w-24">Qty</th>
                      <th className="pb-4 text-right w-32">Price</th>
                      <th className="pb-4 text-right w-32">Amount</th>
                   </tr>
                </thead>
                <tbody className="text-sm border-t dark:border-zinc-800">
                   {lineItems.map((item, i) => (
                      <tr key={i} className="border-b dark:border-zinc-800 group hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                         <td className="py-5 font-medium">{item.desc}</td>
                         <td className="py-5 text-center text-zinc-500 dark:text-zinc-400">{item.qty}</td>
                         <td className="py-5 text-right text-zinc-500 dark:text-zinc-400">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                         <td className="py-5 text-right font-bold">${(item.qty * item.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
             <button className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-primary transition-colors">
                <Plus className="h-3 w-3" />
                Add Item
             </button>
          </div>

          {/* Footer / Summary */}
          <div className="flex flex-col md:flex-row justify-between gap-12 pt-8">
             <div className="max-w-xs space-y-4">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Notes</div>
                <p className="text-xs text-zinc-400 leading-relaxed italic">
                   Thank you for choosing PayerOne. Payments can be made via credit card or directly in USDC/USDT on any supported network.
                </p>
             </div>
             <div className="w-full md:w-64 space-y-4">
                <div className="flex justify-between text-sm">
                   <span className="text-zinc-500">Subtotal</span>
                   <span className="font-medium">${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-zinc-500">Tax (5%)</span>
                   <span className="font-medium">${tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800 w-full" />
                <div className="flex justify-between text-lg font-bold">
                   <span>Total</span>
                   <span className="text-primary">${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Payment Footer Overlay (Mini Checkout Preview) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-zinc-900 dark:bg-zinc-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-6">
           <div className="p-3 rounded-xl bg-white/10 flex items-center justify-center">
              <Wallet className="h-6 w-6 text-white" />
           </div>
           <div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Pay with Crypto</div>
              <div className="text-lg font-bold text-white tracking-tight">USDC, USDT, ETH, and 50+ more</div>
           </div>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
           <button className="flex-grow md:flex-none px-8 h-12 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-100 transition-colors">
              Pay Now
           </button>
           <button className="p-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors">
              <CreditCard className="h-5 w-5" />
           </button>
        </div>
      </motion.div>
    </div>
  )
}
