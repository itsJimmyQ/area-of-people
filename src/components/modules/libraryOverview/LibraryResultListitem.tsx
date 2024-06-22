import { Link } from "react-router-dom";
import { formatNumberToNaturalLanguage } from "service/utils";
import { LibraryDto } from "src/api/types";

export const LibraryResultListItem = ({
  library,
}: LibraryResultListItemProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-gray-300 px-6 py-4">
      <div className="flex w-full flex-col gap-4">
        <h3>{library.name}</h3>
        <p>
          Total downloads:{" "}
          {formatNumberToNaturalLanguage(library.total_downloads)}
        </p>
      </div>
      <Link
        to={`/${library.id}`}
        className="whitespace-nowrap rounded-md border border-blue-300 bg-transparent px-4 py-2 text-sm text-blue-500 transition hover:bg-blue-50"
      >
        See more
      </Link>
    </div>
  );
};

type LibraryResultListItemProps = {
  library: LibraryDto;
};
