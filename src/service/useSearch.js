import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useSearch = (input = "") => {
  return useQuery({
    queryKey: ["search", input],
    queryFn: () =>
      request
        .get("/phones", {
          params: {
            title_like: input ? input : "00000",
          },
        })
        .then((res) => res.data),
  });
};


export const useComputerSearch = (input = "") => {
  return useQuery({
    queryKey: ["computer", input],
    queryFn: () =>
      request
        .get("/computer", { params: { brand_like: input || "00000" } })
        .then((res) => res.data),
  });
};
