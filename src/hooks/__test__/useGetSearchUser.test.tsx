/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi, describe, expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetSearchUser } from "../useGetSearchUser";
import { getSearchUser } from "../../apis/user/get.search-user";
import { AxiosError } from "axios";
import { ReactNode } from "react";


vi.mock("../../apis/user/get.search-user", () => ({
  getSearchUser: vi.fn(),
}));

describe("useGetSearchUser Hook", () => {
  const createQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        mutations: { retry: false },
      },
    });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={createQueryClient()}>
      {children}
    </QueryClientProvider>
  );

  test("should call API and return search results", async () => {
    const mockResponse = {
      data: { items: [{ login: "testuser", id: "123" }] },
    };

    (getSearchUser as unknown as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useGetSearchUser(), { wrapper });
    result.current.mutate({ query: "testuser" });

    await waitFor(() => expect(result.current.data).toEqual(mockResponse));
  });

  test("should handle API error correctly", async () => {
    const mockError = new AxiosError("API Error");
    (getSearchUser as unknown as any).mockRejectedValue(mockError);

    const { result } = renderHook(() => useGetSearchUser(), { wrapper });
    result.current.mutate({ query: "erroruser" });

    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
