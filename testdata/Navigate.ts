export interface AppUrls {
  loginUrl: string;
  dashboardUrl: string;
  billCreateUrl: string;
  AddItemUrl: string;
  ViewItemUrl: string;
  ViewBillUrl: string;
}

export const appUrls: AppUrls = {
  loginUrl: "https://billo-app.pages.dev/login",
  dashboardUrl: "https://billo-app.pages.dev/shopadmin/shopdashboard",
  billCreateUrl: "https://billo-app.pages.dev/shopadmin/create-bill",
  AddItemUrl: "https://billo-app.pages.dev/shopadmin/inventory",
  ViewItemUrl: "https://billo-app.pages.dev/shopadmin/inventory-list",
  ViewBillUrl: "https://billo-app.pages.dev/shopadmin/bill-history"
};
