import { useParams } from "react-router-dom";
import { LibraryDetailView } from "modules/library";

export const DetailPage = () => {
  const { libraryId } = useParams<Params>();

  return <LibraryDetailView libraryId={libraryId!} />;
};

type Params = {
  libraryId: string;
};
