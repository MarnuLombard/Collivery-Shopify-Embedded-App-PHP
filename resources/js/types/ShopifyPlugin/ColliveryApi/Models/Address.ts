import {LocationType} from './LocationType';
import {GeocodeData} from './GeocodeData';

export type Address = {
  id: number;
  custom_id: string | null;
  town_id: number;
  suburb_id: number;
  company_name: string | null;
  building_complex_name: string | null;
  street_number: string | null;
  street_name: string;
  postal_code: string | null;
  country_name: string;
  text: string;
  short_text: string;
  location_type: LocationType;
  geocode_data: GeocodeData;
};
