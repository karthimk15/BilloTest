import {Page} from "playwright";
import { BasePage } from "./BasePage";
import { appUrls } from "../testdata/Navigate";
import{ billData} from "../testdata/billcreate"
import { expect } from "@playwright/test";
export class BillView extends BasePage {
    readonly url = appUrls.ViewBillUrl;
    readonly billNumber;
    readonly customerName;
    readonly TotalAmount;
    readonly billDate;
    readonly billStatus;
    readonly viewbtn;
    constructor(public page:Page){super(page);
        this.billNumber = page.locator("table tbody tr td").nth(0);
        this.customerName = page.locator("table tbody tr td").nth(1);
        this.TotalAmount = page.locator("table tbody tr td").nth(2);
        this.billDate = page.locator("table tbody tr td").nth(3);
        this.billStatus = page.locator("table tbody tr td").nth(4);
        this.viewbtn = page.getByRole('button', { name: 'View' }).first();
    }
    async navigateToBillViewPage(){
        await this.navigate(this.url);
    }
  
    async viewFirstBill(){
        const billNum = await this.billNumber.innerText();
        const custName = await this.customerName.innerText();
        const totalAmt = await this.TotalAmount.innerText();
        const billDt = await this.billDate.innerText();
        const billStat = await this.billStatus.innerText();
        
       await expect (custName).toContain(billData.customer_name);
       await expect (billStat).toContain(billData.paidOrNot.toLocaleLowerCase());
       

    }
}