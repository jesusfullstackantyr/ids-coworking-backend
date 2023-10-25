"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
require("dotenv/config");
const personRouter_1 = require("./person/infrastructure/personRouter");
const emailRouter_1 = require("./person/infrastructure/services/router/emailRouter");
const userRouter_1 = require("./user/infrastructure/userRouter");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use('/api/v1/person', personRouter_1.personRoutes);
app.use('/api/v1/person/email', emailRouter_1.emailRouter);
app.use('/api/v1/user', userRouter_1.userRouter); // Cambiado a userRouter
app.listen(3000, () => {
    signale.success("Server online in port 3000");
});
