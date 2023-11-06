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
exports.ValidatorId = exports.ValidationUpdateCategory = exports.ValidationCreateCategory = void 0;
const class_validator_1 = require("class-validator");
class ValidationCreateCategory {
    constructor(name, price, capacity, space, status) {
        this.name = name;
        this.price = price;
        this.capacity = capacity;
        this.space = space;
        this.status = status;
    }
}
exports.ValidationCreateCategory = ValidationCreateCategory;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidationCreateCategory.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ValidationCreateCategory.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ValidationCreateCategory.prototype, "capacity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidationCreateCategory.prototype, "space", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(["Activo", "Inactivo", "Mantenimiento"]),
    __metadata("design:type", String)
], ValidationCreateCategory.prototype, "status", void 0);
class ValidationUpdateCategory {
    constructor(id, name, price, capacity, space, status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.capacity = capacity;
        this.space = space;
        this.status = status;
    }
}
exports.ValidationUpdateCategory = ValidationUpdateCategory;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ValidationUpdateCategory.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidationUpdateCategory.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ValidationUpdateCategory.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ValidationUpdateCategory.prototype, "capacity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidationUpdateCategory.prototype, "space", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(["Activo", "Inactivo", "Mantenimiento"]),
    __metadata("design:type", String)
], ValidationUpdateCategory.prototype, "status", void 0);
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