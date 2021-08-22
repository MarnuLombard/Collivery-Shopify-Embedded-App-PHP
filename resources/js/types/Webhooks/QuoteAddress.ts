export enum ProvinceCode {
  EASTERN_CAPE = 'EC',
  FREE_STATE = 'FS',
  GAUTENG = 'GT',
  KWAZULU_NATAL = 'NL',
  LIMPOPO = 'LP',
  MPUMALANGA = 'MP',
  NORTH_WEST = 'NW',
  NORTHERN_CAPE = 'NC',
  WESTERN_CAPE = 'WC',
}

export type QuoteAddress = {
  country: string,
  postal_code: number,
  province: ProvinceCode,
  city: string,
  name: string,
  address1: string,
  address2?: string,
  phone?: string,
  email?: string,
  // The address3, fax, address_type, and company_name fields are returned by specific ActiveShipping providers
  address3: undefined,
  fax: null,
  address_type: undefined,
  company_name: undefined,
}
