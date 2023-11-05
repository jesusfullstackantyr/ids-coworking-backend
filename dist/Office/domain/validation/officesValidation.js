"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorupdateStatus = exports.OfficeValidation = exports.ValidatorId = void 0;
const class_validator_1 = require("class-validator");
class ValidatorId {
    constructor(id) {
        this.id = id;
    }
}
exports.ValidatorId = ValidatorId;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ValidatorId.prototype, "id", void 0);
class OfficeValidation {
    constructor(id, name, image_url, status, id_category) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.status = status;
        this.id_category = id_category;
    }
}
exports.OfficeValidation = OfficeValidation;
__decorate([
    (0, class_validator_1.IsInt)({ message: 'El ID debe ser un número entero' }),
    __metadata("design:type", Number)
], OfficeValidation.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de caracteres' }),
    (0, class_validator_1.Length)(1, 255, { message: 'El nombre debe tener entre 1 y 255 caracteres' }),
    __metadata("design:type", String)
], OfficeValidation.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'La URL de la imagen debe ser una cadena de caracteres' }),
    (0, class_validator_1.Length)(1, 255, { message: 'La URL de la imagen debe tener entre 1 y 255 caracteres' }),
    __metadata("design:type", String)
], OfficeValidation.prototype, "image_url", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El estado es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El estado debe ser una cadena de caracteres' }),
    (0, class_validator_1.Length)(1, 50, { message: 'El estado debe tener entre 1 y 50 caracteres' }),
    __metadata("design:type", String)
], OfficeValidation.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'La categoría de ID debe ser un número entero' }),
    __metadata("design:type", Number)
], OfficeValidation.prototype, "id_category", void 0);
class ValidatorupdateStatus {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}
exports.ValidatorupdateStatus = ValidatorupdateStatus;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ValidatorupdateStatus.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidatorupdateStatus.prototype, "status", void 0);
