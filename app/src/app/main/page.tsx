import Link from 'next/link'

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-4">My Virtual Closet</h2>

      <div className="flex gap-4">
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Closet Preview</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-200 h-24 rounded"></div>
            <div className="bg-gray-200 h-24 rounded"></div>
            <div className="bg-gray-200 h-24 rounded"></div>
          </div>
        </div>

        <div className="flex-1 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Try-On Preview</h3>
          <div className="bg-gray-200 h-48 rounded"></div>
          <Link href="/tryon" className="mt-2 inline-block text-blue-500">Go to Try-On</Link>
        </div>
      </div>
    </div>
  )
}
