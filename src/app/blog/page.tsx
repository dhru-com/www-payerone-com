import { Metadata } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/cta"
import { checkIsAdmin } from "@/lib/auth"
import { Plus } from "lucide-react"
import { BlogAdminActions } from "@/components/blog-admin-actions"

export const metadata: Metadata = {
  title: "Blog | PayerOne",
  description: "Stay up to date with the latest news, features, and insights from PayerOne.",
}

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

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch("https://api.payerone.com/client/v1/blog", {
      next: { revalidate: 3600, tags: ["blog-posts"] } // Cache for 1 hour
    })

    if (!res.ok) {
      throw new Error("Failed to fetch blog posts")
    }

    const json: ApiResponse = await res.json()
    return json.data || []
  } catch (error) {
    console.error("Blog Fetch Error:", error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const isAdmin = await checkIsAdmin()

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl opacity-50" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                <BookOpen className="h-3 w-3" />
                Resources & News
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Insights from the <span className="text-primary">PayerOne</span> Team
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the latest in Web3 payments, crypto engineering, and the future of decentralized commerce.
              </p>
            </div>
            {isAdmin && (
              <Button asChild className="rounded-full font-bold shadow-lg shadow-primary/20">
                <Link href="/blog/create">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Post
                </Link>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post) => {
                const isNew = new Date(post.created_at.replace(' ', 'T')) >= new Date(Date.now() - 24 * 60 * 60 * 1000)

                return (
                  <Card key={post.id} className="h-full flex flex-col rounded-3xl border bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group overflow-hidden">
                    {post.image ? (
                      <CardHeader className="p-0">
                        <div className="h-48 w-full bg-muted relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                          {isNew && (
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-background/80 backdrop-blur-md font-bold uppercase tracking-widest text-[10px]">
                                New
                              </Badge>
                            </div>
                          )}
                        </div>
                      </CardHeader>
                    ) : (
                      <div className="pt-8 px-8">
                        {isNew && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold uppercase tracking-widest text-[10px]">
                            New Post
                          </Badge>
                        )}
                      </div>
                    )}
                    <CardContent className={cn("p-8 flex-grow", !post.image && isNew && "pt-4", !post.image && !isNew && "pt-8")}>
                      <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.created_at.replace(' ', 'T')).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3" />
                          {new Date(post.created_at.replace(' ', 'T')).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        {isAdmin && (
                          <div className="ml-auto">
                            <BlogAdminActions uuid={post.uuid} slug={post.slug} title={post.title} variant="inline" />
                          </div>
                        )}
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
                )
              })
            ) : (
              <div className="col-span-full py-20 text-center">
                <h3 className="text-xl font-bold text-muted-foreground">No blog posts found.</h3>
                <p className="mt-2 text-muted-foreground">Check back later for more updates.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  )
}
