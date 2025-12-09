import {test, expect} from "@playwright/test";
import { BillView } from "../pages/BillView";
import { loginHelp } from "../Helper/LoginHelp";
import { billViewHelp } from "../Helper/ViewBillHelp";
test("Bill View and printing it on console", async({page})=>{
    await loginHelp(page);
    await billViewHelp(page);
});