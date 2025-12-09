import * as dotenv from 'dotenv';

if (!process.env.CI) {
  require("dotenv").config();
}


export interface ShopOwnerLogin {
  role: string;
  phonenumber: string;
  password: string;
}

export interface User {
  name: string;
  phone: number;
}

export interface AppData {
  shopOwnerLogin: ShopOwnerLogin;
  user: User;
}
const phone = process.env.PHONE as string;
const password = process.env.PASSWORD as string;
export const appData: AppData = {
  shopOwnerLogin: {
    role: "ShopOwner",
    phonenumber: phone,
    password: password
  },
  user: {
    name: "",
    phone: 0
  }
};
