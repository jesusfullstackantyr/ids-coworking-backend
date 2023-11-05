import { Request, Response } from "express";
import { ListAllAddressUseCase } from "../../application/listAllAddressUseCase";


export class ListAllAddressController {
    constructor(
        readonly listAllAddressUseCase : ListAllAddressUseCase,
    ){}

    async listAllAddress(req: Request, res: Response) {
        try {
          const address = await this.listAllAddressUseCase.getAllAddress();
          console.log(address)
          if (address) {
            return res.status(200).send({
              status: 'success',
              data: address,
              message: 'Lista de personas obtenida exitosamente',
              
            });
          }
          return res.status(404).send({
            status: 'error',
            message: 'No se encontraron personas',
          });
        } catch (error) {   
            console.error("Error fetching all users:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar usuarios",
            });
      
      }
}
}