export default class ShippingItem {
  public name: string;
  public sku: string;
  public quantity: number;
  public grams: number;
  public price: number;
  public vendor: string;
  public requires_shipping: boolean;
  public taxable: boolean;
  public fulfillment_service: string;
  public properties: object;
  public product_id: number;
  public variant_id: number;

  constructor(props) {
    this.name = props.name;
    this.sku = props.sku;
    this.quantity = props.quantity;
    this.grams = props.grams;
    this.price = props.price;
    this.vendor = props.vendor;
    this.requires_shipping = props.requires_shipping;
    this.taxable = props.taxable;
    this.fulfillment_service = props.fulfillment_service;
    this.properties = props.properties;
    this.product_id = props.product_id;
    this.variant_id = props.variant_id;
  }
}
