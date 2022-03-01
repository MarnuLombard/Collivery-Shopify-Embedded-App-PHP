import {Address} from './Address';

export type Client = {
  id: number;
  name: string;
  landline_number: string | null;
  mobile_number: string | null;
  account_code: string;
  account_type: string;
  primary_address: Address;
};
