export enum LocationTypeName {
  BusinessPremises = 'Business Premises',
  GovernmentHospital = 'Government Hospital',
  FarmPlot = 'Farm / Plot',
  GovernmentBuilding = 'Government Building',
  Mine = 'Mine',
  PowerStation = 'Power Station',
  TrustArea = 'Trust Area',
  Township = 'Township',
  OfficePark = 'Office Park',
  GameReserveResort = 'Game Reserve / Resort',
  EmbassyConsulate = 'Embassy / Consulate',
  ShoppingCentre = 'Shopping Centre',
  ChainStore = 'Chain Store',
  University = 'University',
  PrivateHouse = 'Private House',
  GatedSuburb = 'Gated Suburb',
  TollPlaza = 'Toll Plaza',
}

export type LocationType = {
  id: number,
  name: LocationTypeName,
  surcharge: boolean,
  surcharge_amount: number
}
