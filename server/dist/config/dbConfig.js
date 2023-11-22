"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
require("dotenv").config();
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../models/User");
const Music_1 = require("../models/Music");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'myappuser',
    password: 'mypassword',
    database: 'myappdb',
    models: [User_1.User, Music_1.MusicTrack],
    logging: true,
});
