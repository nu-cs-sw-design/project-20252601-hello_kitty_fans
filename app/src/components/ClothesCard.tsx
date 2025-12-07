interface Props {
  name: string;
  image: string;
}

export default function ClothesCard({ name, image }: Props) {
  return (
    <div className="flex flex-col items-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={image}
        alt={name}
        className="h-24 object-contain mb-3 rounded-md"
      />
      <p className="text-sm font-medium text-gray-800">{name}</p>
    </div>
  );
}
