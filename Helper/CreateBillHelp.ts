import {test, expect, Page, Locator} from '@playwright/test';
import { BillCreate } from '../pages/BillCreate';
export async function createBillHelp(page: Page){
    // Navigate to the Create Bill page
    const billCreate = new BillCreate(page);
    await billCreate.navigateToBillCreatePage();
    await billCreate.idealWait();
    await billCreate.waitForBillCreatePageLoaded();
    await billCreate.createBillOneRow();
    await billCreate.waitForBillResult();
    await billCreate.validateBillCreation();

};