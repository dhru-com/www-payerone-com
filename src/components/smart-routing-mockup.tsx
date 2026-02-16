"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  GitBranch,
  Settings,
  ShieldCheck,
  Globe,
  Clock,
  ChevronRight,
  Check,
  RefreshCw,
  ArrowDownWideNarrow,
  Scale,
  Plus,
  Search,
  Zap,
  Layout,
  Calendar,
  DollarSign,
  ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"

export function SmartRoutingMockup() {
  const [activeTab, setActiveTab] = React.useState<"general" | "rules">("general")
  const [strategy, setStrategy] = React.useState<"round-robin" | "priority" | "weighted">("round-robin")

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden text-foreground">
      {/* Modal Header */}
      <div className="px-8 py-6 border-b dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50">
        <div>
          <h3 className="text-xl font-bold tracking-tight">Add Routing Policy</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">Group multiple gateways and define advanced visibility rules.</p>
        </div>
        <div className="w-8 h-8 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center justify-center cursor-pointer transition-colors">
          <Plus className="h-5 w-5 rotate-45 text-zinc-400" />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-8 py-4 border-b dark:border-zinc-800 flex items-center gap-8 bg-white dark:bg-zinc-950">
        <button
          onClick={() => setActiveTab("general")}
          className={cn(
            "flex items-center gap-2 text-sm font-bold transition-all relative pb-4 -mb-4",
            activeTab === "general" ? "text-primary" : "text-zinc-400 hover:text-zinc-600"
          )}
        >
          <Layout className="h-4 w-4" />
          General
          {activeTab === "general" && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
        </button>
        <button
          onClick={() => setActiveTab("rules")}
          className={cn(
            "flex items-center gap-2 text-sm font-bold transition-all relative pb-4 -mb-4",
            activeTab === "rules" ? "text-primary" : "text-zinc-400 hover:text-zinc-600"
          )}
        >
          <Zap className="h-4 w-4" />
          Availability Rules
          {activeTab === "rules" && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
        </button>
      </div>

      <div className="p-8 bg-white dark:bg-zinc-950 min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeTab === "general" && (
            <motion.div
              key="general"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Status Toggle */}
              <div className="p-6 rounded-xl bg-green-50/30 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-500">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold flex items-center gap-2">
                      Enable Routing Policy
                      <span className="text-[10px] bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full uppercase">Active</span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Is this router currently active and ready for use?</p>
                  </div>
                </div>
                <div className="w-12 h-6 rounded-full bg-green-500 relative p-1 cursor-pointer">
                  <div className="absolute right-1 top-1 bottom-1 aspect-square bg-white rounded-full shadow-sm" />
                </div>
              </div>

              {/* Names */}
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Internal Group Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Card Processing Pool"
                    className="w-full h-12 px-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-sm focus:outline-none focus:border-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Checkout Display Name (Mask)</label>
                  <input
                    type="text"
                    placeholder="e.g. Pay by Card"
                    className="w-full h-12 px-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-sm focus:outline-none focus:border-primary/30"
                  />
                </div>
              </div>

              {/* Selection Strategy */}
              <div className="space-y-6">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Selection Strategy</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: "round-robin", name: "Round Robin", desc: "Distributes traffic equally across all members.", icon: <RefreshCw className="h-5 w-5" /> },
                    { id: "priority", name: "Priority", desc: "Sequential failover chain. Tries first member first.", icon: <ArrowDownWideNarrow className="h-5 w-5" /> },
                    { id: "weighted", name: "Weighted", desc: "Distributes traffic based on custom percentages (%).", icon: <Scale className="h-5 w-5" /> },
                  ].map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setStrategy(s.id as "round-robin" | "priority" | "weighted")}
                      className={cn(
                        "p-6 rounded-xl border-2 transition-all cursor-pointer relative group",
                        strategy === s.id ? "border-primary bg-primary/5 shadow-lg" : "border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-700"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors",
                        strategy === s.id ? "bg-primary text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                      )}>
                        {s.icon}
                      </div>
                      <h4 className="font-bold text-sm mb-2">{s.name}</h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">{s.desc}</p>
                      {strategy === s.id && (
                        <div className="absolute top-4 right-4 text-primary">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Gateways */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Available Gateways</label>
                  <div className="flex items-center gap-2">
                    <div className="h-10 px-4 rounded-lg border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center gap-2 text-xs font-bold text-zinc-500">
                      All Types <ChevronRight className="h-3 w-3 rotate-90" />
                    </div>
                    <div className="h-10 px-4 rounded-lg border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center gap-2 text-xs font-bold text-zinc-500">
                      <Search className="h-3 w-3" />
                      Search gateways...
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Binance Pay - C2C", sub: "BINANCE PAY (C2C)", logo: "/logos/binance.svg" },
                    { name: "Credit Or Debit Card", sub: "STRIPE", logo: "/logos/stripe.svg" },
                  ].map((g) => (
                    <div key={g.name} className="p-4 rounded-xl border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between group cursor-pointer hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 border dark:border-zinc-700 flex items-center justify-center p-2 shadow-sm">
                          <img src={g.logo} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <div className="text-sm font-bold tracking-tight">{g.name}</div>
                          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{g.sub}</div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <Plus className="h-4 w-4 text-zinc-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "rules" && (
            <motion.div
              key="rules"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Rules Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Priority</label>
                  <div className="h-12 px-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-sm font-bold">1</span>
                    <div className="flex flex-col">
                      <ChevronRight className="h-3 w-3 -rotate-90 text-zinc-400" />
                      <ChevronRight className="h-3 w-3 rotate-90 text-zinc-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Timezone</label>
                  <div className="h-12 px-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-sm font-bold">UTC</span>
                    <ChevronRight className="h-3 w-3 rotate-90 text-zinc-400" />
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="p-6 rounded-xl border dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <Calendar className="h-4 w-4" />
                  Schedule & Timing
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Date Range (Start)</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center gap-2 text-xs text-zinc-400">
                      <Calendar className="h-3 w-3" /> Pick a date
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Date Range (End)</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center gap-2 text-xs text-zinc-400">
                      <Calendar className="h-3 w-3" /> Pick a date
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Daily Time (From)
                    </label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-between text-xs text-zinc-400">
                      None <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Daily Time (To)
                    </label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-between text-xs text-zinc-400">
                      None <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Active Days</label>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex gap-4">
                      <span className="cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300">All</span>
                      <span className="cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300">None</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="w-10 h-10 rounded-lg border dark:border-zinc-800 bg-white dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 cursor-pointer hover:border-primary hover:text-primary transition-colors">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Geo & Currency */}
              <div className="p-6 rounded-xl border dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <Globe className="h-4 w-4" />
                  Geo & Currency Targeting
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Allow Countries</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-between text-xs text-zinc-400">
                      Add Country... <Search className="h-3 w-3" />
                    </div>
                    <p className="text-[10px] text-zinc-400 font-medium">Limit this router to specific countries.</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Deny Countries</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-between text-xs text-zinc-400">
                      Block Country... <Search className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Allow Currencies</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-between text-xs text-zinc-400">
                      Add Currency... <Search className="h-3 w-3" />
                    </div>
                    <p className="text-[10px] text-zinc-400 font-medium">Limit this router to specific currencies.</p>
                  </div>
                </div>
              </div>

              {/* Quotas */}
              <div className="p-6 rounded-xl border dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <DollarSign className="h-4 w-4" />
                  Quotas & Transaction Limits
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Min Transaction</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-between text-xs text-zinc-400">
                      <DollarSign className="h-3 w-3" />
                      <div className="flex flex-col"><ChevronDown className="h-2 w-2 rotate-180" /><ChevronDown className="h-2 w-2" /></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Max Transaction</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-between text-xs text-zinc-400">
                      <DollarSign className="h-3 w-3" />
                      <div className="flex flex-col"><ChevronDown className="h-2 w-2 rotate-180" /><ChevronDown className="h-2 w-2" /></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Daily Amount Limit</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-end text-xs text-zinc-400">
                      <div className="flex flex-col"><ChevronDown className="h-2 w-2 rotate-180" /><ChevronDown className="h-2 w-2" /></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Monthly Amount Limit</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-end text-xs text-zinc-400">
                      <div className="flex flex-col"><ChevronDown className="h-2 w-2 rotate-180" /><ChevronDown className="h-2 w-2" /></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Daily Order Limit</label>
                    <div className="h-10 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-end text-xs text-zinc-400">
                      <div className="flex flex-col"><ChevronDown className="h-2 w-2 rotate-180" /><ChevronDown className="h-2 w-2" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-8 py-6 border-t dark:border-zinc-800 flex items-center justify-end gap-3 bg-zinc-50/50 dark:bg-zinc-900/50">
        <Button variant="ghost" className="font-bold">Cancel</Button>
        <Button className="rounded-lg px-8 font-bold shadow-lg shadow-primary/20">Save Policy</Button>
      </div>
    </div>
  )
}
