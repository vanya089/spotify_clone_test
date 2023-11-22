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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = require("./config/dbConfig");
const router = require("./router");
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use("/api", router);
dbConfig_1.sequelize.authenticate()
    .then(() => {
    console.log('Подключение к базе данных успешно установлено.');
})
    .catch((err) => {
    console.error('Ошибка подключения к базе данных:', err);
});
dbConfig_1.sequelize.sync()
    .then(() => {
    console.log('Модели синхронизированы с базой данных.');
});
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
        }
        catch (e) {
            console.log(e);
        }
    });
}
startApp();
