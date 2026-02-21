"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { getToken, isLocalhost } from "@/lib/auth"

export async function createBlogPost(data: { title: string; content: string; status: string; image?: string; created_at?: string }) {
  const token = await getToken();
  const isLocal = await isLocalhost();

  if (!token && !isLocal) throw new Error("Unauthorized");

  const res = await fetch("https://api.payerone.com/client/v1/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Failed to create blog post" }));
    throw new Error(error.message || "Failed to create blog post");
  }

  const result = await res.json();
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "layout");
  if (result.data?.slug) {
    revalidatePath(`/blog/${result.data.slug}`);
    revalidateTag(`blog-post-${result.data.slug}`, "default");
  }
  revalidateTag("blog-posts", "default");
  return result;
}

export async function updateBlogPost(id: number, data: { title: string; content: string; status: string; image?: string; created_at?: string }) {
  const token = await getToken();
  const isLocal = await isLocalhost();

  if (!token && !isLocal) throw new Error("Unauthorized");

  const res = await fetch("https://api.payerone.com/client/v1/blog", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id, ...data }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Failed to update blog post" }));
    throw new Error(error.message || "Failed to update blog post");
  }

  const result = await res.json();
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "layout");
  if (result.data?.slug) {
    revalidatePath(`/blog/${result.data.slug}`);
    revalidateTag(`blog-post-${result.data.slug}`, "default");
  }
  revalidateTag("blog-posts", "default");
  return result;
}

export async function deleteBlogPost(slug: string) {
  const token = await getToken();
  const isLocal = await isLocalhost();

  if (!token && !isLocal) throw new Error("Unauthorized");

  const res = await fetch("https://api.payerone.com/client/v1/blog", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ slug }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Failed to delete blog post" }));
    throw new Error(error.message || "Failed to delete blog post");
  }

  const result = await res.json();
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "layout");
  revalidateTag("blog-posts", "default");
  return result;
}
