import {Page} from "playwright";
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { appUrls } from "../testdata/Navigate";

export class SideBar extends BasePage {
    readonly dashboardLink;
    readonly AddItemLink;
    readonly ViewItemLink;
    readonly billCreateLink;
    readonly billViewLink;

    constructor(public page:Page){super(page);
        this.dashboardLink = page.locator("nav").getByRole('link', { name: 'Dashboard' }).first();
        this.AddItemLink = page.getByRole('link', { name: 'Add Items' }).first();
        this.ViewItemLink = page.getByRole('link', { name: 'View Items' }).first();
        this.billCreateLink = page.getByRole('link', { name: 'Create Bill' }).first();
        this.billViewLink = page.getByRole('link', { name: 'Bill History' }).first();
    }
    async naviDash(){
        await this.navigate(appUrls.dashboardUrl);
    }
    async navigateToDashboardPage(){
        await this.dashboardLink.click();
        await expect (this.page).toHaveURL(appUrls.dashboardUrl);
    }
    async navigateToAddItemPage(){
        await this.AddItemLink.click();
        await expect (this.page).toHaveURL(appUrls.AddItemUrl);
        
    }
    async navigateToViewItemPage(){
        await this.ViewItemLink.click();
       await expect (this.page).toHaveURL(appUrls.ViewItemUrl);
    }
    async navigateToBillCreatePage(){
        await this.billCreateLink.click();
        await expect (this.page).toHaveURL(appUrls.billCreateUrl);
        
    }
    async navigateToBillViewPage(){
        await this.billViewLink.click();
        await expect (this.page).toHaveURL(appUrls.ViewBillUrl);
        
    }
}
    