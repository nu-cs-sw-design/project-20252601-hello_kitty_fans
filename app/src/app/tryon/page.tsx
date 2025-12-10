"use client";

import { useState } from "react";

import ClothesCard from "@/components/ClothesCard";
import PoseViewer from "@/components/PoseViewer";
import RecommendationCard from "@/components/RecommendationCard";

import { mockClothes } from "@/lib/mock/clothes";
import { mockPoses } from "@/lib/mock/poses";
import { mockRecommendations } from "@/lib/mock/recommendations";

export default function TryOnPage() {
  const [isLookSaved, setIsLookSaved] = useState(false);
  const [selectedClothingId, setSelectedClothingId] = useState<number | null>(null);
  const [activeTryOnClothing, setActiveTryOnClothing] = useState<any>(null);
  const [favoriteClothes, setFavoriteClothes] = useState<number[]>([]);
  const [isPoseModalOpen, setIsPoseModalOpen] = useState(false);
  const [activePose, setActivePose] = useState(mockPoses[0]);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);
  const [clothes, setClothes] = useState(mockClothes);


  return (
  <div className="flex h-screen p-6 gap-6">
    {/* Clothes list */}
    <div className="w-1/4 bg-white rounded-xl p-4 shadow-md overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Your Closet</h2>
      <div className="grid grid-cols-2 gap-4">
        {clothes.map((c) => (
          <ClothesCard
            id={c.id}
            name={c.name}
            image={c.image}
            isSelected={selectedClothingId === c.id}
            onSelect={() =>
              setSelectedClothingId((prev) => (prev === c.id ? null : c.id))
            }
            isFavorite={favoriteClothes.includes(c.id)}
            onToggleFavorite={() =>
              setFavoriteClothes((prev) =>
                prev.includes(c.id)
                  ? prev.filter((id) => id !== c.id)
                  : [...prev, c.id]
              )
            }
            onTryOn={() => setActiveTryOnClothing(c)}
            onDelete={() => setDeleteTargetId(c.id)}
          />
        ))}
      </div>
    </div>

    {/* Main try-on area */}
    <div className="relative flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 self-start">Try-On</h2>

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="relative w-full max-w-lg h-[550px] bg-gray-200 rounded-xl p-4 shadow-md flex items-center justify-center overflow-hidden">
          {activeTryOnClothing && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow text-sm font-semibold text-gray-900 z-10">
              Trying on: {activeTryOnClothing.name}
            </div>
          )}
          
          <PoseViewer image={activePose.image} />
        </div>

        {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
          Change Pose
        </button> */}
        <button
          onClick={() => setIsPoseModalOpen(true)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Change Pose
        </button>
      </div>

      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsLookSaved(!isLookSaved)}
          title="Save Look"
          className="text-2xl transition"
        >
          {isLookSaved ? "❤️" : "🤍"}
        </button>
      </div>
    </div>

    {/* Recommendations */}
    <div className="w-1/4 bg-white rounded-xl p-4 shadow-md overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Recommended</h2>
      <div className="grid grid-cols-2 gap-4">
        {mockRecommendations.map((r) => (
          <ClothesCard id={r.id} name={r.name} image={r.image} />
        ))}
      </div>
    </div>

    {/* Pose Selection Modal */}
    {isPoseModalOpen && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-[90%] max-w-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Choose a Pose
          </h2>

          {/* Pose Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {mockPoses.map((pose) => (
              <img
                key={pose.id}
                src={pose.image}
                alt={pose.name}
                onClick={() => {
                  setActivePose(pose);
                  setIsPoseModalOpen(false);
                }}
                className={`h-28 object-contain rounded-lg cursor-pointer border-2 transition
                  ${
                    activePose.id === pose.id
                      ? "border-blue-500"
                      : "border-transparent hover:border-gray-300"
                  }
                `}
              />
            ))}
          </div>

          {/* Cancel Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsPoseModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Delete Confirmation Modal */}
    {deleteTargetId !== null && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Delete this item?
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            This action cannot be undone.
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setDeleteTargetId(null)}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                setClothes((prev) =>
                  prev.filter((item) => item.id !== deleteTargetId)
                );
                setDeleteTargetId(null);
              }}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )}


  </div>
);

}

