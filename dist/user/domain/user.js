"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(email, password, verified, idRole) {
        this.email = email;
        this.password = password;
        this.verified = verified;
        this.idRole = idRole;
    }
}
exports.User = User;
