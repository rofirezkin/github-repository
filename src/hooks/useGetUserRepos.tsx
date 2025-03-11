import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  getUserRepos,
  GetUserReposResponseType,
  UserReposParam,
} from "../apis/user/get.user-repos";
import { AxiosBaseError } from "../config/base-error";

export type UseGetUserReposProps = {
  params: UserReposParam;
  options?: Partial<
    UseQueryOptions<Awaited<GetUserReposResponseType>, AxiosBaseError>
  >;
};

export const useGetUserReposQueryKey = "GetUserReposQueryKey";

export function useGetUserRepos({ params, options }: UseGetUserReposProps) {
  const query = useQuery({
    refetchOnWindowFocus: false,
    queryKey: [params, useGetUserReposQueryKey],
    queryFn: () => getUserRepos(params),
    ...options,
  });

  const data = useMemo(() => query.data?.data || [], [query.data?.data]);

  const results = useMemo(
    () => ({
      ...query,
      data,
    }),
    [query, data]
  );

  return results;
}
