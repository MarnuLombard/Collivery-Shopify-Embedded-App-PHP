import {ServiceTypeId, ServiceTypeName} from "./ServiceType";
import {StatusId, StatusName} from "./Status";
import {Parcel} from "./Parcel";
import {AddressType} from "./Address";

export type Waybill = {
  id: number,
  custom_id: string|null,
  service_type_id: ServiceTypeId,
  service_type_name: ServiceTypeName,
  collection_time: number,
  customer_reference: string|null,
  delivery_time: number,
  parcel_count: number,
  special_instructions: string,
  collection_address_id: number,
  collection_contact_id: number,
  delivery_address_id: number,
  delivery_contact_id: number,
  status_id: StatusId,
  status_name: StatusName,
  parcel_description: string,
  weight: number,
  volumetric_weight: number,
  total_price: number,
  risk_cover: boolean,
  parcels: Parcel[],
  collection_address: AddressType,
  delivery_address: AddressType,
}
