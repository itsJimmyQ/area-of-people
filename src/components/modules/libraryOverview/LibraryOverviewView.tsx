import { Button, Error, InputField } from "common";
import * as React from "react";
import { LibraryResultListView } from "./LibraryResultListView";
import { useGetListLibraries } from "queries/libraries";

export const LibraryOverviewView = () => {
  const [search, setSearch] = React.useState<string>("");
  const refSearchField = React.useRef<HTMLInputElement>(null);

  const queryListLibrary = useGetListLibraries({
    search,
  });

  const onSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(refSearchField.current?.value || "");
  };

  if (queryListLibrary.isError) {
    return (
      <div className="max-w-contained">
        <Error />
      </div>
    );
  }

  return (
    <>
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
    </>
  );
};
