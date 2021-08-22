import LineItem from './LineItem';
import {QuoteAddress} from "./QuoteAddress";

export type OrderCreateParams = {
  shipping_address: QuoteAddress,
  test: boolean,
  admin_graphql_api_id: string,
  order_number: string|number,
  line_items: Array<LineItem>,
  note: string
};

export default class OrderCreate {
  domain: string;
  shipping_address: QuoteAddress;
  test: boolean;
  admin_graphql_api_id: string;
  order_number: string|number;
  line_items: LineItem[];
  note: string;

  constructor(params: OrderCreateParams, domain: string) {
    this.domain = domain;
    this.shipping_address = params.shipping_address;
    this.test = params.test;
    this.admin_graphql_api_id = params.admin_graphql_api_id;
    this.order_number = params.order_number;
    this.line_items = params.line_items;
    this.note = params.note;
  }
}
