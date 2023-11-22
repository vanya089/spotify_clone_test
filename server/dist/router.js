"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
router.post("/registration", [
    (0, express_validator_1.check)("email", "Email must not be empty").notEmpty(),
    (0, express_validator_1.check)("username", "Username must not be empty").notEmpty(),
    (0, express_validator_1.check)("password", "Password must not be less than 6 symbols").isLength({ min: 6, max: 20 })
], UserController_1.default.createNewUSer);
module.exports = router;
