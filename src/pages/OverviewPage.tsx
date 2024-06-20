import * as React from "react";
import { Button, Error } from "common";

import { LibraryResultListView } from "modules/library";
import { useGetListLibraries } from "queries/libraries";
import { InputField } from "common/InputField";

export const OverviewPage = ({}: OverviewPageProps) => {
  const [search, setSearch] = React.useState<string>("");

  const refSearchField = React.useRef<HTMLInputElement>(null);
  const queryListLibrary = useGetListLibraries({
    search,
  });

  if (queryListLibrary.isError) {
    return (
      <div className="max-w-contained">
        <Error />
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
        <form
          className="flex w-full items-end gap-2 md:gap-4"
          onSubmit={onSubmitSearch}
        >
          <InputField
            name="package_name"
            id="package_name"
            placeholder="e.g. Axios"
            ref={refSearchField}
          />
          <Button type="submit">Search</Button>
        </form>
      </div>

      <LibraryResultListView
        libraries={queryListLibrary?.data || []}
        isLoading={queryListLibrary.isPending}
      />
    </div>
  );
};

type OverviewPageProps = {};
