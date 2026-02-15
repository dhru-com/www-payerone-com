import { Layers, Box, Gamepad2, Users2, Code2 } from "lucide-react"

export function Trust() {
  const industries = [
    { name: "DEFI", icon: <Layers className="h-5 w-5" /> },
    { name: "NFTs", icon: <Box className="h-5 w-5" /> },
    { name: "GAMING", icon: <Gamepad2 className="h-5 w-5" /> },
    { name: "DAOs", icon: <Users2 className="h-5 w-5" /> },
    { name: "INFRA", icon: <Code2 className="h-5 w-5" /> },
  ]

  return (
    <section className="py-16 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-8 h-[1px] bg-border" />
            Powering the next generation of Web3
            <span className="w-8 h-[1px] bg-border" />
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-24 opacity-40 grayscale hover:opacity-100 transition-opacity duration-500">
          {industries.map((item) => (
            <div key={item.name} className="flex items-center gap-3 text-lg font-bold text-foreground tracking-tighter">
              <div className="p-2 rounded-lg bg-muted flex items-center justify-center">
                {item.icon}
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
