import { IsString, IsInt, IsNotEmpty, IsEmail } from 'class-validator';

export class Address {
    @IsString({ message: 'La dirección principal debe ser una cadena' })
    mainStreet: string;
  
    @IsString({ message: 'La primera calle debe ser una cadena' })
    street_1: string;
  
    @IsInt({ message: 'El código postal debe ser un número entero' })
    @IsNotEmpty({ message: 'El código postal no puede estar vacío' })
    postalCode: number;
  
    @IsString({ message: 'La segunda calle debe ser una cadena' })
    street_2: string;
  
    @IsString({ message: 'La colonia debe ser una cadena' })
    colonia: string;
  
    @IsString({ message: 'El municipio debe ser una cadena' })
    municipio: string;
  
    @IsString({ message: 'El país debe ser una cadena' })
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
  