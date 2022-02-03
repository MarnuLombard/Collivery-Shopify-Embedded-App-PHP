export default class ShippingRate {
  service_name!: string;
  service_code!: string;
  total_price!: number;
  min_delivery_date!: string;
  max_delivery_date!: string;
  currency = 'ZAR';

  constructor(props: Record<keyof ShippingRate, any>) {
    Object.assign(this, props);
  }
}
