import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { Toaster } from "sonner";
import { isAuthenticated } from "@/lib/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.payerone.com"),
  title: {
    default: "PayerOne | Non-Custodial Crypto Payment Gateway",
    template: "%s | PayerOne"
  },
  description: "Pure non-custodial crypto payment gateway that settles payments directly to your wallet with 0% commission.",
  keywords: ["crypto payment gateway", "non-custodial", "bitcoin payment gateway", "ethereum payments", "stablecoin gateway", "web3 payments", "zero commission payments"],
  authors: [{ name: "PayerOne Team" }],
  creator: "PayerOne",
  publisher: "PayerOne",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PayerOne | Non-Custodial Crypto Payment Gateway",
    description: "Pure non-custodial crypto payment gateway that settles payments directly to your wallet with 0% commission.",
    url: "https://www.payerone.com",
    siteName: "PayerOne",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PayerOne - Non-Custodial Crypto Payment Gateway",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayerOne | Non-Custodial Crypto Payment Gateway",
    description: "Pure non-custodial crypto payment gateway that settles payments directly to your wallet with 0% commission.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = await isAuthenticated();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" richColors />
        <Navbar isLoggedIn={isLoggedIn} />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
