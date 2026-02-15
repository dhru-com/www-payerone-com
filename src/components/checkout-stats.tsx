export function CheckoutStats() {
  return (
    <section className="py-12 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Conversion Lift", value: "35%+" },
            { label: "Supported Networks", value: "20+" },
            { label: "Uptime SLA", value: "99.99%" },
            { label: "Integration Time", value: "< 15 min" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1 tracking-tight">{stat.value}</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
