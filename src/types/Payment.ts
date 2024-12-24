export type PaymentMethod = 'credit-card' | 'paytm' | 'google-pay' | 'bank-transfer';

export interface PaymentDetails {
  method: PaymentMethod;
  amount: number;
  currency: string;
  isWholesale: boolean;
}

export interface CreditCardInfo {
  number: string;
  expiry: string;
  cvv: string;
  name: string;
}

export interface BankTransferInfo {
  accountName: string;
  accountNumber: string;
  bankName: string;
  ifscCode: string;
}