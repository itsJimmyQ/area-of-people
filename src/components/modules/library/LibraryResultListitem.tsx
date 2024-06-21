import { Link } from "react-router-dom";
import { LibraryDto } from "src/api/types";

export const LibraryResultListItem = ({
  library,
}: LibraryResultListItemProps) => {
  return (
    <Link
      to={`/libraries/${library.id}`}
      className="w-full rounded-lg border border-gray-300 px-6 py-4"
    >
      <div className="flex w-full flex-col gap-2">
        <h3>{library.name}</h3>
      </div>
    </Link>
  );
};

type LibraryResultListItemProps = {
  library: LibraryDto;
};
