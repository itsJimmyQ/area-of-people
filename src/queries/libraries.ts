import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "service/constants";
import { LibraryDetailsDto, LibraryDto } from "src/api/types";

const getListLibraries = async (payload?: GetListLibrariesPayload) => {
  let path = "/libraries";

  if (payload?.search) {
    path += `?search=${payload.search}`;
  }

  return fetch(path)
    .then((res) => res.json())
    .then((data) => data as LibraryDto[]);
};

export const useGetListLibraries = (payload?: GetListLibrariesPayload) => {
  return useQuery({
    queryKey: [QUERY_KEYS.LIBRARIES, QUERY_KEYS.LIST, payload],
    queryFn: () => getListLibraries(payload),
  });
};

type GetListLibrariesPayload = {
  search?: string;
};

const getLibraryDetail = (payload: GetLibraryDetailPayload) => {
  return fetch(`/libraries/${payload.libraryId}`)
    .then((res) => res.json())
    .then((data) => data as LibraryDetailsDto);
};

export const useGetLibraryDetail = (payload: GetLibraryDetailPayload) => {
  return useQuery({
    queryKey: [QUERY_KEYS.LIBRARIES, payload.libraryId],
    queryFn: () => getLibraryDetail(payload),
  });
};

type GetLibraryDetailPayload = {
  libraryId: string;
};
