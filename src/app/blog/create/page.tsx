import { checkIsAdmin } from "@/lib/auth"
import { redirect } from "next/navigation"
import { BlogForm } from "@/components/blog-form"

export default async function CreateBlogPage() {
  const isAdmin = await checkIsAdmin()
  
  if (!isAdmin) {
    redirect("/blog")
  }

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        <BlogForm />
      </div>
    </div>
  )
}
