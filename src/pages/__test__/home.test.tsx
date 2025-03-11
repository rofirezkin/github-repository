import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Home from "../home";

vi.mock("../hooks/useGetSearchUser", () => ({
  useGetSearchUser: () => ({
    data: { data: { items: [] } },
    mutate: vi.fn(),
    isPending: false,
    isError: false,
  }),
}));

describe("Home Component - Unit Test", () => {
  const createQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });

  const renderWithQueryClient = (ui: React.ReactElement) => {
    return render(
      <QueryClientProvider client={createQueryClient()}>
        {ui}
      </QueryClientProvider>
    );
  };

  test("renders without crashing", () => {
    renderWithQueryClient(<Home />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("updates input value when typed", async () => {
    renderWithQueryClient(<Home />);
    const input = screen.getByRole("textbox");

    // Gunakan `userEvent.type` agar simulasi lebih mendekati real user input
    await userEvent.type(input, "testuser");

    expect(input).toHaveValue("testuser");
  });
});
