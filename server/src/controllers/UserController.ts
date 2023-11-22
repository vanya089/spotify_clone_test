import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import {validationResult} from "express-validator";

class UserController {
    public async createNewUSer(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error:  'Fields must not be empty!' });
            }
            const { email, username, password } = req.body;
            const existingUser = await User.findOne({
                where: { email, username },
            });

            if (!existingUser) {
                const hashPassword = bcrypt.hashSync(password, 5);
                const user = new User({
                    email,
                    username,
                    password: hashPassword,
                });

                await user.save();
                return res.status(200).json({ message: 'Registration successful' });
            } else {
                return res.status(400).json({ error: 'The user is already registered!' });
            }
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default new UserController();
