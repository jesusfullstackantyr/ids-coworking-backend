import { Validator } from "class-validator";
import { query } from "../../../database/mariaDb";
import { Address } from "../domain/entities/address";
import { AddressRepository } from "../domain/repositories/addressRepository";

export class MariadbAddressRepository implements AddressRepository {
    async listAllAddress(): Promise<Address[] | null> {
        try {
            const sql = `SELECT id, mainStreet, street_1, postalCode, street_2, colonia, municipio, country FROM address`;
        // No necesitas parámetros en esta consulta, por lo que no es necesario definir 'params'.
        const params: any[] = [];  // No hay parámetros en esta consulta
        const result = await query(sql,params);

        // Verifica si se obtuvieron resultados
        if (Array.isArray(result) && result.length > 0) {
            // Mapea los resultados a objetos Person y devuelve una matriz de Person
            const address: Address[] = result.map((row: any) => new Address(row.mainStreet, row.street_1, row.postalCode.toString(), row.street_2, row.colonia, row.municipio, row.country));
            return address;
        } else {
            // No se encontraron registros, devuelve una matriz vacía
            return [];
        }
    } catch (error) {
        console.error("Error al listar personas: ", error);
        return null;
    }
}

    async registerAddress(mainStreet: string, street_1: string, postalCode: number, street_2: string, colonia: string, municipio: string, country:string): Promise<Address | Error | null> {
      
    try {

        console.log(mainStreet, street_1, postalCode, street_2, colonia, municipio, country);

        let sql = "INSERT INTO address(mainStreet, street_1, postalCode, street_2, colonia, municipio, country) VALUES (?, ?, ?, ?, ?, ?, ?)";

        const params = [mainStreet, street_1, postalCode, street_2, colonia, municipio, country];
        const result = await query(sql, params);

        return new Address(mainStreet, street_1, postalCode, street_2, colonia, municipio, country);

    } catch (error) {
        console.error("Error adding person: ", error);
        return null;
    }
}

async updateAddress(id: number, mainStreet: string, street_1: string, postalCode: number, street_2: string, colonia: string, municipio: string, country: string): Promise<Address | null> {
    try {
      const addressQuery = "SELECT * FROM address WHERE id = ?";
      const addressResult = await query(addressQuery, [id]);
      if (addressResult.length === 0) {
        console.error("No se encontró ninguna persona con el ID proporcionado");
        return null;
      }

      const updateQuery = "UPDATE address SET mainStreet = ?, street_1 = ?, postalCode = ?, street_2 = ?, colonia = ?, municipio = ?, country = ? WHERE id = ?";
      const updateResult = await query(updateQuery, [mainStreet,street_1,postalCode,street_2,colonia,municipio,country, id]);
      if (updateResult.affectedRows > 0) {
        console.log("Persona actualizada con éxito");

        const updatedAddress: Address = {
          mainStreet, street_1, postalCode, street_2, colonia, municipio, country,
        };

        return updatedAddress;
      } else {
        console.error("No se pudo actualizar el estado de la persona");
        return null;
      }
    } catch (error) {
      console.error("Error al validar la persona:", error);
      return null;
    }
  }
}
