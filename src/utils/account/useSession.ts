import { authClient } from "@/lib/auth-client";

export function session() {
  return authClient.useSession().data?.session;
}

export function user() {
  return {
    user: authClient.useSession().data?.user,
    isPending: authClient.useSession().isPending,
    error: authClient.useSession().error,
  };
}