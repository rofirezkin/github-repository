import { http } from "../../config/axios-instance";

export type SearchUsersParam = {
  query: string;
};

export type SearchUserResponse = {
  items: Array<{ login: string; id: string }>;
};

export async function getSearchUser(params: SearchUsersParam) {
  return await http.get<SearchUserResponse>(
    `search/users?q=${params.query}&per_page=5`
  );
}

export type GetSearchUserResponseType = ReturnType<typeof getSearchUser>;
