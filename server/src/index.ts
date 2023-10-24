import {Sequelize} from "sequelize-typescript";

require("dotenv").config();
import express from "express";
import cors from "cors";
import {User} from "./models/User";


const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

const sequelize = new Sequelize({
    dialect: 'mysql',
    username: 'root',
    password: '',
    database: 'mysql@localhost',
    host: 'localhost',
    models: [User], // Передайте здесь все ваши модели
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
        } catch (e) {
            console.log(e);
        }
    });

async function startApp() {

}

startApp();