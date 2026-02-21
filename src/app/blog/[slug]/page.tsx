import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/cta"
import { notFound } from "next/navigation"
import { checkIsAdmin } from "@/lib/auth"
import { BlogAdminActions } from "@/components/blog-admin-actions"

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
  data: BlogPost
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`https://api.payerone.com/client/v1/blog?slug=${slug}`, {
      next: { revalidate: 3600, tags: ["blog-posts", `blog-post-${slug}`] }
    })

    if (!res.ok) {
      throw new Error("Failed to fetch blog post")
    }

    const json: ApiResponse = await res.json()
    return json.data || null
  } catch (error) {
    console.error("Blog Fetch Error:", error)
    return null
  }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = await getBlogPost(params.slug)
  if (!post) return { title: "Post Not Found | PayerOne" }

  return {
    title: `${post.title} | PayerOne Blog`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getBlogPost(params.slug)
  const isAdmin = await checkIsAdmin()

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.created_at.replace(' ', 'T')).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <article className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[5%] left-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-3xl opacity-50" />
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" className="mb-12 -ml-4 group text-muted-foreground hover:text-primary transition-colors">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </Button>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {formattedDate}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  {new Date(post.created_at.replace(' ', 'T')).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                {post.title}
              </h1>

              {post.image && (
                <div className="my-12 rounded-3xl overflow-hidden border shadow-2xl shadow-primary/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto object-cover max-h-[500px]" 
                  />
                </div>
              )}

              <div className="flex items-center justify-between pt-8 border-t border-muted">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">PayerOne Team</div>
                    <div className="text-sm text-muted-foreground">Engineering & Product</div>
                  </div>
                </div>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div 
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {isAdmin && (
              <BlogAdminActions slug={post.slug} title={post.title} />
            )}
          </div>
        </div>
      </article>
      <CTA />
    </div>
  )
}
