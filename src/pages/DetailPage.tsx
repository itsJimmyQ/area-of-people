import { useParams } from "react-router-dom";
import { LibraryDetailView } from "modules/library";

export const DetailPage = () => {
  const { libraryId } = useParams<Params>();

  return (
    <div className="max-w-contained flex h-full w-full flex-col">
      <LibraryDetailView libraryId={libraryId!} />
    </div>
  );
};

type Params = {
  libraryId: string;
};
