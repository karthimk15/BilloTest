import { DashBoard } from "../pages/DashBoardPage";
import { test, expect } from "@playwright/test";
import { dashboardHelp } from "../Helper/DashboardHelp";
import {loginHelp} from "../Helper/LoginHelp";
test("Dashboard Details", async ({page}) => {
    await loginHelp(page);
    await dashboardHelp(page);
});

