import { useParams } from "react-router-dom";
import { LibraryDetailView } from "modules/libraryDetail";

export const DetailPage = () => {
  const { libraryId } = useParams<Params>();

  return (
    <div className="max-w-contained flex h-full w-full flex-col items-center justify-center">
      <LibraryDetailView libraryId={libraryId!} />
    </div>
  );
};

type Params = {
  libraryId: string;
};
