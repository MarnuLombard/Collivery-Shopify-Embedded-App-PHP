import {AmountSet} from './AmountSet';
import {LineItem} from './LineItem';

export type RefundLineItems = {
  id: number;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: AmountSet;
  total_tax: number;
  total_tax_set: AmountSet;
  line_item: LineItem;
};
