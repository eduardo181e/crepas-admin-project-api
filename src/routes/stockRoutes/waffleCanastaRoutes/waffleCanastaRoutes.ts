import { Router } from "express";
import waffleCanastaIUEController from "../../../controllers/stockPrdoucts/waffleCanasta/waflesControllerIU";
import waffleCanastaICEController from "../../../controllers/stockPrdoucts/waffleCanasta/waflesControllerIC";
import waffleCanastaNEController from "../../../controllers/stockPrdoucts/waffleCanasta/waflesControllerN";
import waffleCanastaDEController from "../../../controllers/stockPrdoucts/waffleCanasta/waflesControllerD";
class WaffleCanastaStockRoutes {
    public router: Router = Router();
    
    constructor() {
        this.config();
    }
    
    config(): void {
        // Ingredientes Untables
        this.router.post("/IU/", waffleCanastaIUEController.list);
        this.router.post("/IU/:id", waffleCanastaIUEController.getOne);
        this.router.put("/IU/:id", waffleCanastaIUEController.update);
        // Ingredientes Complementarios
        this.router.post("/IC/", waffleCanastaICEController.list);
        this.router.post("/IC/:id", waffleCanastaICEController.getOne);
        this.router.put("/IC/:id", waffleCanastaICEController.update);
        // Nieves
        this.router.post("/N/", waffleCanastaNEController.list);
        this.router.post("/N/:id", waffleCanastaNEController.getOne);
        this.router.put("/N/:id", waffleCanastaNEController.update);
        // Decoraciones
        this.router.post("/D/", waffleCanastaDEController.list);
        this.router.post("/D/:id", waffleCanastaDEController.getOne);
        this.router.put("/D/:id", waffleCanastaDEController.update);
    }
}

const waffleCanastaStockRoutes = new WaffleCanastaStockRoutes();
export default waffleCanastaStockRoutes.router;