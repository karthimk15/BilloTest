import {test, expect} from '@playwright/test';
import { loginHelp } from '../../Helper/LoginHelp';
import { sideBarHelp } from '../../Helper/SideBarHelp';
import { dashboardHelp } from '../../Helper/DashboardHelp';
import { addItemHelp } from '../../Helper/AddItemHelp';
import { viewItemHelp } from '../../Helper/ViewItemHelp';
import { createBillHelp } from '../../Helper/CreateBillHelp';
import { billViewHelp } from '../../Helper/ViewBillHelp';
test ("Smoke Test Suite", async ({page})=>{
    console.log("PHONE:", process.env.PHONE);
console.log("PASSWORD:", process.env.PASSWORD);

    await loginHelp(page);
    await dashboardHelp(page);
    await sideBarHelp(page);
    await addItemHelp(page);
    await viewItemHelp(page);
    await createBillHelp(page);
    await billViewHelp(page);
});