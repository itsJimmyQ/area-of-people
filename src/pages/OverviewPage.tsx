import { LibraryOverviewView } from "modules/libraryOverview";

export const OverviewPage = ({}: OverviewPageProps) => {
  return (
    <div className="max-w-contained flex h-full flex-col gap-10">
      <LibraryOverviewView />
    </div>
  );
};

type OverviewPageProps = {};
