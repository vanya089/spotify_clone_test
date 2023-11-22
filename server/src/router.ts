import express from "express";
import UserController from "./controllers/UserController";
import {check} from "express-validator";


const router = express.Router();

router.post(
    "/registration",
    [
        check("email", "Email must not be empty").notEmpty(),
        check("username", "Username must not be empty").notEmpty(),
        check("password", "Password must not be less than 6 symbols").isLength({min: 6, max: 20})
    ],UserController.createNewUSer
);


export = router;

