import {test, Page, expect} from '@playwright/test';
import{billData} from '../testdata/billcreate'
import { itemData } from '../testdata/itemAdd';
import {appUrls} from '../testdata/Navigate'
export class BillCreate {
    readonly billCreateHeader;
    readonly ShopName;//storing name of shop
    readonly phoneTextBox;
    readonly nameTextBox;
    readonly dateTimePicker;
    readonly statusDropDown;
    readonly paidOrUnpaidDropDown;
    readonly paymentMethodDropDown;
    readonly table;
    readonly tableRow;
    readonly tableItemNameTextBox;
    readonly suggestionList;
    readonly tableItemunitPriceTextBox;
    readonly tableItemQuantityTextBox;
    readonly tablesgst;
    readonly tablecgst;
    readonly tableMRP;
    readonly tableTotal;
    readonly tableDeleteButton;
    readonly tableEraseButton;
    readonly addItemButton;
    readonly totalAmountText; //storing total amount value
    readonly createBillButton;
    readonly errorBox;
    readonly errorCloseButton;
    readonly successBox;
    readonly listItem;
    constructor (public page: Page){
    this.billCreateHeader = page.locator('h1', { hasText: 'Create Bill' });
    this.ShopName = page.locator ('div', { hasText: /Shop:/ }).locator('span').innerText();
    this.phoneTextBox = page.getByPlaceholder('Enter phone');
    this.nameTextBox = page.getByPlaceholder('Customer Name');
    this.dateTimePicker = page.locator('input[type="datetime-local"]');
    this.statusDropDown = page.getByRole('combobox').first();;
    this.paidOrUnpaidDropDown = page.getByRole('combobox').nth(1);
    this.paymentMethodDropDown = page.getByRole('combobox').nth(2);
    this.table = page.locator('table');
    this.tableRow = this.table.locator('tbody tr');
    this.tableItemNameTextBox = this.tableRow.locator('td').nth(0).locator('input');
    this.suggestionList = this.page.getByTestId("item-suggestion-list");
    this.listItem = this.page.getByTestId("item-suggestion");
    this.tableItemunitPriceTextBox = this.tableRow.locator('td').nth(1).locator('input');
    this.tableItemQuantityTextBox = this.tableRow.locator('td').nth(2).locator('input');
    this.tablesgst = this.tableRow.locator('td').nth(3);
    this.tablecgst = this.tableRow.locator('td').nth(4);
    this.tableMRP = this.tableRow.locator('td').nth(5);
    this.tableTotal = this.tableRow.locator('td').nth(6);
    this.tableDeleteButton = this.tableRow.locator('td').nth(7).locator('button').nth(0);
    this.tableEraseButton = this.tableRow.locator('td').nth(7).locator('button').nth(1);
    this.addItemButton = page.getByRole('button', { name: 'Add Item'});
    this.totalAmountText = page.locator('.text-right').locator("p").nth(1).innerText();
    this.createBillButton = page.getByRole('button', { name: 'Create Bill' });
    this.errorBox = page.locator('div.bg-red-50');
    this.errorCloseButton = page.getByRole('button', { name: 'Close' });
    this.successBox = page.locator('div.bg-green-50');


}
    async navigateToBillCreatePage(){
        await this.page.goto(appUrls.billCreateUrl);
    }
    async idealWait(){
        await this.page.waitForTimeout(5000);
    }
    async waitForBillCreatePageLoaded(){
        await expect(this.billCreateHeader).toBeVisible();
      
    }
    async createBillOneRow(){
        await this.phoneTextBox.fill(billData.phone);
        await this.nameTextBox.fill(billData.customer_name);
        await this.dateTimePicker.fill(billData.date);
        await this.statusDropDown.selectOption(billData.status);
        await this.paidOrUnpaidDropDown.selectOption(billData.paidOrNot);
        await this.paymentMethodDropDown.selectOption(billData.payment_method);
        await this.tableItemNameTextBox.nth(0).fill("");
        await this.tableItemNameTextBox.nth(0).type(itemData.Itemdetails.Itemname, {delay:100});
        
        await this.suggestionList.waitFor({state: "visible", timeout: 1000});
        await this.listItem.first().click();
        await this.tableItemunitPriceTextBox.nth(0).fill(billData.price.toString());
        await this.tableItemQuantityTextBox.nth(0).fill(billData.quantity.toString());
        await this.createBillButton.click();
    }
    async waitForBillResult() {
    await Promise.race([
        this.errorBox.waitFor({ state: 'visible', timeout: 10000 }),
        this.successBox.waitFor({ state: 'visible', timeout: 10000 }),
        this.errorCloseButton.waitFor({ state: 'visible', timeout: 10000 }),
    ]);

}

async validateBillCreation() {
    if (await this.errorBox.isVisible()) {
        console.log("Bill Creation Failed");
        return "ERROR";
    }

    if (await this.successBox.isVisible()) {
        console.log("Bill Created Successfully");
        return "SUCCESS";
    }
    if (await this.errorCloseButton.isVisible()) {
        console.log("Error box closed by user");
        return "CLOSED";
    }
    throw new Error("Neither success nor error appeared!");
}
}