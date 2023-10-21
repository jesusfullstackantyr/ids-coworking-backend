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
exports.CreateOfficeController = void 0;
const office_1 = require("../../domain/office");
class CreateOfficeController {
    constructor(createOfficeUseCase) {
        this.createOfficeUseCase = createOfficeUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, image_url, status, id_category } = req.body;
                const office = new office_1.Office(0, name, image_url, status, id_category);
                yield this.createOfficeUseCase.execute(office);
                res.status(201).send({ status: 'success', message: 'Office created successfully' });
            }
            catch (error) {
                res.status(500).send({ status: 'error', message: error.message });
            }
        });
    }
}
exports.CreateOfficeController = CreateOfficeController;
