export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  id: string;
  level: number;
  orderDetails: string;
  sourceDate: number;
  orderID: string;
  sourceName: string;
  orderNumber: string;
  orderType: string;
  amount: number;
  cryptoCurrency: string;
  currency: string;
}
