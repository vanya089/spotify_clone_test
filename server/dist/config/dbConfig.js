"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
require("dotenv").config();
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../models/User");
const Music_1 = require("../models/Music");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    models: [User_1.User, Music_1.MusicTrack],
});
