import { cookies } from "next/headers";

export async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (token) return true;

  // Also check for chunked tokens
  const chunkCount = cookieStore.get("accessToken_chunks")?.value;
  if (chunkCount) {
    return true;
  }

  return false;
}
