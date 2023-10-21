"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const officeRouter_1 = require("./Office/infraestructure/officeRouter");
const categoryRouter_1 = require("./Category/infraestructure/categoryRouter");
const mariaDb_1 = require("./database/mariaDb"); // Asegúrate de importar desde la ubicación correcta
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use('/api/v1/office', officeRouter_1.officeRouter);
app.use('/api/v1/category', categoryRouter_1.categoryRoutes);
// Ejemplo app.use('/leads',leadRouter);
// Inicializa el pool de conexiones y verifica la conexión
(0, mariaDb_1.initPool)().then(() => {
    // Luego, inicia el servidor
    app.listen(3000, () => {
        signale.success("Server online in port 3000");
    });
});
