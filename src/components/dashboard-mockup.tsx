"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  ShoppingBag,
  ArrowRightLeft,
  MapPin,
  Network,
  Link as LinkIcon,
  Key,
  Webhook,
  FileText,
  Plus,
  Settings,
  HelpCircle,
  Sun,
  ChevronRight,
  MoreVertical,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"

export function DashboardMockup() {
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 flex overflow-hidden font-sans text-foreground select-none">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col hidden md:flex shrink-0">
        <div className="p-6">

          <nav className="space-y-1 mt-5">
            <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" active />
            <SidebarItem icon={<ShoppingBag className="h-4 w-4" />} label="Orders" />
            <SidebarItem icon={<ArrowRightLeft className="h-4 w-4" />} label="Transactions" />

            <div className="pt-4 pb-2">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-3">Payments</span>
            </div>
            <SidebarItem icon={<MapPin className="h-4 w-4" />} label="Receiving Address" />
            <SidebarItem icon={<Network className="h-4 w-4" />} label="Payment Gateways" />
            <SidebarItem icon={<LinkIcon className="h-4 w-4" />} label="Payment Link" />

            <div className="pt-4 pb-2">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-3">Developer</span>
            </div>
            <SidebarItem icon={<Key className="h-4 w-4" />} label="API Keys" />
            <SidebarItem icon={<Webhook className="h-4 w-4" />} label="Webhooks" />
            <SidebarItem icon={<FileText className="h-4 w-4" />} label="Documentation" />
          </nav>
        </div>

        <div className="mt-auto p-4 space-y-4">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Wallet Balance</div>
              <div className="text-xs font-bold">$0.00</div>
            </div>
            <button className="w-8 h-8 rounded-md bg-black dark:bg-white dark:text-black text-white flex items-center justify-center shadow-md">
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-1">
            <SidebarItem icon={<Settings className="h-4 w-4" />} label="Settings" />
            <SidebarItem icon={<HelpCircle className="h-4 w-4" />} label="Get Help" />
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden font-bold text-xs">
              D
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold truncate">My Account</span>
                <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[8px] font-black px-1.5 py-0.5 rounded-full">FREE</span>
              </div>
              <div className="text-[10px] text-zinc-400 truncate">sam@payerone.com</div>
            </div>
            <MoreVertical className="h-4 w-4 text-zinc-400" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md cursor-pointer md:hidden">
              <LayoutDashboard className="h-5 w-5 text-zinc-500" />
            </div>
            <span className="text-sm font-bold">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border flex items-center justify-center text-zinc-400">
              <Sun className="h-4 w-4" />
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Top Row: Chart & Stats */}
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm p-4 md:p-8 space-y-4 md:space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">Live Volume</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-bold tracking-tighter">$1,240.00</span>
                    <span className="text-[10px] font-bold text-green-500 flex items-center">
                      <TrendingUp className="h-2.5 w-2.5 mr-1" />
                      12.5%
                    </span>
                  </div>
                </div>
              </div>

              {/* Line Chart Mockup */}
              <div className="h-32 md:h-48 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="800" y2="40" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                  <line x1="0" y1="100" x2="800" y2="100" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                  <line x1="0" y1="160" x2="800" y2="160" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

                  {/* Chart Path */}
                  <motion.path
                    d="M 0 160 L 40 150 L 80 155 L 120 130 L 160 140 L 200 110 L 240 125 L 280 90 L 320 100 L 360 70 L 400 85 L 440 50 L 480 65 L 520 40 L 560 55 L 600 30 L 640 45 L 680 20 L 720 35 L 760 10 L 800 25"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 0 160 L 40 150 L 80 155 L 120 130 L 160 140 L 200 110 L 240 125 L 280 90 L 320 100 L 360 70 L 400 85 L 440 50 L 480 65 L 520 40 L 560 55 L 600 30 L 640 45 L 680 20 L 720 35 L 760 10 L 800 25 L 800 200 L 0 200 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />

                  {/* Pulse Dot at the end */}
                  <motion.circle
                    cx="800"
                    cy="25"
                    r="5"
                    fill="var(--color-primary)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm overflow-hidden">
            <div className="p-4 md:p-6 border-b dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 md:h-10 px-3 md:px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center gap-2 text-[10px] md:text-xs font-bold">
                  <ShoppingBag className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  Orders
                </div>
                <div className="h-9 md:h-10 px-3 md:px-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center gap-2 text-[10px] md:text-xs font-bold text-zinc-400 cursor-pointer">
                  <ArrowRightLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  Transactions
                </div>
              </div>
              <button className="h-9 md:h-10 px-3 md:px-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center gap-2 text-[10px] md:text-xs font-bold text-zinc-500 transition-colors">
                View All
                <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50/50 dark:bg-zinc-800/50">
                    <th className="px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Order ID</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Status</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right">Amount</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest hidden sm:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <TableRowMockup
                    id="ORD-7592-KLA"
                    status="Paid"
                    amount="$105.50"
                    date="Just now"
                  />
                  <TableRowMockup
                    id="ORD-3821-XLP"
                    status="Paid"
                    amount="$42.00"
                    date="2 mins ago"
                  />
                  <TableRowMockup
                    id="ORD-9921-TRQ"
                    status="Pending"
                    amount="$12.99"
                    date="5 mins ago"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer",
      active ? "bg-zinc-100 dark:bg-zinc-800 text-foreground" : "text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-foreground"
    )}>
      {icon}
      <span>{label}</span>
    </div>
  )
}

function TableRowMockup({ id, status, amount, date }: { id: string, status: string, amount: string, date: string }) {
  return (
    <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer">
      <td className="px-4 md:px-6 py-3 md:py-4 font-mono text-[9px] md:text-[10px] text-zinc-500">{id}</td>
      <td className="px-4 md:px-6 py-3 md:py-4">
        <span className={cn(
          "text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full",
          status === "Paid" ? "bg-black dark:bg-white dark:text-black text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
        )}>
          {status}
        </span>
      </td>
      <td className="px-4 md:px-6 py-3 md:py-4 text-right font-bold text-[10px] md:text-xs tracking-tight">{amount}</td>
      <td className="px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[10px] font-medium text-zinc-400 whitespace-nowrap hidden sm:table-cell">{date}</td>
    </tr>
  )
}
