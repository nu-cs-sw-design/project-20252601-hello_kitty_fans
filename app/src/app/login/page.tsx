import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <input type="email" placeholder="Email" className="border p-2 mb-4 w-64 rounded" />
      <input type="password" placeholder="Password" className="border p-2 mb-4 w-64 rounded" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-64 mb-4">Login</button>
      <Link href="/onboarding" className="text-blue-500">First time? Start Setup</Link>
    </div>
  )
}
