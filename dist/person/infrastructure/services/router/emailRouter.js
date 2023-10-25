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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRouter = void 0;
const express_1 = __importDefault(require("express"));
const EmailApplicationService_1 = require("../../../application/EmailApplicationService");
const NodemailerEmailService_1 = require("../NodemailerEmailService");
const emailService = new NodemailerEmailService_1.NodemailerEmailService();
const emailAppService = new EmailApplicationService_1.EmailApplicationService(emailService);
const emailRouter = express_1.default.Router();
exports.emailRouter = emailRouter;
emailRouter.post('/send', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { to, subject, text } = req.body;
        if (!to || !subject || !text) {
            return res.status(400).json({ error: 'Los campos "to," "subject," y "text" son obligatorios.' });
        }
        yield emailAppService.sendEmail(to, subject, text);
        res.status(200).send('Email sent successfully');
    }
    catch (error) {
        res.status(500).send('Error sending email');
    }
}));
