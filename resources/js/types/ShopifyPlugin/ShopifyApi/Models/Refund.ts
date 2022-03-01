import {AmountSet} from './AmountSet';

export type Refund = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  note: string;
  order_id: number;
  processed_at: string;
  restock: boolean;
  total_additional_fees_set: AmountSet;
  total_duties_set: AmountSet;
  user_id: number;
  order_adjustments: any;
  transactions: Array<any>;
  refund_line_items: Array<any>;
  duties: any;
  additional_fees: any;
};
