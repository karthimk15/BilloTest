// helpers/loginHelper.ts
import { expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export async function loginHelp(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login();
  await expect(page.getByText("Your credits")).toBeVisible({ timeout: 10000 });
  await expect(page).toHaveURL(
    "https://billo-app.pages.dev/Shopadmin/shopdashboard"
  );
}
