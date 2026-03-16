// import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'
import Link from 'next/link'
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function Page() {
  // const cookieStore = await cookies()
  // const supabase = createClient(cookieStore)
  const session = await auth.api.getSession({ headers: await headers() })
  const userData = session?.user
  // const { data: todos } = await supabase.from('todos').select()

  return (
    <div>
      <h1>Welcome!</h1>
      {userData ? <Link href="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</Link> : <Link href="/login" className="text-blue-500 hover:underline">Login</Link>}
      {/* <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul> */}
    </div>
  )
}
