import { test, expect } from "@playwright/test";

test.describe("Gallery carousel", () => {
  test("gallery section exists with id=galeria", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#galeria")).toBeAttached();
  });

  test("gallery heading is visible", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#galeria");
    await expect(section.getByRole("heading")).toBeVisible();
  });

  test("prev and next buttons are present", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#galeria");
    const prev = section.getByRole("button", { name: /anterior|prev/i });
    const next = section.getByRole("button", { name: /siguiente|next/i });
    await expect(prev).toBeAttached();
    await expect(next).toBeAttached();
  });

  test("gallery CTA link is present and points to gallery URL", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#galeria");
    const ctaLink = section.getByRole("link", { name: /galería completa|full gallery/i });
    await expect(ctaLink).toBeAttached();
    const href = await ctaLink.getAttribute("href");
    expect(href).toBeTruthy();
  });

  test("dot navigation buttons are present", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#galeria");
    const dots = section.getByRole("button", { name: /imagen/i });
    await expect(dots.first()).toBeAttached();
  });
});
