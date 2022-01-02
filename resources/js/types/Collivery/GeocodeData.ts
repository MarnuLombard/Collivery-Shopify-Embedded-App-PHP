enum GeocodeAccuracy {
  Unknown = 0,
  Country = 1,
  Region = 2,
  Subregion = 3,
  Town = 4,
  Suburb = 5,
  Street = 6,
  Intersection = 7,
  Address = 8,
  Premise = 9,
  Driver = 10,
};

export type GeocodeData = {
  accuracy: GeocodeAccuracy,
  accuracy_type: keyof GeocodeAccuracy,
  last_geocoded_at: string,
  latitude: string,
  longitude: string,
}
