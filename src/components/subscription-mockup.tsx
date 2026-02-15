"use client"

import { motion } from "framer-motion"
import {
  Users,
  RefreshCw,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
  Calendar
} from "lucide-react"
import { cn } from "@/lib/utils"

export function SubscriptionMockup() {
  const subscribers = [
    { name: "Global Tech Inc.", plan: "Enterprise", status: "Active", mrr: "$2,499", icon: "GT" },
    { name: "Design Studio", plan: "Growth", status: "Active", mrr: "$499", icon: "DS" },
    { name: "CryptoFlow", plan: "Startup", status: "Past Due", mrr: "$99", icon: "CF" },
    { name: "MetaVerse Ltd", plan: "Enterprise", status: "Active", mrr: "$2,499", icon: "MV" },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto rounded-[2.5rem] border bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] text-foreground">
      {/* Sidebar / Overview */}
      <div className="w-full md:w-[320px] bg-zinc-50 border-r p-8 flex flex-col gap-8">
        <div>
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">Subscription Overview</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white border shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">Monthly Recurring Revenue</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-xl font-bold tracking-tight">$142,850.00</div>
              <div className="text-[10px] font-bold text-green-600 mt-1 uppercase tracking-wider">+12.5% from last month</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">Active Subscriptions</span>
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div className="text-xl font-bold tracking-tight">1,284</div>
              <div className="text-[10px] font-bold text-primary mt-1 uppercase tracking-wider">98% retention rate</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">Upcoming Events</h3>
          <div className="space-y-3">
            {[
              { event: "Renewals (42)", date: "Feb 16", type: "renewal" },
              { event: "Trial Expirations (12)", date: "Feb 18", type: "trial" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border text-[11px] font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                  <span>{item.event}</span>
                </div>
                <span className="text-zinc-400">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6 border-t">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-primary/5 border border-primary/10">
            <RefreshCw className="h-5 w-5 text-primary animate-spin-slow" />
            <div>
              <div className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">Smart Retries</div>
              <div className="text-[9px] font-medium text-zinc-400 mt-1 uppercase tracking-wider">Automated churn recovery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-8 md:p-12 bg-white flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Subscriber Management</h2>
            <p className="text-zinc-500 text-sm">Monitor and manage your recurring customer base.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] font-bold">
                  {i}
                </div>
              ))}
            </div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">+1,281 others</span>
          </div>
        </div>

        {/* Subscription Table */}
        <div className="rounded-[2rem] border overflow-hidden shadow-sm">
          <div className="bg-zinc-50 px-6 py-4 border-b flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Customer & Plan</span>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Status & Revenue</span>
          </div>
          <div className="divide-y">
            {subscribers.map((sub, i) => (
              <div key={i} className="px-6 py-5 flex items-center justify-between hover:bg-zinc-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500 border">
                    {sub.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold flex items-center gap-2">
                      {sub.name}
                      <ArrowUpRight className="h-3 w-3 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[11px] text-zinc-400 font-medium">Plan: {sub.plan}</div>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="text-right">
                    <div className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1",
                      sub.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    )}>
                      {sub.status === "Active" ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                      {sub.status}
                    </div>
                    <div className="text-sm font-bold">{sub.mrr} / mo</div>
                  </div>
                  <MoreHorizontal className="h-5 w-5 text-zinc-300 cursor-pointer hover:text-foreground transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
          <div className="p-6 rounded-3xl border bg-zinc-50 flex items-center gap-6 group cursor-pointer hover:bg-white transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Multi-Asset Support</h4>
              <p className="text-[11px] text-zinc-400 font-medium">Auto-collect in USDT, USDC, or Fiat.</p>
            </div>
          </div>
          <div className="p-6 rounded-3xl border bg-zinc-50 flex items-center gap-6 group cursor-pointer hover:bg-white transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <RefreshCw className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Churn Recovery</h4>
              <p className="text-[11px] text-zinc-400 font-medium">Smart retry logic for failed payments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
