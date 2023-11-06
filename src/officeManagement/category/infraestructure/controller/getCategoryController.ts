import { Request, Response } from "express";
import { GetCategoryUseCase } from "../../application/getCategoryUseCase";

export class GetCategoryController {
  constructor(readonly getCategoryUseCase: GetCategoryUseCase) {}

  async get(req: Request, res: Response) {
    try {
      let id = parseInt(req.params.id);
      console.log("Category ID:", id); // Agrega esta línea para registrar el ID que estás intentando obtener.

      const category = await this.getCategoryUseCase.get(id);

      if (category) {
        return res.status(200).send({
          status: "success",
          data: {
            Cagory: category,
            message: "Category"
          }
        });
      } else {
        console.error("Category not found"); // Agrega esta línea para registrar que la categoría no se encontró.
        return res.status(404).send({
          status: "error",
          message: "Category not found."
        });
      }
    } catch (error) {
      console.error("Error:", error); // Agrega esta línea para registrar detalles sobre el error.

      if (error instanceof Error) {
        if (error.message.startsWith("[")) {
          return res.status(400).send({
            status: "error",
            message: "Validation failed",
            errors: JSON.parse(error.message)
          });
        }
      }
      return res.status(500).send({
        status: "error",
        message: "An error occurred while fetching the category."
      });
    }
  }
}
