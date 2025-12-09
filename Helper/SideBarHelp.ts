import {test} from '@playwright/test';
import { SideBar } from '../pages/SideBar';
import { Page } from '@playwright/test';
export async function sideBarHelp(page: Page) {
    const sideBar = new SideBar(page);
    await sideBar.naviDash();
    await sideBar.navigateToDashboardPage();
    await sideBar.navigateToAddItemPage();
    await sideBar.navigateToViewItemPage();
    await sideBar.navigateToBillCreatePage();
    await sideBar.navigateToBillViewPage()};