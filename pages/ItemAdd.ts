import {Page, expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { appUrls } from '../testdata/Navigate';
import {itemData} from '../testdata/itemAdd';
import { it } from 'node:test';
export class ItemAdd extends BasePage {
    url =appUrls.AddItemUrl;
    readonly itemname;
    readonly itemSKU;
    readonly itemHSN;
    readonly itemBarcode;
    readonly itemPrice;
    readonly itemMRP;
    readonly itemStock;
    readonly itemcgst;
    readonly itemsgst;
    readonly itemReorder;
    readonly itemTrack;
    readonly addItemBtn;

    constructor(public page: Page){
        super(page);
        this.itemname = this.page.getByPlaceholder('Item Name');
        this.itemSKU = page.getByPlaceholder('SKU');
        this.itemHSN = page.getByPlaceholder('HSN Code');
        this.itemBarcode = page.getByPlaceholder('Barcode');
        this.itemPrice = page.getByPlaceholder('Price', { exact: true })
        this.itemMRP = page.getByPlaceholder('MRP Price');
        this.itemStock = page.getByPlaceholder('Stock Quantity');
        this.itemcgst = page.getByPlaceholder('CGST %');
        this.itemsgst = page.getByPlaceholder('SGST %');
        this.itemReorder = page.getByPlaceholder('Reorder Level');
        this.itemTrack = page.getByRole('checkbox', { name: 'Track Batch' });
        this.addItemBtn = page.getByRole('button', { name: 'Add Item' });
    }
    
    async navigateToItemAddPage(){
        await this.navigate(this.url);
    }
    async waitForItemAddPageLoaded(){
        await this.page.waitForLoadState('networkidle');
    }
    async addItem(){
        await this.itemname.fill(itemData.Itemdetails.Itemname);
        await this.itemSKU.fill(itemData.Itemdetails.SKU);
        await this.itemHSN.fill(itemData.Itemdetails.HSNcode);
        await this.itemBarcode.fill(itemData.Itemdetails.barcode);
        await this.itemPrice.fill(itemData.Itemdetails.price.toString());
        await this.itemMRP.fill(itemData.Itemdetails.MRP.toString());
        await this.itemStock.fill(itemData.Itemdetails.quantity.toString());
        await this.itemcgst.fill(itemData.Itemdetails.CGST.toString());
        await this.itemsgst.fill(itemData.Itemdetails.SGST.toString());
        await this.itemReorder.fill(itemData.Itemdetails.Reorderlevel.toString());
        await this.itemTrack.check();
        await this.addItemBtn.click();
    }
    async validateItemAddition(){
       const dialog = await this.page.waitForEvent("dialog", { timeout: 5000 });
       expect(dialog.message()).toContain(`Item added: ${itemData.Itemdetails.Itemname}`);
       await dialog.accept();

    }
}