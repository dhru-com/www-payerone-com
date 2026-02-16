import Link from "next/link"
import Image from "next/image"

import { Send } from "lucide-react"

const footerLinks = {
  products: [
    { name: "Checkout", href: "/products/checkout" },
    { name: "Payment Links", href: "/products/payment-links" },
    { name: "Billing & Invoicing", href: "/products/invoicing" },
    { name: "Subscriptions", href: "/products/subscriptions" },
    { name: "Gateway Aggregation", href: "/products/aggregation" },
    { name: "Express Wallet", href: "/products/wallet" },
  ],
  developers: [
    { name: "Documentation", href: "/developer" },
    { name: "API Reference", href: "https://dashboard.payerone.com/developer/docs/api" },
    { name: "Webhooks", href: "https://dashboard.payerone.com/developer/docs/webhooks" },
    { name: "Status", href: "/status" },
  ],
  company: [
    { name: "About", href: "https://www.dhru.com" },
    { name: "Careers", href: "https://account.dhru.com/contact-us" },
    { name: "Contact", href: "https://account.dhru.com/contact-us" },
  ],
  legal: [
    { name: "Privacy Policy", href: "https://www.dhru.com/privacy-policy" },
    { name: "EULA", href: "https://www.dhru.com/eula" },
    { name: "Support Agreement", href: "https://www.dhru.com/support-agreement" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image src="/logo.svg" alt="PayerOne Logo" width={36} height={36} className="h-9 w-9 rounded-md group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-2xl tracking-tighter">PayerOne</span>
            </Link>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xs mx-auto lg:mx-0">
              Next-generation payment infrastructure for modern Web3 commerce.
            </p>
          </div>
          <div className="text-center md:text-left lg:pl-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Products</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left lg:pl-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Developers</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left lg:pl-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Company</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left lg:pl-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Legal</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} PayerOne Inc. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {/*<a href="https://www.linkedin.com/company/payerone" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">*/}
            {/*  <span className="sr-only">LinkedIn</span>*/}
            {/*  <Linkedin className="h-6 w-6" />*/}
            {/*</a>*/}
            <a href="https://t.me/payerone" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <span className="sr-only">Telegram</span>
              <Send className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
