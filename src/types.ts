export type Page = 'home' | 'auth' | 'account' | 'shop';

export interface Order {
  id: string;
  title: string;
  date: string;
  price: number;
  status: 'Shipped' | 'Delivered' | 'Processing';
  image: string;
  shippingType: string;
}

export interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiry: string;
  isPlaceholder?: boolean;
}
