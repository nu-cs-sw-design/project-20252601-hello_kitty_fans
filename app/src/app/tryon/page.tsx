// export default function TryOnPage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Virtual Try-On</h2>

//       <div className="flex gap-4 flex-1">
//         {/* Clothes Panel */}
//         <div className="w-1/4 bg-white p-4 rounded shadow">
//           <h3 className="font-semibold mb-2">Clothes</h3>
//           <div className="grid gap-2">
//             <div className="bg-gray-200 h-20 rounded"></div>
//             <div className="bg-gray-200 h-20 rounded"></div>
//             <div className="bg-gray-200 h-20 rounded"></div>
//           </div>
//         </div>

//         {/* User Pose */}
//         <div className="flex-1 bg-gray-100 p-4 rounded shadow flex items-center justify-center">
//           <div className="bg-gray-300 w-64 h-64 rounded">User Pose</div>
//         </div>

//         {/* Recommendations */}
//         <div className="w-1/4 bg-white p-4 rounded shadow">
//           <h3 className="font-semibold mb-2">Recommendations</h3>
//           <div className="grid gap-2">
//             <div className="bg-gray-200 h-20 rounded"></div>
//             <div className="bg-gray-200 h-20 rounded"></div>
//             <div className="bg-gray-200 h-20 rounded"></div>
//           </div>
//         </div>
//       </div>

//       <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-40">
//         Change Pose
//       </button>
//     </div>
//   )
// }

import ClothesCard from "@/components/ClothesCard";
import PoseViewer from "@/components/PoseViewer";
import RecommendationCard from "@/components/RecommendationCard";

import { mockClothes } from "@/lib/mock/clothes";
import { mockPoses } from "@/lib/mock/poses";
import { mockRecommendations } from "@/lib/mock/recommendations";

export default function TryOnPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Virtual Try-On</h2>

      <div className="flex gap-4 flex-1">
        
        {/* Left: Clothes */}
        <div className="w-1/4 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Clothes</h3>
          <div className="grid gap-2">
            {mockClothes.map((c) => (
              <ClothesCard key={c.id} name={c.name} image={c.image} />
            ))}
          </div>
        </div>

        {/* Middle: Pose */}
        <div className="flex-1 bg-gray-100 p-4 rounded shadow flex items-center justify-center">
          <PoseViewer image={mockPoses[0].image} />
        </div>

        {/* Right: Recommendations */}
        <div className="w-1/4 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Recommendations</h3>
          <div className="grid gap-2">
            {mockRecommendations.map((r) => (
              <RecommendationCard key={r.id} name={r.name} image={r.image} />
            ))}
          </div>
        </div>

      </div>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-40 mx-auto">
        Change Pose
      </button>
    </div>
  );
}

