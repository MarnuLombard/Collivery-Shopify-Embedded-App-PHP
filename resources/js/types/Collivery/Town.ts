import {Suburb} from './Suburb';
import {ProvinceName} from './ProvinceName';

export type Town = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  province: ProvinceName;
  suburbs?: Suburb[];
};
