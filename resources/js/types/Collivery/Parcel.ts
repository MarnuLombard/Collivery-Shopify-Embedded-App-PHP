export enum ParcelAddMethod {
  AddedByClient = 'client',
  AddedBySystem = 'measuring tool',
  AddedByEmployee = 'employee',
}

/**
 * The optional properties are for when we are using the
 * `Parcel` as an input type (ie for getting a quote or booking a waybill)
 */
export type Parcel = {
  id?: number;
  waybill_id?: number;
  parcel_number: number;
  custom_id?: string;
  quantity: number;
  length: number;
  width: number;
  height: number;
  weight: number;
  volumetric_weight?: number;
  created_at?: string;
  add_method?: ParcelAddMethod;
};
