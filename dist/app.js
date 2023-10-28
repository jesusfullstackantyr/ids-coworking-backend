"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const signale_1 = require("signale");
const officeRouter_1 = require("./Office/infraestructure/officeRouter");
const categoryRouter_1 = require("./Category/infraestructure/categoryRouter");
const mariaDb_1 = require("./database/mariaDb");
const paymentRouter_1 = require("./payments/infraestrucuture/routers/paymentRouter");
const paymentMethodRouter_1 = require("./paymentMethod/infraestructure/routes/paymentMethodRouter");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use('/api/v1//Payment', paymentRouter_1.paymentRouter);
app.use('/api/v1/paymentsMethod', paymentMethodRouter_1.paymentsRouter);
app.use('/api/v1/office', officeRouter_1.officeRouter);
app.use('/api/v1/category', categoryRouter_1.categoryRoutes);
(0, mariaDb_1.initPool)().then(() => {
    app.listen(3000, () => {
        signale.success("Server online in port 3000");
    });
});
