export default class LineItem {
  id!: number;
  title!: string;
  quantity!: number;
  variant_title!: string;
  fulfillment_service!: string;
  product_id!: number;
  requires_shipping!: boolean;
  name!: string;
  fulfillable_quantity!: number;
  grams!: number;
  price!: string;
  total_discount!: string;
  fulfillment_status?: string;
  admin_graphql_api_id!: string;
}
