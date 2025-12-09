import * as dotenv from 'dotenv';
if (!process.env.CI) {
  require("dotenv").config();
}

export interface ItemDetails {
  Itemname: string;
  SKU: string;
  barcode: string;
  HSNcode: string;
  CGST: number;
  SGST: number;
  MRP: number;
  price: number;
  quantity: number;
  Reorderlevel: number;
}

export interface ItemData {
  Itemdetails: ItemDetails;
}
const itemnamenv = process.env.ITEMNAME as string;
export const itemData: ItemData = {
  Itemdetails: {
    Itemname: itemnamenv,
    SKU: "TESTSKU123",
    barcode: "1234567890123",
    HSNcode: "998877",
    CGST: 9,
    SGST: 9,
    MRP: 100,
    price: 50,
    quantity: 20,
    Reorderlevel: 5
  }
};
