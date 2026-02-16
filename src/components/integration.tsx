"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Terminal, Key, Rocket, Copy, Check } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as React from "react"
import { toast } from "sonner"

export function Integration() {
  const [copied, setCopied] = React.useState(false)

  const steps = [
    {
      title: "1. Register and verify your account",
      description: "Complete our streamlined KYC process and get your merchant account approved in minutes.",
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      title: "2. Generate your API key",
      description: "Access the developer portal to create production and sandbox keys for secure authentication.",
      icon: <Key className="h-5 w-5" />,
    },
    {
      title: "3. Start accepting payments via API or Checkout",
      description: "Use our robust API or pre-built Checkout components to start processing Web3 payments.",
      icon: <Rocket className="h-5 w-5" />,
    },
  ]

  const snippets = {
    php: `<?php
$apiKey = 'YOUR_API_KEY';
$url = 'https://api.payerone.com/checkout/v1/orders_v2';

$data = [
    "amount" => 105.50,
    "currency_code" => "USD",
    "description" => "Order #123",
    "ipn_url" => "https://your-api.com/webhook",
    "success_url" => "https://your-site.com/success"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$result = json_decode($response, true);
header('Location: ' . $result['data']['order_url']);
?>`,
    node: `const axios = require('axios');

async function createOrder() {
  const url = 'https://api.payerone.com/checkout/v1/orders_v2';
  const apiKey = 'YOUR_API_KEY';

  const payload = {
    amount: 105.50,
    currency_code: "USD",
    description: "Order #123",
    ipn_url: "https://your-api.com/webhook",
    success_url: "https://your-site.com/success"
  };

  const response = await axios.post(url, payload, {
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
      'Content-Type': 'application/json'
    }
  });

  console.log('Checkout URL:', response.data.data.order_url);
}

createOrder();`,
    curl: `curl -X POST "https://api.payerone.com/checkout/v1/orders_v2" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 105.50,
    "currency_code": "USD",
    "description": "Order #123",
    "ipn_url": "https://your-api.com/webhook",
    "success_url": "https://your-site.com/success"
  }'`
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    toast.success("Code copied to clipboard")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center lg:justify-start mb-6">
          <span className="px-4 py-1.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary/30" />
            06 Developer
            <span className="w-4 h-[1px] bg-primary/30" />
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Developer First <br /> Architecture
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg">
              Integrate PayerOne in minutes with our powerful SDK and clear documentation.
            </p>
            <div className="space-y-10 mb-12 text-left">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full group">
              <Link href="/developers">
                Explore API Docs
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="rounded-2xl border-2 border-zinc-800 bg-zinc-950 p-2 shadow-2xl overflow-hidden backdrop-blur-sm dark">
              <Tabs defaultValue="php" className="w-full">
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>

                  <TabsList className="bg-zinc-800/50 border-zinc-700 h-8 p-0.5 rounded-lg">
                    <TabsTrigger value="php" className="text-[10px] uppercase tracking-wider font-bold h-7 px-3 data-[state=active]:bg-zinc-700 data-[state=active]:text-white text-zinc-400">PHP</TabsTrigger>
                    <TabsTrigger value="node" className="text-[10px] uppercase tracking-wider font-bold h-7 px-3 data-[state=active]:bg-zinc-700 data-[state=active]:text-white text-zinc-400">Node.js</TabsTrigger>
                    <TabsTrigger value="curl" className="text-[10px] uppercase tracking-wider font-bold h-7 px-3 data-[state=active]:bg-zinc-700 data-[state=active]:text-white text-zinc-400">cURL</TabsTrigger>
                  </TabsList>

                  <div className="w-10" />
                </div>

                {Object.entries(snippets).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang} className="m-0 relative group">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-4 text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleCopy(code)}
                    >
                      {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <div className="p-8 md:p-10 overflow-x-auto bg-[#0a0a0a]">
                      <pre className="text-sm md:text-base font-mono leading-relaxed">
                        <code className="text-zinc-300">
                          {code.split('\n').map((line, i) => (
                            <div key={i} className="flex group/line">
                              <span className="inline-block w-8 text-zinc-700 select-none mr-6 text-right group-hover/line:text-zinc-500 transition-colors">{i + 1}</span>
                              <span className="group-hover/line:text-white transition-colors">
                                {line.includes('//') || line.includes('<?php') || line.includes('curl') ? (
                                  <span className="text-zinc-500 italic">{line}</span>
                                ) : (
                                  <span>{line}</span>
                                )}
                              </span>
                            </div>
                          ))}
                        </code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
