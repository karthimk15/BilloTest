import {test, expect, Page, Locator} from '@playwright/test';   
import { addItemHelp } from '../Helper/AddItemHelp';
import { loginHelp } from '../Helper/LoginHelp';
test('Add Item Page', async ({page})=>{
    await loginHelp(page);
    await addItemHelp(page);
   
})