import {QuoteAddress} from './QuoteAddress';
import ShippingItem from './ShippingItem';

export type QuoteRequestParams = {
  rate: {
    origin: QuoteAddress,
    destination: QuoteAddress,
    items: ShippingItem[],
    currency: string,
    locale: string,
  }
};

export default class QuoteRequest {
  public origin: QuoteAddress;
  public destination: QuoteAddress;
  public items: ShippingItem[] = [];
  public currency: string = 'ZAR';
  public locale: string = 'en';

  constructor(params: QuoteRequestParams) {
    const rate = params.rate;
    this.origin = rate.origin;
    this.destination = rate.destination;
    for (const item of rate.items) {
      this.items.push(new ShippingItem(item));
    }
    this.currency = rate.currency;
    this.locale = rate.locale;
  }
};
