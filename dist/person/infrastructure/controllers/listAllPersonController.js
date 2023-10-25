"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllPersonController = void 0;
class ListAllPersonController {
    constructor(listAllPersonUseCase) {
        this.listAllPersonUseCase = listAllPersonUseCase;
    }
    listAllPersons(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persons = yield this.listAllPersonUseCase.getAllPersons();
                console.log(persons);
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
            }
            catch (error) {
                console.error("Error fetching all users:", error);
                return res.status(500).send({
                    status: "error",
                    data: [],
                    message: "Error al recuperar usuarios",
                });
            }
        });
    }
}
exports.ListAllPersonController = ListAllPersonController;
