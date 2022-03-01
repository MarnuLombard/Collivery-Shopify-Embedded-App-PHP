export type PaymentDetails = {
  credit_card_number: string;
  credit_card_company: string;
  credit_card_bin: string | null;
  avs_result_code: string | null;
  cvv_result_code: string | null;
  credit_card_name: string | null;
  credit_card_wallet: string | null;
  credit_card_expiration_month: string | null;
  credit_card_expiration_year: string | null;
};
