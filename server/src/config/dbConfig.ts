import {Sequelize} from "sequelize-typescript";
import {User} from "../models/User";
import {MusicTrack} from "../models/Music";

export const sequelize = new Sequelize({
    dialect: 'mysql',
    username: 'root',
    password: '',
    database: 'mysql@localhost',
    host: 'localhost',
    models: [User, MusicTrack],
});