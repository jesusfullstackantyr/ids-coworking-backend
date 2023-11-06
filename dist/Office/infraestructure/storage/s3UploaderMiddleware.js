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
const multer_1 = __importDefault(require("multer"));
const s3Storage_1 = require("./s3Storage");
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
const s3UploaderMiddleware = (req, res, next) => {
    const uploader = upload.single('image'); // 'image' es el nombre del campo en el formulario.
    uploader(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            return res.status(400).send({ message: "Error uploading file." });
        }
        // Si no hay archivo, continúa.
        if (!req.file) {
            return next();
        }
        // Sube el archivo a S3.
        try {
            const imageUrl = yield (0, s3Storage_1.uploadToS3)(req.file.buffer, req.file.originalname, req.file.mimetype);
            req.body.image_url = imageUrl; // Almacena la URL en el body para su uso posterior.
            next();
        }
        catch (e) {
            res.status(500).send({ message: "Error uploading to S3." });
        }
    }));
};
exports.default = s3UploaderMiddleware;