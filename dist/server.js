"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const ScreenerRoutes_1 = __importDefault(require("./routes/ScreenerRoutes"));
const ScoreRoutes_1 = __importDefault(require("./routes/ScoreRoutes"));
dotenv_1.default.config({ path: __dirname + '/.env' });
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/screener', ScreenerRoutes_1.default);
app.use('/score', ScoreRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map