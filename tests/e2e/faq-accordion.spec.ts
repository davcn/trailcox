import { test, expect } from "@playwright/test";

test.describe("FAQ accordion", () => {
  test("FAQ section exists with id=faq", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#faq")).toBeAttached();
  });

  test("FAQ heading is visible in Spanish", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#faq");
    await expect(section.getByRole("heading", { level: 2 })).toBeVisible();
  });

  test("FAQ has at least 8 items", async ({ page }) => {
    await page.goto("/");
    const items = page.locator("#faq details");
    await expect(items).toHaveCount(8);
  });

  test("clicking a FAQ summary opens the answer", async ({ page }) => {
    await page.goto("/");
    const first = page.locator("#faq details").first();
    await expect(first).not.toHaveAttribute("open");
    await first.locator("summary").click();
    await expect(first).toHaveAttribute("open", "");
  });

  test("clicking open FAQ again closes it", async ({ page }) => {
    await page.goto("/");
    const first = page.locator("#faq details").first();
    await first.locator("summary").click();
    await expect(first).toHaveAttribute("open", "");
    await first.locator("summary").click();
    await expect(first).not.toHaveAttribute("open");
  });

  test("FAQ items are visible in English", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "EN" }).first().click();
    const items = page.locator("#faq details");
    await expect(items).toHaveCount(8);
  });
});
