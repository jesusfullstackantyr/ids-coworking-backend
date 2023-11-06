"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const signale_1 = require("signale");
const officeRouter_1 = require("./officeManagement/office/infraestructure/routes/officeRouter");
const categoryRouter_1 = require("./officeManagement/category/infraestructure/routes/categoryRouter");
const mariaDb_1 = require("./database/mariaDb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use('/api/v1/office', officeRouter_1.officeRouter);
app.use('/api/v1/category', categoryRouter_1.categoryRoutes);
const PORT = process.env.PORT;
(0, mariaDb_1.initPool)().then(() => {
    app.listen(PORT, () => {
        signale.success(`Server online in port ${PORT}`);
    });
});
// Ruta principal para mostrar el puerto actual
app.get('/', (req, res) => {
    res.send(`Esta solicitud se está manejando en el puerto ${PORT}`);
});
