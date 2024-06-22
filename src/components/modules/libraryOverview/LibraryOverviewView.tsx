import { Button, Error, InputField, SelectField } from "common";
import * as React from "react";
import { LibraryResultListView } from "./LibraryResultListView";
import { useGetListLibraries } from "queries/libraries";

export const LibraryOverviewView = () => {
  const [search, setSearch] = React.useState("");
  const [order, setOrder] = React.useState<Order>("asc");
  const refSearchField = React.useRef<HTMLInputElement>(null);

  const queryListLibrary = useGetListLibraries({
    search,
  });

  const onSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(refSearchField.current?.value || "");
  };

  const onChangeOrder = (value: string) => {
    setOrder(value as Order);
  };

  if (queryListLibrary.isError) {
    return (
      <div className="max-w-contained">
        <Error />
      </div>
    );
  }

  const listResults = (queryListLibrary.data || []).sort((a, b) => {
    if (order === "desc") {
      return a.total_downloads - b.total_downloads;
    } else {
      return b.total_downloads - a.total_downloads;
    }
  });
  const optionsOrder: { label: string; value: Order }[] = [
    { label: "Total downloads (high to low)", value: "desc" },
    { label: "Total downloads (low to high)", value: "asc" },
  ];

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        {/* SearchField */}
        <form
          className="flex w-full items-end gap-2 md:gap-4"
          onSubmit={onSubmitSearch}
        >
          <InputField
            label="Search for a package"
            name="package_name"
            placeholder="e.g. Axios"
            ref={refSearchField}
          />
          <Button type="submit">Search</Button>
        </form>
        <SelectField
          name="order"
          label="Sor by"
          options={optionsOrder}
          onChange={onChangeOrder}
        />
      </div>

      <LibraryResultListView
        libraries={listResults}
        isLoading={queryListLibrary.isPending}
      />
    </>
  );
};

type Order = "asc" | "desc";
