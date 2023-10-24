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
const sequelize_typescript_1 = require("sequelize-typescript");
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const User_1 = require("./models/User");
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    username: 'your-username',
    password: 'your-password',
    database: 'your-database-name',
    host: 'your-hostname',
    models: [User_1.User], // Передайте здесь все ваши модели
});
sequelize.authenticate()
    .then(() => {
    console.log('Подключение к базе данных успешно установлено.');
})
    .catch((err) => {
    console.error('Ошибка подключения к базе данных:', err);
});
sequelize.sync()
    .then(() => {
    console.log('Модели синхронизированы с базой данных.');
    try {
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    }
    catch (e) {
        console.log(e);
    }
});
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
startApp();
