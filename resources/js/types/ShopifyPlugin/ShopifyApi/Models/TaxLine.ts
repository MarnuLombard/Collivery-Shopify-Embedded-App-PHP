import {AmountSet} from './AmountSet';

export type TaxLine = {
  channel_liable: boolean | null;
  price: string;
  price_set: AmountSet;
  rate: number;
  title: string;
};
