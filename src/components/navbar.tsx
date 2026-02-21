"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  ShoppingBag,
  Link as LinkIcon,
  FileText,
  RefreshCw,
  Network,
  GitBranch,
  Wallet,
  Menu,
  X
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const productGroups = [
  {
    title: "Accept Payments",
    items: [
      {
        title: "Checkout",
        href: "/products/checkout",
        description: "Hosted crypto + multi-provider Checkout experience.",
        icon: <ShoppingBag className="h-5 w-5" />,
      },
      {
        title: "Express Wallet",
        href: "/products/wallet",
        description: "Virtual deposit addresses for instant wallet top-ups without a full Checkout process.",
        icon: <Wallet className="h-5 w-5" />,
      },
      {
        title: "Payment Links",
        href: "/products/payment-links",
        description: "No-code payment collection.",
        icon: <LinkIcon className="h-5 w-5" />,
      },
      {
        title: "Invoices & Billing",
        href: "/products/invoicing",
        description: "One-time, recurring, subscriptions.",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        title: "Subscriptions",
        href: "/products/subscriptions",
        description: "Automated recurring billing engine.",
        icon: <RefreshCw className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Payment Aggregation",
    items: [
      {
        title: "Gateway Aggregation",
        href: "/products/aggregation",
        description: "Connect Stripe, PayPal, Razorpay, etc.",
        icon: <Network className="h-5 w-5" />,
      },
      {
        title: "Smart Routing",
        href: "/products/smart-routing",
        description: "Automatically route payments to optimal provider.",
        icon: <GitBranch className="h-5 w-5" />,
      },
    ],
  },
]

interface NavbarProps {
  isLoggedIn?: boolean;
}

export function Navbar({ isLoggedIn = false }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  // Close menu when resizing to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src="/logo.svg" alt="PayerOne Logo" width={36} height={36} className="h-9 w-9 rounded-md shadow-sm group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold text-xl md:text-2xl tracking-tighter">PayerOne</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-base font-medium">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-6 md:w-[700px] lg:w-[800px] rounded-2xl">
                    {productGroups.map((group) => (
                      <div key={group.title} className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary px-3">
                          {group.title}
                        </h4>
                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              icon={item.icon}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-base font-medium")}>
                  <Link href="/pricing">
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-base font-medium")}>
                  <Link href="/developer">
                    Developers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-base font-medium")}>
                  <Link href="/blog">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          {!isLoggedIn && (
            <Button asChild variant="ghost" size="lg" className="hidden md:flex text-base font-semibold">
              <a href="https://dashboard.payerone.com/login">Sign in</a>
            </Button>
          )}

          <Button asChild size="lg" className="group h-10 md:h-11 px-4 md:px-6 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all text-xs md:text-base">
            <a href={isLoggedIn ? "https://dashboard.payerone.com/" : "https://account.dhru.com/register?for=payerone.com"}>
              {isLoggedIn ? "Dashboard" : "Start now"}
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <ThemeToggle />

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t overflow-y-auto pb-20"
          >
            <div className="container mx-auto px-6 py-8 space-y-8">
              {productGroups.map((group) => (
                <div key={group.title} className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {group.title}
                  </h4>
                  <div className="grid gap-4">
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-center gap-4 p-2 -ml-2 rounded-xl hover:bg-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-base font-bold">{item.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-4 pt-4 border-t">
                <Link
                  href="/pricing"
                  className="block text-lg font-bold hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/developer"
                  className="block text-lg font-bold hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Developers
                </Link>
                <Link
                  href="/blog"
                  className="block text-lg font-bold hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </div>

              <div className="pt-4 space-y-4">
                <Button asChild size="lg" className="w-full h-14 rounded-xl text-lg font-bold shadow-lg">
                  <a href={isLoggedIn ? "https://dashboard.payerone.com/" : "https://account.dhru.com/register?for=payerone.com"}>
                    {isLoggedIn ? "Dashboard" : "Start now"}
                  </a>
                </Button>
                {!isLoggedIn && (
                  <Button asChild variant="outline" size="lg" className="w-full h-14 rounded-xl text-lg font-bold">
                    <a href="https://dashboard.payerone.com/login">Sign in</a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
