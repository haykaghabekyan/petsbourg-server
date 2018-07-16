import { Router } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { JWT_PUBLIC_KEY } from "../configs/jwt";

const signToken = data => {
    return jwt.sign({
        ...data
    }, JWT_PUBLIC_KEY, {
        expiresIn: 60 * 60,
    });
};

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
            }).populate({
                path: "pets",
                select: "_id name",
                populate: [{
                    path: "type",
                    select: "_id name",
                }, {
                    path: "breed",
                    select: "_id name",
                }]
            });

            if (user && !user.isValidPassword(password, user.passwordHash)) {
                res.status(400).send({
                    success: false,
                    errors: {
                        password: "Please check your password.",
                    },
                });
            }

            res.send({
                success: true,
                user: {
                    profile: {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        gender: user.gender,
                        pets: user.pets,
                    },
                },
                token: signToken({
                    user: {
                        _id: user._id,
                    },
                })
            });

        } catch (error) {
            console.error(error);

            res.status(400).send({
                success: false,
                errors: {
                    email: "User not found. Check your credentials.",
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
                    profile: {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        gender: user.gender,
                        pets: [],
                    },
                },
                token: signToken({
                    user: {
                        _id: user._id,
                    },
                }),
            });

        } catch (error) {
            console.error("error while creating user", error);

            res.status(404).send({
                success: false,
                errors: {},
            });
        }
    }
}

export default (new AuthRouter()).router;