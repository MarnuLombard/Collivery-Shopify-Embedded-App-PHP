import LineItem from './LineItem';

export type OrderEditParams = {
  id: number,
  app_id: number,
  created_at: string,
  notify_customer: boolean,
  order_id: number,
  staff_note: string|null,
  user_id: number,
  line_items: LineItem[]
}

export default class OrderEdit {
  public domain: string;
  public id: number;
  public app_id: number;
  public created_at: string;
  public notify_customer: boolean;
  public order_id: number;
  public staff_note: string|null;
  public user_id: number;
  public line_items: LineItem[];

  constructor(payload: OrderEditParams, domain: string) {
    this.domain = domain;
    this.id = payload.id;
    this.app_id = payload.app_id;
    this.created_at = payload.created_at;
    this.notify_customer = payload.notify_customer;
    this.order_id = payload.order_id;
    this.staff_note = payload.staff_note;
    this.user_id = payload.user_id;
    this.line_items = payload.line_items;
  }
}
