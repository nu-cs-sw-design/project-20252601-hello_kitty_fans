interface Props {
  image: string;
}

export default function PoseViewer({ image }: Props) {
  return (
    <div className="bg-gray-200 w-64 h-64 rounded flex items-center justify-center">
      <img src={image} alt="pose" className="h-full object-contain" />
    </div>
  );
}
