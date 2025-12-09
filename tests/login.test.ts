// tests/login.test.ts
import { test } from "@playwright/test";
import { loginHelp } from "../Helper/LoginHelp";

test("Billo App Login Test 1.1", async ({ page }) => {
  await loginHelp(page);
});
