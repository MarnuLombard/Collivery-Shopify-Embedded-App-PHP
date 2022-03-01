import {ServiceTypeId} from './ServiceTypeId';
import {ServiceTypeName} from './ServiceTypeName';
import {Address} from './Address';

export type Waybill = {
  id: number;
  custom_id: string | null;
  service_type_id: ServiceTypeId;
  service_type_name: ServiceTypeName;
  collection_time: number;
  customer_reference: string | null;
  delivery_time: number;
  parcel_count: number;
  special_instructions: string;
  collection_address_id: number;
  collection_contact_id: number;
  delivery_address_id: number;
  delivery_contact_id: number;
  status_id: number;
  status_name: string;
  parcel_description: string;
  weight: number;
  volumetric_weight: number;
  total_price: number;
  risk_cover: boolean;
  delivery_address: Address;
  collection_address: Address;
  parcels: Array<any>;
};
