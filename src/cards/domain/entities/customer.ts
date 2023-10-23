
export interface Customer {
    id: string;
    name: string;
    last_name: string | null;
    email: string;
    phone_number: string;
    address: string | null;
    creation_date: string;
    external_id: string | null;
    clabe: string | null;
  }
  

export interface CustomerRequest {
  name: string,
  email: string,
  requires_account: boolean
}