import { IProduct } from 'components/Product/Product.types';

interface ICourier {
  deliveryBy: string;
}

interface ICustomer {
  companyName: string;
  email: string;
  name: string;
  phoneNumber: string;
}

interface IDeliveryAddress {
  city: string;
  extraAddressInfo: string;
  postalCode: string;
  street: string;
  streetNumber: string;
}

interface IPackaging {
  includeCutlery: boolean;
}

interface IPayment {
  amount: number;
  due: number;
  type: number;
}

interface IStatusHistory {
  response: string;
  source: number;
  status: number;
  timeStamp: string;
}

export interface IOrder {
  _created: string;
  _id: string;
  _updated: string;
  account: string;
  brandId: string;
  by: string;
  channel: number;
  channelLink: string;
  channelOrderDisplayId: string;
  channelOrderId: string;
  channelOrderRawId: string;
  courier: ICourier;
  customer: ICustomer;
  decimalDigits: number;
  deliveryAddress: IDeliveryAddress;
  deliveryCost: number;
  deliveryIsAsap: boolean;
  deliveryTime: string;
  discountTotal: number;
  historyDriverUpdates?: string[];
  items: IProduct[];
  location: string;
  note: string;
  numberOfCustomers: number;
  orderIsAlreadyPaid: boolean;
  orderType: number;
  packaging: IPackaging;
  payment: IPayment;
  pickupTime: string;
  pos: number;
  posId: string;
  posLocationId: string;
  posReceiptId: string;
  rating?: string[];
  recent: boolean;
  resolvedBy: string;
  serviceCharge: number;
  status: number;
  statusHistory: IStatusHistory[];
  taxes?: string[];
  tip: number
}
