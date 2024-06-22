import { LibraryOverviewView } from "modules/libraryOverview";

export const OverviewPage = ({}: OverviewPageProps) => {
  return (
    <div className="max-w-contained flex min-h-full flex-col gap-10 pb-10">
      <LibraryOverviewView />
    </div>
  );
};

type OverviewPageProps = {};
