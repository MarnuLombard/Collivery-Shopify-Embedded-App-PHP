import {LocationId} from './LocationId';
import {PaymentDetails} from './PaymentDetails';
import {Receipt} from './Receipt';
import {CurrencyExchangeAdjustment} from './CurrencyExchangeAdjustment';
import {ExtendedAuthorizationAttributes} from './ExtendedAuthorizationAttributes';

export type Transaction = {
  id: number;
  order_id: number;
  kind: string;
  gateway: string;
  status: string;
  message: string | null;
  created_at: string;
  test: boolean;
  authorization: string;
  location_id: LocationId;
  user_id: number | null;
  parent_id: number | null;
  processed_at: string;
  device_id: number | null;
  error_code: string | null;
  source_name: string;
  payment_details: PaymentDetails;
  receipt: Receipt;
  currency_exchange_adjustment: CurrencyExchangeAdjustment | null;
  amount: string;
  currency: string;
  authorization_expires_at: string | null;
  extended_authorization_attributes: ExtendedAuthorizationAttributes;
  admin_graphql_api_id: string;
};