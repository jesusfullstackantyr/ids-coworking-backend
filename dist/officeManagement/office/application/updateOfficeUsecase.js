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
exports.UpdateOfficeUseCase = void 0;
const class_validator_1 = require("class-validator");
const office_1 = require("../domain/entities/office");
class UpdateOfficeUseCase {
    constructor(officeRepository) {
        this.officeRepository = officeRepository;
    }
    execute(officeValidation) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield (0, class_validator_1.validate)(officeValidation);
            if (errors.length > 0) {
                throw { message: 'Validation failed!', errors };
            }
            const office = new office_1.Office(officeValidation.id, officeValidation.name, officeValidation.image_url, officeValidation.status, officeValidation.id_category);
            yield this.officeRepository.update(office);
        });
    }
}
exports.UpdateOfficeUseCase = UpdateOfficeUseCase;
