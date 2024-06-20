import { Error, Loading } from "common";
import { useGetLibraryDetail } from "queries/libraries";
import { LibraryAttributeCard } from "./LibraryAttributeCard";

export const LibraryDetailView = ({ libraryId }: LibraryDetailViewProps) => {
  const queryLibraryDetail = useGetLibraryDetail({
    libraryId,
  });

  if (queryLibraryDetail.isPending) {
    return (
      <div className="max-w-contained">
        <Loading />
      </div>
    );
  }

  if (queryLibraryDetail.isError) {
    return (
      <div className="max-w-contained">
        <Error />
      </div>
    );
  }

  // Format number
  const formattedTotalDownloads = `
    ${queryLibraryDetail.data.total_downloads.toString()}
  `;
  const formattedUnpackedSize = `
    ${(queryLibraryDetail.data.install_size / 1024 / 1024).toString()} MB
  `;

  return (
    <div className="max-w-contained flex flex-col gap-6 md:gap-16">
      {/* Header */}
      <div className="flex flex-col items-end gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-1">
          <h1>{queryLibraryDetail.data.name}</h1>
          <p>{queryLibraryDetail.data.description}</p>
        </div>

        <div className="flex w-full gap-2 overflow-auto md:w-fit md:overflow-hidden">
          <LibraryAttributeCard
            label="Latest version"
            value={queryLibraryDetail.data.latest_version}
          />
          <LibraryAttributeCard
            label="Total downloads"
            value={formattedTotalDownloads}
          />
          <LibraryAttributeCard
            label="Unpacked size"
            value={formattedUnpackedSize}
          />
        </div>
      </div>

      {/* GRAPH */}
      <div className="flex flex-col gap-4">
        <p className="text-lg">Downloads of last 7 days</p>
        <div className="flex h-[640px] w-full bg-blue-300" />
      </div>
    </div>
  );
};

type LibraryDetailViewProps = {
  libraryId: number;
};
