import {AmountSet} from './AmountSet';

export type ShippingLine = {
  id: number | null;
  carrier_identifier: string | null;
  code: string;
  delivery_category: any;
  discounted_price: string;
  discounted_price_set: AmountSet;
  phone: string | null;
  price: string;
  price_set: AmountSet;
  requested_fulfillment_service_id: string | null;
  source: string;
  title: string;
  tax_lines: Array<any>;
  discount_allocations: Array<any>;
};
