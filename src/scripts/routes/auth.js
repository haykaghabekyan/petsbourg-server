import { Router } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { JWT_PUBLIC_KEY } from '../configs/jwt';

const signToken = data => jwt.sign(data, JWT_PUBLIC_KEY, { expiresIn: 60 * 60 });

class AuthRouter {
    router = null;

    constructor() {
        this.router = Router();
        this.router.post('/sign-in', AuthRouter.signIn);
        this.router.post('/sign-up', AuthRouter.signUp);
    }

    static async signIn(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({
                email: email,
            });

            if (user && !user.isValidPassword(password, user.passwordHash)) {
                return res.status(400).send({
                    success: false,
                    errors: {
                        message: 'User not found. Check your credentials.',
                    },
                });
            }

            res.send({
                success: true,
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    gender: user.gender,
                    biography: user.biography,
                    picture: user.picture,
                },
                token: signToken({
                    user: {
                        id: user._id,
                    },
                })
            });

        } catch (error) {
            res.status(400).send({
                success: false,
                errors: {
                    message: 'User not found. Check your credentials.',
                },
            });
        }
    }

    static async signUp(req, res) {
        try {
            const user = await User.create({
                _id: new mongoose.Types.ObjectId(),
                ...req.body,
            });

            res.send({
                success: true,
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    gender: user.gender,
                    biography: null,
                },
                token: signToken({
                    user: {
                        id: user._id,
                    },
                }),
            });

        } catch (error) {
            res.status(404).send({
                success: false,
                errors: {
                    message: 'User with this email address already exists.',
                },
            });
        }
    }
}

export default (new AuthRouter()).router;