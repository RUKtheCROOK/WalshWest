import { test, expect } from "@playwright/test";

test("homepage loads and displays Walsh Trading link", async ({ page }) => {
  await page.goto("/");

  // Check that the page title is correct
  await expect(page).toHaveTitle(/Walsh West/);

  // Check that the main heading exists
  await expect(page.getByRole("heading", { name: /Walsh West/i })).toBeVisible();

  // Check that the Walsh Trading link is present in the footer
  const walshTradingLink = page.getByRole("link", { name: /Walsh Trading, Inc\./i });
  await expect(walshTradingLink).toBeVisible();
  await expect(walshTradingLink).toHaveAttribute("href", "https://walshtrading.com");
  await expect(walshTradingLink).toHaveAttribute("target", "_blank");
  await expect(walshTradingLink).toHaveAttribute("rel", "noopener noreferrer");

  // Check that the risk disclosure is visible
  await expect(page.getByText(/substantial risk of loss/i)).toBeVisible();
});

test("navigation works", async ({ page }) => {
  await page.goto("/");

  // Navigate to About page
  await page.getByRole("link", { name: /About/i, exact: true }).click();
  await expect(page).toHaveURL(/\/about/);
  await expect(page.getByRole("heading", { name: /About Walsh West/i })).toBeVisible();

  // Navigate to Services page
  await page.getByRole("link", { name: /Services/i }).click();
  await expect(page).toHaveURL(/\/services/);
  await expect(page.getByRole("heading", { name: /Our Services/i })).toBeVisible();

  // Navigate to Events page
  await page.getByRole("link", { name: /Events/i }).click();
  await expect(page).toHaveURL(/\/events/);
  await expect(page.getByRole("heading", { name: /Upcoming Events/i })).toBeVisible();

  // Navigate to Contact page
  await page.getByRole("link", { name: /Contact/i }).click();
  await expect(page).toHaveURL(/\/contact/);
  await expect(page.getByRole("heading", { name: /Get in Touch/i })).toBeVisible();
});
