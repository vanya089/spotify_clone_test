require("dotenv").config();
import {Sequelize} from "sequelize-typescript";
import {User} from "../models/User";
import {MusicTrack} from "../models/Music";

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'myappuser',
    password: 'mypassword',
    database: 'myappdb',
    models: [User, MusicTrack],
});