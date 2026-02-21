"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Loader2, Trash2, Edit } from "lucide-react"
import Link from "next/link"
import { deleteBlogPost } from "@/app/blog/actions"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface BlogAdminActionsProps {
  slug: string
  title: string
  variant?: "inline" | "full"
}

export function BlogAdminActions({ slug, title, variant = "full" }: BlogAdminActionsProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteBlogPost(slug)
      toast.success("Blog post deleted successfully")
      setIsOpen(false)
      router.push("/blog")
      router.refresh()
    } catch (error: unknown) {
      console.error("Delete Error:", error)
      toast.error(error instanceof Error ? error.message : "Failed to delete blog post")
    } finally {
      setIsDeleting(false)
    }
  }

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="icon" className="h-8 w-8 rounded-full border-muted-foreground/20">
          <Link href={`/blog/edit/${slug}`}>
            <Edit className="h-3.5 w-3.5" />
          </Link>
        </Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full text-destructive hover:text-destructive border-muted-foreground/20">
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Delete Blog Post</DialogTitle>
              <DialogDescription className="text-base pt-2">
                Are you sure you want to delete <span className="font-bold text-foreground">&quot;{title}&quot;</span>? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="pt-6 gap-2 sm:gap-0">
              <Button variant="ghost" onClick={() => setIsOpen(false)} disabled={isDeleting} className="rounded-xl">
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete} disabled={isDeleting} className="rounded-xl font-bold">
                {isDeleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
                Delete Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-4 py-8 border-t border-muted mt-12">
      <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mr-auto">Admin Actions</div>
      <Button asChild variant="outline" className="rounded-xl font-bold border-2">
        <Link href={`/blog/edit/${slug}`}>
          <Edit className="mr-2 h-4 w-4" />
          Edit Post
        </Link>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive" className="rounded-xl font-bold shadow-lg shadow-destructive/20">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Post
          </Button>
        </DialogTrigger>
        <DialogContent className="rounded-3xl p-8 max-w-md">
          <DialogHeader className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mb-2 mx-auto sm:mx-0">
              <Trash2 className="h-8 w-8" />
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight">Delete Post?</DialogTitle>
            <DialogDescription className="text-lg leading-relaxed">
              Are you sure you want to delete <span className="font-bold text-foreground">&quot;{title}&quot;</span>? This will permanently remove the post from the blog.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="pt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="ghost" onClick={() => setIsOpen(false)} disabled={isDeleting} className="h-12 rounded-xl flex-1 font-bold">
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={isDeleting} className="h-12 rounded-xl flex-1 font-bold shadow-lg shadow-destructive/20">
              {isDeleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Yes, Delete Post"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
