import { Link, useParams } from "react-router-dom";
import { LibraryDetailView } from "modules/libraryDetail";

export const DetailPage = () => {
  const { libraryId } = useParams<Params>();

  return (
    <div className="max-w-contained flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full justify-start">
        <Link to="/libraries" className="text-blue-500 underline">
          Back
        </Link>
      </div>
      <LibraryDetailView libraryId={libraryId!} />
    </div>
  );
};

type Params = {
  libraryId: string;
};
