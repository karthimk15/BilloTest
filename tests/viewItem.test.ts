import {test, expect} from '@playwright/test';
import { ViewItemPage } from '../pages/ViewItemPage';
import { viewItemHelp } from '../Helper/ViewItemHelp';
import {loginHelp} from "../Helper/LoginHelp";
test('View Item Page', async ({page})=>{
    await loginHelp(page);
    await viewItemHelp(page);
});