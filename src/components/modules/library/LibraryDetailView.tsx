import { Error, Loading } from "common";
import { useGetLibraryDetail } from "queries/libraries";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import dayjs from "dayjs";

import { LibraryAttributeCard } from "./LibraryAttributeCard";

export const LibraryDetailView = ({ libraryId }: LibraryDetailViewProps) => {
  const queryLibraryDetail = useGetLibraryDetail({
    libraryId: parseInt(libraryId),
  });

  const formatAmount = (value: number) => {
    let formattedValue = value.toString();

    if (value >= 1000000) {
      formattedValue = (value / 1000000).toFixed(2).replace(/\.0$/, "") + "M";
    } else if (value >= 1000) {
      formattedValue = (value / 1000).toFixed(2).replace(/\.0$/, "") + "K";
    }

    return formattedValue;
  };

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

  const formattedTotalDownloads = `
    ${formatAmount(queryLibraryDetail.data.total_downloads)}
  `;
  const formattedUnpackedSize = `
    ${(queryLibraryDetail.data.install_size / 1024 / 1024).toFixed(2).toString()}MB
  `;
  const formattedData = queryLibraryDetail.data.downloads_last_seven_days.map(
    (item, index) => {
      const currDate = dayjs().subtract(7 - index, "day");

      return {
        labelX: currDate.format("MM-DD"),
        valueY: item,
      };
    },
  );

  return (
    <div className="flex h-full flex-col gap-6 md:gap-16">
      {/* Header */}
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
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
      <div className="flex flex-1 flex-col gap-4">
        <p className="text-lg">Downloads of last 7 days</p>
        <div className="flex w-full flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={730} height={250} data={formattedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="labelX" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="valueY" fill="black" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

type LibraryDetailViewProps = {
  libraryId: string;
};
