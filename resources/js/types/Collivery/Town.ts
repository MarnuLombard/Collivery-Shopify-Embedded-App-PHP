import {Suburb} from './Suburb';

export enum ProvinceName {
  WESTERN_CAPE = 'Western Cape',
  EASTERN_CAPE = 'Eastern Cape',
  GAUTENG = 'Gauteng',
  KWAZULU_NATAL = 'KwaZulu-Natal',
  MPUMALANGA = 'Mpumalanga',
  NORTHERN_CAPE = 'Northern Cape',
  LIMPOPO = 'Limpopo',
  NORTH_WEST = 'North West',
  FREE_STATE = 'Free State',
}

export type Town = {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  province: ProvinceName,
  suburbs?: Suburb[],
}
