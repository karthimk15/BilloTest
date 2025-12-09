import {test, expect, Page, Locator} from '@playwright/test';   
import { ItemAdd } from '../pages/ItemAdd';

export async function addItemHelp(page: Page){
    const itemAdd = new ItemAdd(page);
    await itemAdd.navigateToItemAddPage();
    await itemAdd.waitForItemAddPageLoaded();
    await itemAdd.addItem();
    await itemAdd.validateItemAddition();
    //await expect(itemAdd.page.getByText('Inventory Management')).toBeVisible({timeout:60000});
}