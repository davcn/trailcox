import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  retries: 1,
  use: {
    baseURL: "http://localhost:5173/trailcox/",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-chrome", use: { ...devices["Pixel 5"] } },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173/trailcox/",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
