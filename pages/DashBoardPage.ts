import { Page, expect } from '@playwright/test';

export class DashBoard {

    readonly todaySales;
    readonly credits;
    readonly yesterdayBills;

    constructor(public page: Page){

        this.todaySales = page.locator("div.p-5", { hasText: /Today's Sales/ });
        this.credits = page.locator('div.p-5', { hasText: 'Your credits' });
        this.yesterdayBills = page.locator('div .p-5', { hasText: 'Yesterday Bills' });

    }

    async waitForDashboardLoaded(){
        await expect(this.todaySales).toBeVisible();
        await expect(this.credits).toBeVisible();
        await expect(this.yesterdayBills).toBeVisible();
    }

    async getDetails(){

        // always wait before reading
       

        return {
            todaysalesValue: await this.todaySales.locator("p").innerText(),
            creditsValue: await this.credits.locator("p").innerText(),
            yesterdayBillsValue: await this.yesterdayBills.locator("p").innerText()
        };
    }

    async validateDashboardVisible(){
        await this.waitForDashboardLoaded();
    }
}
