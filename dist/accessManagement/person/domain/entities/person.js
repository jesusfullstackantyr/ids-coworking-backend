"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const class_validator_1 = require("class-validator");
class Person {
    constructor(name, lastname, email, phone, occupation, id_address, id_user, status) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.occupation = occupation;
        this.id_address = id_address;
        this.id_user = id_user;
        this.status = status;
    }
}
exports.Person = Person;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ groups: ['update'] }),
    (0, class_validator_1.IsString)({ groups: ['update'] }),
    (0, class_validator_1.IsNotEmpty)({ groups: ['update'] })
], Person.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ groups: ['update'] }),
    (0, class_validator_1.IsString)({ groups: ['update'] }),
    (0, class_validator_1.IsNotEmpty)({ groups: ['update'] })
], Person.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({ require_tld: false }),
    (0, class_validator_1.IsOptional)({ groups: ['update'] }) // Opcional al actualizar
], Person.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ groups: ['update'] }),
    (0, class_validator_1.IsString)({ groups: ['update'] }),
    (0, class_validator_1.IsOptional)({ groups: ['update'] }) // Opcional al actualizar
], Person.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)({ groups: ['update'] }) // Opcional al actualizar
], Person.prototype, "occupation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)({ groups: ['update'] }) // Opcional al actualizar
], Person.prototype, "id_address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)({ groups: ['update'] }) // Opcional al actualizar
], Person.prototype, "id_user", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['in process', 'active', 'inactive']),
    (0, class_validator_1.IsOptional)({ groups: ['update'] }) // Opcional al actualizar
], Person.prototype, "status", void 0);
