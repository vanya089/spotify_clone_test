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
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("../models/User");
const express_validator_1 = require("express-validator");
class UserController {
    createNewUSer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ error: 'Fields must not be empty!' });
                }
                const { email, username, password } = req.body;
                const existingUser = yield User_1.User.findOne({ where: { $or: [{ email }, { username }] } });
                if (!existingUser) {
                    const hashPassword = bcrypt_1.default.hashSync(password, 5);
                    const user = new User_1.User({
                        email,
                        username,
                        password: hashPassword,
                    });
                    yield user.save();
                    return res.status(200).json({ message: 'Registration successful' });
                }
                else {
                    return res.status(400).json({ error: 'The user is already registered!' });
                }
            }
            catch (e) {
                console.error(e);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.default = new UserController();
