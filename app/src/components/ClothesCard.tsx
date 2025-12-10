interface Props {
  id: number;
  name: string;
  image: string;
  isSelected: boolean;
  isFavorite: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
  onTryOn: () => void;
  onDelete: () => void;
}

export default function ClothesCard({
  name,
  image,
  isSelected,
  isFavorite,
  onSelect,
  onToggleFavorite,
  onTryOn,
  onDelete,
}: Props) {
  return (
    <div
      onClick={onSelect}
      className={`relative flex flex-col items-center p-3 rounded-xl shadow-md cursor-pointer transition-all
        ${isSelected ? "ring-2 ring-blue-500 scale-105" : "bg-white hover:shadow-lg"}
      `}
    >
      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute top-1 left-1 text-sm bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-600"
      >
        ✕
      </button>

      {/* Favorite Heart */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className="absolute top-1 right-1 text-lg"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <img src={image} alt={name} className="h-24 object-contain mb-2" />
      <p className="text-sm font-medium text-gray-800">{name}</p>

      {/* Try-On Button (only when selected) */}
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onTryOn();
          }}
          className="mt-1 text-xs bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
        >
          Try On
        </button>
      )}
    </div>
  );
}
