import {test, expect} from "@playwright/test";
import { BillView } from "../pages/BillView";
import { Page } from '@playwright/test';
export async function billViewHelp(page: Page){
    const billView = new BillView(page);
    
    await billView.navigateToBillViewPage();
   
    console.log(await billView.viewFirstBill());
};