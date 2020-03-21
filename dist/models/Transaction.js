"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var TransactionSchema = new mongoose_1.default.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add a description'],
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
var TransactionModel = mongoose_1.default.model('Transaction', TransactionSchema);
exports.default = TransactionModel;
