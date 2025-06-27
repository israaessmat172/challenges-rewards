"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("./config/typeorm");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
typeorm_1.dataSource
    .initialize()
    .then(() => {
    console.log("📦 Database connected");
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error("❌ Database connection error:", error);
});
app.get("/", (req, res) => {
    res.send("Challenge platform is running!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
