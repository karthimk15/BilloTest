import { Page, expect, Locator } from "@playwright/test";

export class BasePage {
    constructor(public page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded", // SAFE for SPA
            timeout: 60000
        });

        // Ensure no redirect happened
        await this.page.waitForURL(url, {
            timeout: 15000
        });
    }

    async safeClick(locator: Locator) {
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async safeFill(locator: Locator, text: string) {
        await locator.waitFor();
        await locator.fill(text);
    }

    async waitForSpinner() {
        await this.page.waitForTimeout(200); 
    }
}
