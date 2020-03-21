"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var db_1 = require("./config/db");
var transactions_1 = require("./routes/transactions");
dotenv_1.default.config({ path: './src/config/config.env' });
db_1.connectDB();
var app = express_1.default();
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
app.use('/api/v1/transactions', transactions_1.router);
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static('client/build'));
    app.get('*', function (req, res) {
        return res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
var PORT = process.env.PORT || 4000;
var testCallback = function () {
    console.log(("Server running in " + process.env.NODE_ENV + " on port " + PORT).yellow.bold);
};
app.listen(PORT, testCallback);
