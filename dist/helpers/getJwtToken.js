"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getJwtToken = (userId) => {
    return jsonwebtoken_1.default.sign(userId, `${process.env.JWT_SECRET}`, { expiresIn: "30d" });
};
exports.getJwtToken = getJwtToken;
