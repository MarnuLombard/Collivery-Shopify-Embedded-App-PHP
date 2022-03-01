import {DefaultAddress} from './DefaultAddress';

export type Customer = {
  id: number;
  email: string;
  accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: number | null;
  last_order_name: string | null;
  note: string | null;
  verified_email: boolean;
  multipass_identifier: string | null;
  tax_exempt: boolean;
  phone: string | null;
  tags: string;
  currency: string;
  accepts_marketing_updated_at: string;
  marketing_opt_in_level: any;
  tax_exemptions: Array<any> | null;
  sms_marketing_consent: any;
  admin_graphql_api_id: string;
  default_address: DefaultAddress;
};
