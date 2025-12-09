import {test} from '@playwright/test';
import { SideBar } from '../pages/SideBar';
import { loginHelp } from '../Helper/LoginHelp';
import { sideBarHelp } from '../Helper/SideBarHelp';
test("Navigation Tests from SideBar", async({page})=>{
    await sideBarHelp(page);
    await loginHelp(page);
   });