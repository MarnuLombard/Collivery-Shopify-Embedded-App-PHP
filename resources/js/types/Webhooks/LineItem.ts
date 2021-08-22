export default class LineItem {
  /** @type {Number} */
  id;
  /** @type {String} */
  title;
  /** @type {Number} */
  quantity;
  /** @type {String} */
  variant_title;
  /** @type {String} */
  fulfillment_service;
  /** @type {Number} */
  product_id;
  /** @type {Boolean} */
  requires_shipping;
  /** @type {String} */
  name;
  /** @type {Number} */
  fulfillable_quantity;
  /** @type {Number} */
  grams;
  /** @type {String} */
  price;
  /** @type {String} */
  total_discount;
  /** @type {String|Undefined} */
  fulfillment_status;
  /** @type {String} */
  admin_graphql_api_id;
}
