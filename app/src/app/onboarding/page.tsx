import Link from 'next/link'

export default function OnboardingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Onboarding Survey</h2>
      <p className="mb-4">Tell us about your style preferences (mockup)</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mb-2">Next</button>
      <Link href="/main" className="text-blue-500 mt-4">Skip to Main</Link>
    </div>
  )
}
