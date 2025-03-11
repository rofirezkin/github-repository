import { http } from "../../config/axios-instance";

export type UserReposParam = {
  username: string;
};

export type UserReposResponse = Array<{
  name: string;
  description: string;
  stargazers_count: number;
}>;

export async function getUserRepos(params: UserReposParam) {
  return await http.get<UserReposResponse>(`users/${params.username}/repos`);
}

export type GetUserReposResponseType = ReturnType<typeof getUserRepos>;
