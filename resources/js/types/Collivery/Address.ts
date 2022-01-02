import {LocationTypeName} from "./LocationType";
import {ProvinceCode, QuoteAddress} from "../Webhooks/QuoteAddress";
import {ProvinceName} from "./Town";

export type AddressType = {
  id: number,
  custom_id?: string,
  town_id: number,
  suburb_id: number,
  text: string,
  short_text: string,
  location_type: LocationType,
  geocode_data: GeocodeData
}

export class Address {
  custom_id?: string;
  town_id?: number;
  town_name: string;
  suburb_id: number;
  suburb_name?: string;
  company_name?: string;
  building?: string;
  street_number?: string;
  street: string;
  location_type?: number;
  location_type_name: string;
  province?: ProvinceName;

  constructor(address: AddressType) {
    this.custom_id = address.custom_id;
    this.town_id = address.town_id;
    this.town_name = address.town_name;
    this.suburb_id = address.suburb_id;
    this.suburb_name = address.suburb_name;
    this.company_name = address.company_name;
    this.building = address.building;
    this.street_number = address.street_number;
    this.street = address.street;
    this.location_type = address.location_type;
    this.location_type_name = address.location_type_name;
    this.province = address.province;
  }

  public static fromShopifyAddress(quoteAddress: QuoteAddress, suburbId: number): Address {
    let data: AddressType = {
      province : Address.provinceMap.get(quoteAddress.province),
      town_name : quoteAddress.city,
      suburb_id : suburbId,
      company_name : quoteAddress.company_name,
      building : quoteAddress.address2,
      street : quoteAddress.address1,
      location_type_name : LocationTypeName.BusinessPremises,
    }
    const address = new Address(data);
    return address;
  }

  static get provinceMap(): Map<string, ProvinceName> {
    return new Map<string, ProvinceName>([
      [ProvinceCode.EASTERN_CAPE, ProvinceName.EASTERN_CAPE],
      [ProvinceCode.FREE_STATE, ProvinceName.FREE_STATE],
      [ProvinceCode.GAUTENG, ProvinceName.GAUTENG],
      [ProvinceCode.KWAZULU_NATAL, ProvinceName.KWAZULU_NATAL],
      [ProvinceCode.LIMPOPO, ProvinceName.LIMPOPO],
      [ProvinceCode.MPUMALANGA, ProvinceName.MPUMALANGA],
      [ProvinceCode.NORTH_WEST, ProvinceName.NORTH_WEST],
      [ProvinceCode.NORTHERN_CAPE, ProvinceName.NORTHERN_CAPE],
      [ProvinceCode.WESTERN_CAPE, ProvinceName.WESTERN_CAPE],
    ]);
  }}
