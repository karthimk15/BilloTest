import { DashBoard } from "../pages/DashBoardPage";
import { test, expect } from "@playwright/test";
import { Page } from "@playwright/test";
export async function dashboardHelp(page: Page){
    const dashboard = new DashBoard(page);
    await page.goto("https://billo-app.pages.dev/Shopadmin/shopdashboard");
    await dashboard.validateDashboardVisible();
    const details = await dashboard.getDetails();
    console.log(details);
    if (details.todaysalesValue === "" || details.creditsValue === "" || details.yesterdayBillsValue === ""){
        throw new Error ("One of the dashboard values is empty");
    }
    await expect(details.todaysalesValue).not.toBe("");
    await expect(details.creditsValue).not.toBe("");
    await expect(details.yesterdayBillsValue).not.toBe("");
    
};

