require("dotenv").config();
import {Sequelize} from "sequelize-typescript";
import {User} from "../models/User";
import {MusicTrack} from "../models/Music";

export const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    models: [User, MusicTrack],
});