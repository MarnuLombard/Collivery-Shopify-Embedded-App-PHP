import {Town} from './Town';

export type Suburb = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  postal_code: number;
  town: Town;
};
