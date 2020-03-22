"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var transactions_1 = require("../controllers/transactions");
exports.router = express_1.default.Router();
exports.router
    .route('/')
    .get(transactions_1.getTransactions)
    .post(transactions_1.addTransaction);
exports.router.route('/:id').delete(transactions_1.deleteTransaction);
