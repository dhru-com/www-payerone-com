"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Clock, Globe, Shield, Activity, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface NetworkStatus {
  name: string
  status: "operational" | "degraded" | "outage"
  message: string
}

interface ApiResponse {
  status: string
  data: {
    status: {
      networks: Record<string, NetworkStatus>
    }
  }
}

export function StatusContent({ initialData }: { initialData: ApiResponse | null }) {
  const [mounted, setMounted] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success("Subscribed successfully!", {
      description: "We'll notify you of any system updates or incidents."
    })

    setIsSubmitting(false)
    setEmail("")
    setIsOpen(false)
  }

  const networks = initialData?.data?.status?.networks || {}
  const networkKeys = Object.keys(networks)

  // Simulated service status
  const services = [
    { name: "Public API", status: "operational" },
    { name: "Merchant Dashboard", status: "operational" },
    { name: "Checkout UI", status: "operational" },
    { name: "Express Wallet Gateway", status: "operational" },
    { name: "Notification Engine (Webhooks)", status: "operational" },
  ]

  const isAllOperational = networkKeys.every(k => networks[k].status === "operational")

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl opacity-50" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Global Status Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "rounded-2xl p-10 md:p-12 mb-16 border shadow-2xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden",
              isAllOperational ? "bg-green-500 border-green-600/20" : "bg-amber-500 border-amber-600/20"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />

            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 relative z-10">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>

            <div className="relative z-10 flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {isAllOperational ? "All Systems Operational" : "Partial System Outage"}
              </h1>
              <p className="text-white/80 font-medium">
                Verified at {mounted ? new Date().toLocaleTimeString() : "--:--:--"} • Updates every 60 seconds
              </p>
            </div>

            <div className="shrink-0 relative z-10">
               <Dialog open={isOpen} onOpenChange={setIsOpen}>
                 <DialogTrigger asChild>
                   <button className="px-6 py-3 rounded-full bg-white dark:bg-zinc-900 text-green-600 dark:text-green-400 font-bold text-sm shadow-xl hover:scale-105 transition-transform">
                      Subscribe to Updates
                   </button>
                 </DialogTrigger>
                 <DialogContent className="sm:max-w-md rounded-2xl">
                   <DialogHeader>
                     <DialogTitle className="text-2xl font-bold tracking-tight">Stay Informed</DialogTitle>
                     <DialogDescription className="text-base">
                       Get real-time email notifications about system status, maintenance, and resolved incidents.
                     </DialogDescription>
                   </DialogHeader>
                   <form onSubmit={handleSubscribe} className="space-y-6 pt-4">
                     <div className="space-y-2">
                       <div className="relative">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                         <Input
                           type="email"
                           placeholder="name@company.com"
                           className="h-12 pl-11 rounded-2xl bg-muted/50 border-muted focus-visible:ring-primary"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                         />
                       </div>
                     </div>
                     <Button
                       type="submit"
                       className="w-full h-12 rounded-2xl font-bold text-base"
                       disabled={isSubmitting}
                     >
                       {isSubmitting ? "Subscribing..." : "Join Status Mailing List"}
                     </Button>
                     <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                       No spam. Only critical system updates.
                     </p>
                   </form>
                 </DialogContent>
               </Dialog>
            </div>
          </motion.div>

          {/* Main Services */}
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              Core Services
            </h2>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all flex items-center justify-between group"
                >
                  <div className="font-bold text-lg">{service.name}</div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-green-500 uppercase tracking-widest group-hover:mr-1 transition-all">Operational</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Network Status */}
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Globe className="h-5 w-5 text-primary" />
              Web3 Networks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {networkKeys.map((key, index) => {
                const network = networks[key]
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-8 rounded-2xl border bg-card hover:shadow-xl transition-all space-y-6 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-lg">{network.name}</div>
                      <div className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                        network.status === "operational" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500" : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500"
                      )}>
                        {network.status}
                      </div>
                    </div>

                    {/* Simulated Uptime Bar */}
                    <div className="space-y-3">
                       <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          <span>90 Days History</span>
                          <span className="text-green-500">99.99% Uptime</span>
                       </div>
                       <div className="flex gap-1 h-8">
                          {Array.from({ length: 40 }).map((_, i) => (
                            <div
                              key={i}
                              className={cn(
                                "flex-1 rounded-sm transition-colors cursor-help",
                                i === 35 ? "bg-amber-400" : "bg-green-500 hover:bg-green-400"
                              )}
                              title={i === 35 ? "Minor degradation (Feb 10)" : "Operational"}
                            />
                          ))}
                       </div>
                       <div className="flex justify-between text-[9px] font-medium text-zinc-400">
                          <span>90 days ago</span>
                          <span>Today</span>
                       </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Past Incidents */}
          <div>
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              Past Incidents
            </h2>
            <div className="space-y-12">
               <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-200 border-4 border-background" />
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">February 15, 2026</div>
                  <div className="p-8 rounded-2xl bg-secondary/30 border space-y-4">
                     <h3 className="font-bold text-lg">No incidents reported.</h3>
                     <p className="text-sm text-muted-foreground">All systems remained operational throughout the day.</p>
                  </div>
               </div>

               <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-4 border-background" />
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">February 10, 2026</div>
                  <div className="p-8 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-4">
                     <h3 className="font-bold text-lg text-amber-900">Minor Network Congestion - BSC</h3>
                     <p className="text-sm text-amber-800/80 leading-relaxed">
                        <span className="font-bold">Resolved</span> - We observed delayed transaction confirmations on the Binance Smart Chain due to high network congestion. System automatically switched to secondary RPC nodes.
                     </p>
                     <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Duration: 14 minutes</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Security & Reliability Footer */}
          <div className="mt-24 p-10 rounded-2xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                   <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-1">Contract-Based Reliability</h4>
                   <p className="text-zinc-400 text-sm max-w-sm">PayerOne uses decentralized nodes to monitor events, ensuring zero single point of failure.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="text-center">
                   <div className="text-2xl font-bold">99.99%</div>
                   <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">SLA uptime</div>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="text-center">
                   <div className="text-2xl font-bold">&lt; 1s</div>
                   <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Event Latency</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
