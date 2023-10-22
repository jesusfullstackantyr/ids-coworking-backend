export interface Card {
    id: string;
    type: string;
    brand: string;
    address: string | null;
    card_number: string;
    holder_name: string;
    expiration_year: string;
    expiration_month: string;
    allows_charges: boolean;
    allows_payouts: boolean;
    creation_date: string;
    bank_name: string;
    customer_id: string;
    bank_code: string;
  }
  