export type BooleanSettings = {
  riskCover: boolean;
  excludeWeekends: boolean;
  rica: boolean;
  consigneeOnly: boolean;
  smsTracking: boolean;
  freeShipping: boolean;
  loading: boolean;
  successActive: boolean;
  errorActive: boolean;
};
export type OtherSettings = {
  userName: string;
  password: string;
  discount: number;
  freeShippingMinimum: number;
};

export type Settings = BooleanSettings & OtherSettings;
