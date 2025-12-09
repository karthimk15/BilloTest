export interface BillData {
  phone: string;
  customer_name: string;
  date: string;
  status: string;
  payment_method: string;
  paidOrNot: string;
  price: number;
  quantity: number;
}

export const billData: BillData = {
  phone: "1234567890",
  customer_name: "John Doe",
  date: "2025-12-09T17:03:08",
  status: "Pending",
  payment_method: "Cash",
  paidOrNot: "Paid",
  price: 50,
  quantity: 2
};
