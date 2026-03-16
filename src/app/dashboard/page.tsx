"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { user } from "@/utils/account/useSession";

export default function LoginPage() {
  const router = useRouter();
  const { user: userData, isPending, error } = user();

  useEffect(() => {
    if (!isPending && !userData) {
      router.push("/login");
    }
  }, [userData, isPending, router]);
  return (
    <div>
      <h1>Dashboard</h1>
      {isPending && <p>Loading session…</p>}
      {error && <p>Error: {error.message || String(error)}</p>}
      {userData &&
        <>
          <p>Welcome {userData?.name}!</p>
          <p>Session: {JSON.stringify(userData)}</p>
        </>
      }
    </div>
  );
}
