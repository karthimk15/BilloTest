import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
//import { DashBoard } from '../pages/DashBoardPage';
test('login and save storage', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login();
    //const DashBoardCheck = new DashBoard(page);
    await expect (page.getByText("Your credits")) .toBeVisible({timeout:60000});
    await page.context().storageState({ path: 'storageState.json' });
    });

