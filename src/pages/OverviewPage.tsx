import * as React from "react";
import { Button } from "common";

import { LibraryResultListView } from "modules/library";
import { useGetListLibraries } from "queries/libraries";

export const OverviewPage = ({}: OverviewPageProps) => {
  const [search, setSearch] = React.useState<string>("");

  const refSearchField = React.useRef<HTMLInputElement>(null);
  const queryListLibrary = useGetListLibraries({
    search,
  });

  if (queryListLibrary.isPending) {
    return <div className="max-w-contained">Loading...</div>;
  }

  if (queryListLibrary.isError) {
    return (
      <div className="max-w-contained">
        Error: {queryListLibrary.error.message}
      </div>
    );
  }

  const onSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(refSearchField.current?.value || "");
  };

  return (
    <div className="max-w-contained flex flex-col gap-10">
      {/* Filter */}
      <div className="flex w-full flex-col gap-4">
        {/* SearchField */}
        <form className="flex w-full items-end gap-4" onSubmit={onSubmitSearch}>
          {/* InputField */}
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="package_name">Search by name</label>
            <input
              ref={refSearchField}
              name="package_name"
              id="package_name"
              placeholder="e.g. Axios"
              className="h-12 w-full rounded-lg border border-gray-300 bg-gray-100 px-3 focus:border-gray-400 md:h-16 md:px-4"
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </div>

      <LibraryResultListView libraries={queryListLibrary.data} />
    </div>
  );
};

type OverviewPageProps = {};
