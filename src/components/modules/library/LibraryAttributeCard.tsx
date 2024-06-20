export const LibraryAttributeCard = ({
  label,
  value,
}: LibraryAttributeCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-1 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 md:px-5 md:py-4">
      <p className="whitespace-nowrap text-sm text-gray-500">{label}</p>
      <h2>{value}</h2>
    </div>
  );
};

type LibraryAttributeCardProps = {
  label: string;
  value: string;
};
