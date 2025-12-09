import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import{appData} from "../testdata/shopLogin"
import { appUrls } from "../testdata/Navigate";
export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    roleSelect = this.page.locator("select");
    phoneInput = this.page.getByPlaceholder("Phone Number");
    passwordInput = this.page.getByPlaceholder("Password");
    loginBtn = this.page.getByRole("button",{ name:"Login", exact:true });

    async open() {
        await this.navigate(appUrls.loginUrl);
    }

    async login() {
        await this.safeClick(this.roleSelect);
        await this.roleSelect.selectOption(appData.shopOwnerLogin.role);
        await this.safeFill(this.phoneInput, appData.shopOwnerLogin.phonenumber);
        await this.safeFill(this.passwordInput, appData.shopOwnerLogin.password);
        await this.safeClick(this.loginBtn);
        await this.page.waitForLoadState("networkidle");
    }
}
