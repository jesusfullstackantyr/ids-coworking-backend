import { IsString, IsNumber,Min, IsNotEmpty} from 'class-validator';

export class Address {

  @IsNotEmpty()
  @IsString()
  mainStreet: string;

  @IsNotEmpty()
  @IsString()
  street_1: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  postalCode: number;

  @IsNotEmpty()
  @IsString()
  street_2: string;

  @IsNotEmpty()
  @IsString()
  colonia: string;

  @IsNotEmpty()
  @IsString()
  municipio: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  constructor(
    mainStreet: string,
    street_1: string,
    postalCode: number,
    street_2: string,
    colonia: string,
    municipio: string,
    country: string
  ) {
    this.mainStreet = mainStreet;
    this.street_1 = street_1;
    this.postalCode = postalCode;
    this.street_2 = street_2;
    this.colonia = colonia;
    this.municipio = municipio;
    this.country = country;
  }
}
