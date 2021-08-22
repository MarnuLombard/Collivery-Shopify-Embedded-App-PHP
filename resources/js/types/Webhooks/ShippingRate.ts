export default class ShippingRate {
  /** @type {String */
  service_name;
  /** @type {String} */
  service_code;
  /** @type {Number} */
  total_price;
  /** @type {String} */
  currency = 'ZAR';
  /** @type {String} */
  min_delivery_date;
  /** @type {String} */
  max_delivery_date;

  constructor() {
  }
}
