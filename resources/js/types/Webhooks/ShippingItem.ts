export default class ShippingItem {
  name!: string;
  sku!: string;
  quantity!: number;
  grams!: number;
  price!: number;
  vendor!: string;
  requires_shipping!: boolean;
  taxable!: boolean;
  fulfillment_service!: string;
  properties!: object;
  product_id!: number;
  variant_id!: number;

  constructor(props: Record<keyof ShippingItem, string | number | boolean | object>) {
    Object.assign(this, props);
  }
}
