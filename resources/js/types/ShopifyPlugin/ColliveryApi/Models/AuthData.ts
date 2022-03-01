import {Client} from './Client';

export type AuthData = {
  id: number;
  full_name: string;
  email_address: string;
  landline_number: string | null;
  mobile_number: string | null;
  api_token: string;
  client: Client;
};
