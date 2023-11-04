import { Request, Response } from "express";
import { ListAllPersonUseCase } from "../../application/listAllPersonUseCase";


export class ListAllPersonController {
    constructor(
        readonly listAllPersonUseCase : ListAllPersonUseCase,
    ){}

    async listAllPersons(req: Request, res: Response) {
        try {
          const persons = await this.listAllPersonUseCase.getAllPersons();
          console.log(persons)
          if (persons) {
            return res.status(200).send({
              status: 'success',
              data: persons,
              message: 'Lista de personas obtenida exitosamente',
              
            });
          }
          //console.log(persons)
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