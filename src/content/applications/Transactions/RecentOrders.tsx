import { Card } from '@mui/material';
import { subDays } from 'date-fns';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Fiat Deposit',
      sourceDate: new Date().getTime(),
      level: 3,
      orderID: 'VUVX709ET7BY',
      sourceName: 'Site Porto',
      orderNumber: '(**) **** 1111',
      orderType: 'Azul por Assinatura',
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: '$'
    },
    {
      id: '2',
      orderDetails: 'Fiat Deposit',
      sourceDate: subDays(new Date(), 1).getTime(),
      level: 2,
      orderID: '23M3UOG65G8K',
      sourceName: 'Site Porto',
      orderNumber: '(**) **** 1111',
      orderType: 'Azul por Assinatura',
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '3',
      orderDetails: 'Fiat Deposit',
      sourceDate: subDays(new Date(), 5).getTime(),
      level: 1,
      orderID: 'F6JHK65MS818',
      sourceName: 'Manual',
      orderNumber: '(**) **** 1111',
      orderType: 'Cartão degustação',
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '4',
      orderDetails: 'Fiat Deposit',
      sourceDate: subDays(new Date(), 55).getTime(),
      level: 1,
      orderID: 'QJFAI7N84LGM',
      sourceName: 'Manual',
      orderNumber: '(**) **** 1111',
      orderType: 'Cartão degustação',
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '5',
      orderDetails: 'Fiat Deposit',
      sourceDate: subDays(new Date(), 56).getTime(),
      level: 0,
      orderID: 'BO5KFSYGC0YW',
      sourceName: 'Manual',
      orderNumber: '(**) **** 1111',
      orderType: 'Cartão degustação',
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '6',
      orderDetails: 'Fiat Deposit',
      sourceDate: subDays(new Date(), 33).getTime(),
      level: 0,
      orderID: '6RS606CBMKVQ',
      sourceName: 'Manual',
      orderNumber: '(**) **** 1111',
      orderType: 'Cartão degustação',
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '7',
      orderDetails: 'Fiat Deposit',
      sourceDate: new Date().getTime(),
      level: 1,
      orderID: '479KUYHOBMJS',
      sourceName: 'Manual',
      orderNumber: '(**) **** 1212',
      orderType: 'Cartão degustação',
      amount: 234234,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '8',
      orderDetails: 'Paypal Withdraw',
      sourceDate: subDays(new Date(), 22).getTime(),
      level: 3,
      orderID: 'W67CFZNT71KR',
      sourceName: 'Paypal Account',
      orderNumber: '(**) **** 1111',
      orderType: 'Cartão degustação',
      amount: 34544,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '9',
      orderDetails: 'Fiat Deposit',
      sourceDate: subDays(new Date(), 11).getTime(),
      level: 0,
      orderID: '63GJ5DJFKS4H',
      sourceName: 'Manual',
      orderNumber: '(**) **** 2222',
      orderType: 'Cartão degustação',
      amount: 123843,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '10',
      orderDetails: 'Wallet Transfer',
      sourceDate: subDays(new Date(), 123).getTime(),
      level: 2,
      orderID: '17KRZHY8T05M',
      sourceName: 'Wallet Transfer',
      orderNumber: "(**) *John's Cardano Wallet",
      orderType: 'Cartão degustação',
      amount: 7567,
      cryptoCurrency: 'ADA',
      currency: '$'
    }
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
