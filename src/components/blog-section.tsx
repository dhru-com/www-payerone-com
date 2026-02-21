"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User, Clock, BookOpen } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  uuid: string
  title: string
  slug: string
  content: string
  image?: string
  author_id: number
  status: string
  created_at: string
  updated_at: string
}

interface ApiResponse {
  status: string
  message: string
  code: number
  data: BlogPost[]
}

export function BlogSection() {
  const [posts, setPosts] = React.useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://api.payerone.com/client/v1/blog")
        const json: ApiResponse = await res.json()

        if (json.status === "success" && Array.isArray(json.data)) {
          const now = new Date()
          const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

          const recentPosts = json.data.filter(post => {
            const createdAt = new Date(post.created_at.replace(' ', 'T')) // Handle space in format
            return createdAt >= twentyFourHoursAgo
          })

          setPosts(recentPosts)
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return (
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="h-8 w-48 bg-muted animate-pulse rounded-md mb-4" />
            <div className="h-4 w-64 bg-muted animate-pulse rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[400px] rounded-3xl bg-muted animate-pulse border" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return null // Hide the block if no recent posts
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl opacity-50" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <BookOpen className="h-3 w-3" />
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Fresh from the <span className="text-primary">Blog</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay up to date with the latest news, features, and insights from PayerOne.
            </p>
          </div>
          <Button asChild variant="ghost" className="group text-primary font-bold">
            <Link href="/blog">
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col rounded-3xl border bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group overflow-hidden">
                {post.image ? (
                  <CardHeader className="p-0">
                    <div className="h-48 w-full bg-muted relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-md font-bold uppercase tracking-widest text-[10px]">
                          New
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                ) : (
                  <div className="pt-8 px-8">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold uppercase tracking-widest text-[10px]">
                      New Post
                    </Badge>
                  </div>
                )}
                <CardContent className={cn("p-8 flex-grow", !post.image && "pt-4")}>
                  <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.created_at.replace(' ', 'T')).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {new Date(post.created_at.replace(' ', 'T')).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                    {post.content.replace(/<[^>]*>/g, '')}
                  </p>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-0 mt-auto">
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-bold group/btn">
                    <Link href={`/blog/${post.slug}`} className="flex items-center">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
