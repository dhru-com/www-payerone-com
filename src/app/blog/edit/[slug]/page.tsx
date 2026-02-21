import { checkIsAdmin } from "@/lib/auth"
import { redirect, notFound } from "next/navigation"
import { BlogForm } from "@/components/blog-form"

interface BlogPost {
  id: number
  uuid: string
  title: string
  slug: string
  content: string
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
      cache: 'no-store'
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

export default async function EditBlogPage(props: { params: Promise<{ slug: string }> }) {
  const isAdmin = await checkIsAdmin()
  
  if (!isAdmin) {
    redirect("/blog")
  }

  const params = await props.params;
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        <BlogForm post={post} />
      </div>
    </div>
  )
}
