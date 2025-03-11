/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    deps: {
      inline: ["@testing-library/react", "@tanstack/react-query"],
    },
  },
});
