"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const waflesControllerIU_1 = __importDefault(require("../../../controllers/salesControler/waffleCanasta/waflesControllerIU"));
const waflesControllerIC_1 = __importDefault(require("../../../controllers/salesControler/waffleCanasta/waflesControllerIC"));
const waflesControllerN_1 = __importDefault(require("../../../controllers/salesControler/waffleCanasta/waflesControllerN"));
const waflesControllerD_1 = __importDefault(require("../../../controllers/salesControler/waffleCanasta/waflesControllerD"));
class WaffleCanastaSalesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Ingredientes Complementarios
        this.router.post('/IC/', waflesControllerIC_1.default.list);
        this.router.get('/IC/:id', waflesControllerIC_1.default.getOne);
        this.router.post('/IC/laps', waflesControllerIC_1.default.listLaps);
        // Ingredientes Untables
        this.router.post('/IU/', waflesControllerIU_1.default.list);
        this.router.get('/IU/:id', waflesControllerIU_1.default.getOne);
        this.router.post('/IU/laps', waflesControllerIU_1.default.listLaps);
        // Nieves
        this.router.post('/N/', waflesControllerN_1.default.list);
        this.router.get('/N/:id', waflesControllerN_1.default.getOne);
        this.router.post('/N/laps', waflesControllerN_1.default.listLaps);
        // Nieves
        this.router.post('/D/', waflesControllerD_1.default.list);
        this.router.get('/D/:id', waflesControllerD_1.default.getOne);
        this.router.post('/D/laps', waflesControllerD_1.default.listLaps);
    }
}
const waffleCanastaSalesRoutes = new WaffleCanastaSalesRoutes();
exports.default = waffleCanastaSalesRoutes.router;
