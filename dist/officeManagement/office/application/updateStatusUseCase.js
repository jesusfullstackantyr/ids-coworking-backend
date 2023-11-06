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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatus = void 0;
class UpdateStatus {
    constructor(officeRepository) {
        this.officeRepository = officeRepository;
    }
    run(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const get = yield this.officeRepository.updateStatus(id, status);
                return get;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.UpdateStatus = UpdateStatus;
