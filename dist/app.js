"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const dotenv_1 = __importDefault(require("dotenv"));
const personRouter_1 = require("./accessManagement/person/infrastructure/routes/personRouter");
const emailRouter_1 = require("./accessManagement/person/infrastructure/services/emailRouter");
dotenv_1.default.config();
const appid = process.env.APPID;
var PORT = process.env.SERVER_PORT;
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.get("/", (req, res) => res.send(`appid: ${appid} home page: says hello!`));
app.use('/api/v1/person', personRouter_1.personRoutes);
app.use('/api/v1/person/email', emailRouter_1.emailRouter);
app.listen(PORT, () => {
    signale.success(`Server run in port ${PORT}`);
});
