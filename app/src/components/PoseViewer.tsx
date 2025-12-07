interface Props {
  image: string;
}

export default function PoseViewer({ image }: Props) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={image}
        alt="Pose"
        className="max-h-full max-w-full object-contain rounded-lg"
      />
    </div>
  );
}
