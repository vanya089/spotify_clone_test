require("dotenv").config();
import express from "express";
import cors from "cors";
import {sequelize} from "./config/dbConfig";
import router = require("./router");

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", router)


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
    });

async function startApp() {
    try {
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();