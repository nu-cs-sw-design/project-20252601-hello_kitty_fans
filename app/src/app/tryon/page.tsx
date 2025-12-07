import ClothesCard from "@/components/ClothesCard";
import PoseViewer from "@/components/PoseViewer";
import RecommendationCard from "@/components/RecommendationCard";

import { mockClothes } from "@/lib/mock/clothes";
import { mockPoses } from "@/lib/mock/poses";
import { mockRecommendations } from "@/lib/mock/recommendations";

export default function TryOnPage() {
  return (
  <div className="flex h-screen p-6 gap-6">
    {/* Clothes list */}
    <div className="w-1/4 bg-white rounded-xl p-4 shadow-md overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Your Closet</h2>
      <div className="grid grid-cols-2 gap-4">
        {mockClothes.map((c) => (
          <ClothesCard key={c.id} name={c.name} image={c.image} />
        ))}
      </div>
    </div>

    {/* Main try-on area */}
    <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 self-start">Try-On</h2>

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="w-full max-w-lg h-[550px] bg-gray-200 rounded-xl p-4 shadow-md flex items-center justify-center overflow-hidden">
          <PoseViewer image={mockPoses[0].image} />
        </div>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
          Change Pose
        </button>
      </div>
    </div>

    {/* Recommendations */}
    <div className="w-1/4 bg-white rounded-xl p-4 shadow-md overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Recommended</h2>
      <div className="grid grid-cols-2 gap-4">
        {mockRecommendations.map((r) => (
          <ClothesCard key={r.id} name={r.name} image={r.image} />
        ))}
      </div>
    </div>
  </div>
);

}

