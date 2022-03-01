import {Address} from './Address';
import {Receipt} from './Receipt';

export type Fulfillment = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  location_id: number;
  name: string;
  order_id: number;
  origin_address: Address;
  receipt: Receipt;
  service: string;
  shipment_status: any;
  status: string;
  tracking_company: string;
  tracking_number: string;
  tracking_numbers: Array<string>;
  tracking_url: string;
  tracking_urls: Array<string>;
  updated_at: string;
  line_items: Array<any>;
};
