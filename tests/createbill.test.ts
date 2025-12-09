import {test, expect, Page, Locator} from '@playwright/test';
import { BillCreate } from '../pages/BillCreate';
import { createBillHelp } from '../Helper/CreateBillHelp';
import { loginHelp } from '../Helper/LoginHelp';
test ('Create Bill', async ({page})=>{
    // Navigate to the Create Bill page
    await loginHelp(page);
    await createBillHelp(page);

});