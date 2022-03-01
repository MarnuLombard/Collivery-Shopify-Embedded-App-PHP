import {ClientDetails} from './ClientDetails';
import {AmountSet} from './AmountSet';
import {Address} from './Address';
import {Customer} from './Customer';
import {PaymentDetails} from './PaymentDetails';

export type Order = {
  id: number;
  admin_graphql_api_id: string;
  app_id: number | null;
  browser_ip: string;
  buyer_accepts_marketing: boolean;
  cancel_reason: string | null;
  cancelled_at: string | null;
  cart_token: string;
  checkout_id: number;
  checkout_token: string;
  client_details: ClientDetails;
  closed_at: string | null;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_subtotal_price: string;
  current_subtotal_price_set: AmountSet;
  current_total_discounts: string;
  current_total_discounts_set: AmountSet;
  current_total_duties_set: AmountSet | null;
  current_total_price: string;
  current_total_price_set: AmountSet;
  current_total_tax: string;
  current_total_tax_set: AmountSet;
  customer_locale: string | null;
  device_id: string | null;
  discount_codes: Array<any>;
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string | null;
  gateway: string;
  landing_site: string;
  landing_site_ref: string | null;
  location_id: number | null;
  name: string;
  note: string | null;
  note_attributes: Array<any>;
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_duties_set: AmountSet | null;
  payment_gateway_names: Array<string>;
  phone: string | null;
  presentment_currency: string;
  processed_at: string;
  processing_method: string;
  reference: string | null;
  referring_site: string;
  source_identifier: string | null;
  source_name: string;
  source_url: string | null;
  subtotal_price: string;
  subtotal_price_set: AmountSet;
  tags: string;
  tax_lines: Array<any>;
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_discounts: string;
  total_discounts_set: AmountSet;
  total_line_items_price: string;
  total_line_items_price_set: AmountSet;
  total_outstanding: string;
  total_price: string;
  total_price_set: AmountSet;
  total_price_usd: string;
  total_shipping_price_set: AmountSet;
  total_tax: string;
  total_tax_set: AmountSet;
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: number | null;
  billing_address: Address;
  customer: Customer;
  discount_applications: Array<any>;
  fulfillments: Array<any>;
  line_items: Array<any>;
  payment_details: PaymentDetails;
  refunds: Array<any>;
  shipping_address: Address;
  shipping_lines: Array<any>;
};
