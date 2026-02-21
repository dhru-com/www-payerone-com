"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Loader2, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { createBlogPost, updateBlogPost } from "@/app/blog/actions"

interface BlogFormProps {
  post?: {
    id: number
    uuid: string
    title: string
    slug: string
    content: string
    image?: string
    status: string
    created_at: string
  }
}

export function BlogForm({ post }: BlogFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    title: post?.title || "",
    content: post?.content || "",
    image: post?.image || "",
    status: post?.status || "Active",
    created_at: post?.created_at || "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.content) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    const payload = {
      ...formData,
      image: formData.image || undefined,
      created_at: formData.created_at || undefined,
    }

    try {
      if (post) {
        await updateBlogPost(post.id, payload)
        toast.success("Blog post updated successfully")
      } else {
        await createBlogPost(payload)
        toast.success("Blog post created successfully")
      }
      router.push("/blog")
      router.refresh()
    } catch (error: any) {
      console.error("Blog Save Error:", error)
      toast.error(error.message || "An error occurred while saving the post")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Button asChild variant="ghost" className="-ml-4 group text-muted-foreground hover:text-primary">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">
          {post ? "Edit Blog Post" : "Create New Post"}
        </h1>
      </div>

      <div className="space-y-6 bg-card p-8 rounded-3xl border shadow-xl shadow-primary/5">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Title</Label>
          <Input
            id="title"
            placeholder="Enter blog post title"
            className="h-12 text-lg font-medium rounded-xl"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Status</Label>
          <select
            id="status"
            className="w-full h-12 rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="image" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Featured Image URL (Optional)</Label>
          <Input
            id="image"
            placeholder="https://example.com/image.jpg"
            className="h-12 rounded-xl"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="created_at" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Publication Date (Optional)</Label>
          <Input
            id="created_at"
            placeholder="YYYY-MM-DD HH:MM:SS (e.g., 2026-02-21 09:15:00)"
            className="h-12 rounded-xl"
            value={formData.created_at}
            onChange={(e) => setFormData({ ...formData, created_at: e.target.value })}
          />
          <p className="text-[10px] text-muted-foreground">Leave empty to use current time. Format: YYYY-MM-DD HH:MM:SS</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="content" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Content (HTML allowed)</Label>
          <Textarea
            id="content"
            placeholder="Write your blog post content here... You can use HTML tags like <h1>, <p>, <img>, etc."
            className="min-h-[400px] text-lg leading-relaxed rounded-xl font-mono"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            required
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full h-14 rounded-2xl font-bold text-lg shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-5 w-5" />
                {post ? "Update Post" : "Publish Post"}
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
