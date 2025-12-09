import {test, expect} from '@playwright/test';
import { ViewItemPage } from '../pages/ViewItemPage';
import { Page } from '@playwright/test';
export async function viewItemHelp(page: Page){
    const viewItemPage = new ViewItemPage(page);
    await viewItemPage.navigateToViewItemPage();
    await viewItemPage.waitForViewItemPageLoaded();
    await viewItemPage.validateItemDetails();
};