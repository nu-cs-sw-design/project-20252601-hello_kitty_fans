interface Props {
  name: string;
  image: string;
}

export default function ClothesCard({ name, image }: Props) {
  return (
    <div className="flex flex-col items-center p-2 bg-white rounded shadow">
      <img src={image} alt={name} className="h-20 object-contain mb-2" />
      <p className="text-sm">{name}</p>
    </div>
  );
}
