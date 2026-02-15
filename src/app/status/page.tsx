import { StatusContent } from "@/components/status-content"
import { CTA } from "@/components/cta"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Status | PayerOne",
  description: "Real-time status and uptime for PayerOne networks and services.",
}

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

async function getStatusData(): Promise<ApiResponse | null> {
  try {
    const res = await fetch("https://api.payerone.com/client/v1/init?status=true", {
      next: { revalidate: 60 } // Cache for 1 minute
    })

    if (!res.ok) {
      throw new Error("Failed to fetch status data")
    }

    return res.json()
  } catch (error) {
    console.error("Status Fetch Error:", error)
    return null
  }
}

export default async function StatusPage() {
  const data = await getStatusData()

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <StatusContent initialData={data} />
      <CTA />
    </div>
  )
}
