// helpers/loginHelper.ts
import { expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export async function loginHelp(page: Page) {
  const loginPage = new LoginPage(page);
  for (let attempt = 1; attempt <= 3; attempt++) {
    console.log(`🔁 Login attempt: ${attempt}`);
    await loginPage.open();
    await loginPage.login();
    try {
      await expect(page.getByText("Your credits")).toBeVisible({ timeout: 10000 });
      console.log("✅ Login successful!");
      return true; // exit loop
    } catch (error) {
      console.log("❌ Login failed, element not visible");

      if (attempt === 3) {
        console.log("🚨 All 3 login attempts failed!");
        throw error; // stop test
      }

      // Reload the page or wait before retry
      await page.waitForTimeout(2000);
    }
  }

  await expect(page).toHaveURL(
    "https://billo-app.pages.dev/Shopadmin/shopdashboard"
  );
}
