import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/about",
  "/sermons",
  "/ministries",
  "/events",
  "/give",
  "/connect",
  "/store",
  "/bible-institute"
];

test.describe("Royal Assembly UI", () => {
  for (const route of routes) {
    test(`renders ${route}`, async ({ page }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await expect(page.locator("header")).toContainText("Royal");
      await expect(page.locator("main h1").first()).toBeVisible();
      await expect(page.locator("footer")).toContainText("Building lives by the creative word of God");
    });
  }

  test("theme toggle switches to light theme", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const toggles = page.getByLabel("Toggle dark and light theme");
    const count = await toggles.count();
    for (let index = 0; index < count; index += 1) {
      if (await toggles.nth(index).isVisible()) {
        await toggles.nth(index).click();
        break;
      }
    }
    await expect(page.locator("html")).toHaveAttribute("data-theme", /light/);
  });

  test("home contains required social embed surfaces and books", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page.locator('iframe[title="Royal Assembly Church live Facebook feed"]')).toHaveAttribute("src", /facebook\.com\/plugins\/page\.php/);
    await expect(page.locator('iframe[title="Royal Assembly Church live Instagram profile"]')).toHaveAttribute("src", "https://www.instagram.com/royal_assembly_church/embed");
    await expect(page.getByText("Dare To Be Different").first()).toBeVisible();
  });

  test("sermon filter changes the grid", async ({ page }) => {
    await page.goto("/sermons", { waitUntil: "domcontentloaded" });
    await page.getByRole("tab", { name: "Pastor Favour" }).click({ force: true });
    await expect(page.getByText("How Normal is Your Normal?")).toBeVisible();
  });

  test("give page does not invent Paybill details", async ({ page }) => {
    await page.goto("/give", { waitUntil: "domcontentloaded" });
    await expect(page.getByText("Awaiting Verified Paybill")).toBeVisible();
    await expect(page.getByText("Royal Assembly Church / CFMI", { exact: true })).toBeVisible();
  });

  test("home has no obvious accessibility violations", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const results = await new AxeBuilder({ page })
      .exclude(".social-live-embeds")
      .exclude('iframe[title="Royal Assembly Church live Facebook feed"]')
      .exclude('iframe[title="Royal Assembly Church live Instagram profile"]')
      .disableRules(["color-contrast"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
