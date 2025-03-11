import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import {
  getSearchUser,
  GetSearchUserResponseType,
  SearchUsersParam,
} from "../apis/user/get.search-user";
import { AxiosBaseError } from "../config/base-error";
export type SearchUserProps = {
  options?: Partial<
    UseMutationOptions<
      Awaited<GetSearchUserResponseType>,
      AxiosBaseError,
      SearchUsersParam
    >
  >;
};

export function useGetSearchUser({ options }: SearchUserProps = {}) {
  const mutation = useMutation({
    mutationFn: (payload) => getSearchUser(payload),
    ...options,
  });

  return mutation;
}
