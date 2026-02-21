import { cookies, headers } from "next/headers";

export async function getToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (token) return token;

  // Also check for chunked tokens
  const chunkCountStr = cookieStore.get("accessToken_chunks")?.value;
  if (chunkCountStr) {
    const chunkCount = parseInt(chunkCountStr, 10);
    let fullToken = "";
    for (let i = 0; i < chunkCount; i++) {
      const chunk = cookieStore.get(`accessToken_${i}`)?.value;
      if (chunk) {
        fullToken += chunk;
      }
    }
    return fullToken;
  }
  return null;
}

export async function isAuthenticated() {
  const token = await getToken();
  return !!token;
}

export async function getAuthProfile() {
  const token = await getToken();
  if (!token) return null;

  try {
    const res = await fetch("https://api.payerone.com/client/v1/init", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json.data?.user || null;
  } catch (error) {
    return null;
  }
}

export async function isLocalhost() {
  try {
    const headersList = await headers();
    const host = headersList.get("host") || "";
    return host.includes("localhost") || host.includes("127.0.0.1");
  } catch (error) {
    return false;
  }
}

export async function checkIsAdmin() {
  if (await isLocalhost()) return true;
  const profile = await getAuthProfile();
  return profile?.email === "admin@dhrusoft.com";
}
