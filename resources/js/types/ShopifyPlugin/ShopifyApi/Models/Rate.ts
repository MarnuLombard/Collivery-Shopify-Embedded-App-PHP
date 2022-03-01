import {QuoteAddress} from './QuoteAddress';
import {ShippingLine} from './ShippingLine';

export type Rate = {
  origin: QuoteAddress;
  destination: QuoteAddress;
  items: Array<ShippingLine>;
  currency: string;
  locale: string;
};
