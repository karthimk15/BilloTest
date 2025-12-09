import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { appUrls } from "../testdata/Navigate";
import {itemData} from '../testdata/itemAdd';
export class ViewItemPage extends BasePage {
    readonly itemnameDisplay;
    readonly itemSKUDisplay;
    readonly itemHSNDisplay;
    readonly itemBarcodeDisplay;
    readonly itemPriceDisplay;
    readonly itemMRPDisplay
    readonly itemStockDisplay;
    readonly itemscgstDisplay

    readonly url = appUrls.ViewItemUrl;
    constructor(public page: Page) {
        super(page);
        this.itemnameDisplay = this.page.locator("div.bg-card").nth(0).locator(".tracking-tight ").nth(0).innerHTML();
        this.itemSKUDisplay = this.page.locator("div.bg-card").nth(0).locator("p").nth(0).nth(0).innerHTML();
        this.itemBarcodeDisplay = this.page.locator('div.bg-card').nth(0).getByRole("paragraph").nth(1).innerHTML();
        this.itemHSNDisplay = this.page.locator('div.bg-card').nth(0).getByRole("paragraph").nth(2).innerHTML();
        this.itemMRPDisplay = this.page.locator('div.bg-card').nth(0).getByRole("paragraph").nth(3).innerHTML();
        this.itemPriceDisplay = this.page.locator('div.bg-card').nth(0).getByRole("paragraph").nth(4).innerHTML();
        this.itemStockDisplay = this.page.locator('div.bg-card').nth(0).getByRole("paragraph").nth(5).innerHTML();
        this.itemscgstDisplay = this.page.locator('div.bg-card').nth(0).getByRole("paragraph").nth(6).innerHTML();
        
    }
    async navigateToViewItemPage() {
        await this.navigate(this.url);
    }
    async waitForViewItemPageLoaded() {
        await this.page.waitForLoadState('networkidle');
    }
    async validateItemDetails(){
        const itemName = await this.itemnameDisplay;
        const itemSKU = (await this.itemSKUDisplay).replace('SKU:', '');
        const itemHSN = (await this.itemHSNDisplay).replace('HSN:', '');
        const itemBarcode = (await this.itemBarcodeDisplay).replace('Barcode:', '');
        const itemPrice = (await this.itemPriceDisplay).replace('Price:', '');
        const itemMRP = (await this.itemMRPDisplay).replace('MRP:', '');
        const itemStock = (await this.itemStockDisplay).replace('Stock Quantity:', '');
        const itemscgst = (await this.itemscgstDisplay).replace('CGST/SGST:', '').replace('<strong></strong>','');
        console.log(itemBarcode, itemName, itemSKU, itemHSN, itemPrice, itemMRP, itemStock, itemscgst);
        expect(itemName).toContain(itemData.Itemdetails.Itemname);
        expect(itemSKU).toContain(itemData.Itemdetails.SKU);
        expect(itemHSN).toContain(itemData.Itemdetails.HSNcode);
        expect(itemBarcode).toContain(itemData.Itemdetails.barcode);
        expect(itemPrice).toContain(itemData.Itemdetails.price.toString());
        expect(itemMRP).toContain(itemData.Itemdetails.MRP.toString());
        expect(itemStock).toContain(itemData.Itemdetails.quantity.toString());
        expect(itemscgst).toContain(itemData.Itemdetails.CGST.toString()+'% / '+itemData.Itemdetails.SGST.toString()+"%");
        
    }
}