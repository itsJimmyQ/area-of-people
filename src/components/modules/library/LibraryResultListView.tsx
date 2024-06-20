import { LibraryDto } from "src/api/types";
import { LibraryResultListItem } from "./LibraryResultListitem";

export const LibraryResultListView = ({
  libraries,
}: LibraryResultListViewProps) => {
  return (
    <div className="w-full">
      <p className="text-medium mb-4 text-lg">{libraries.length} results</p>
      <div className="flex w-full flex-col gap-3">
        {libraries.map((library) => (
          <LibraryResultListItem key={library.id} {...{ library }} />
        ))}
      </div>
    </div>
  );
};

type LibraryResultListViewProps = {
  libraries: LibraryDto[];
};
