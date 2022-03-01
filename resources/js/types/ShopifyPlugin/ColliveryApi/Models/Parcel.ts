export type Parcel = {
  id: number;
  waybill_id: number;
  parcel_number: number;
  custom_id: string | null;
  quantity: number;
  length: number;
  width: number;
  height: number;
  weight: number;
  volumetric_weight: number;
  created_at: string;
  add_method: string;
};
