/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, test, vi } from "vitest";
import { useGetUserRepos } from "../useGetUserRepos";
import { getUserRepos } from "../../apis/user/get.user-repos";
import { AxiosError } from "axios";
import { ReactNode } from "react";

vi.mock("../../apis/user/get.user-repos", () => ({
  getUserRepos: vi.fn(),
}));

describe("useGetUserRepos Hook", () => {
  const createQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={createQueryClient()}>
      {children}
    </QueryClientProvider>
  );

  test("should return initial state", () => {
    const { result } = renderHook(
      () =>
        useGetUserRepos({
          params: { username: "testuser" },
          options: { enabled: false },
        }),
      { wrapper }
    );

    expect(result.current.isLoading).toBe(false); // Setelah `enabled: false`, `isLoading` seharusnya `false`
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual([]);
  });

  test("should fetch and return user repositories", async () => {
    // **5. Mock data response dari API**
    const mockResponse = {
      data: [
        { name: "Repo 1", description: "Desc 1", stargazers_count: 10 },
        { name: "Repo 2", description: "Desc 2", stargazers_count: 5 },
      ],
    };
    (getUserRepos as unknown as any).mockResolvedValue(mockResponse);

    // **6. Render hook**
    const { result } = renderHook(
      () =>
        useGetUserRepos({
          params: { username: "testuser" },
          options: { enabled: true },
        }),
      { wrapper }
    );

    // **7. Tunggu hingga response diterima**
    await waitFor(() => expect(result.current.data).toEqual(mockResponse.data));
  });

  test("should handle API error correctly", async () => {
    // **8. Simulasi error pada API**
    const mockError = new AxiosError("API Error");
    (getUserRepos as unknown as any).mockRejectedValue(mockError);

    const { result } = renderHook(
      () =>
        useGetUserRepos({
          params: { username: "erroruser" },
          options: { enabled: true },
        }),
      { wrapper }
    );

    // **9. Tunggu hingga error state diperbarui**
    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
