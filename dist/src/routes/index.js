"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HelloController_1 = require("../controllers/HelloController");
const router = (0, express_1.Router)();
router.get('/', HelloController_1.getHello);
exports.default = router;
//# sourceMappingURL=index.js.map