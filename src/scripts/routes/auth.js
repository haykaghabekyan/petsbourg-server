import { Router } from "express";
import * as jwt from "jsonwebtoken";
import Sequelize from "sequelize";

import models from "../db/models/index";

const { User, Pet, PetType } = models;

import JWT_PUBLIC_KEY from "../configs/jwt";

const signToken = data => {
    return jwt.sign({
        ...data
    }, JWT_PUBLIC_KEY, {
        expiresIn: 60 * 60
    });
};

class AuthRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes () {
        this.router.post('/sign-in', AuthRouter.signIn);
        this.router.post('/sign-up', AuthRouter.signUp);
    }

    static async signIn (req, res) {

        const {email, password} = req.body;

        try {
            const user = await User.findOne({
                where: {
                    [Sequelize.Op.or]: [{
                        email: email
                    }, {
                        username: email
                    }]
                },
                include: [{
                    model: Pet,
                    include: [{
                        model: PetType
                    }]
                }],
            });

            if (user.validPassword(password)) {
                res.send({
                    success: true,
                    token: signToken({
                        profile: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            username: user.username,
                            gender: user.gender,
                        },
                        pets: user.Pets ? user.Pets : null,
                    })
                });
            } else {
                res.status(400).send({
                    success: false,
                    errors: {
                        password: "Please check your password."
                    }
                });
            }

        } catch (error) {
            res.status(400).send({
                success: false,
                errors: {
                    email: "User not found. Check your credentials."
                }
            });
        }
    }

    static async signUp (req, res) {
        try {
            const splittedEmail = req.body.email.split("@");

            const userData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                username: splittedEmail[0],
                password: req.body.password,
                gender: req.body.gender,
            };

            const user = await User.create(userData);

            res.send({
                success: true,
                token: signToken({
                    profile: {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username,
                        gender: user.gender,
                    },
                    pets: null,
                })
            });

        } catch (error) {
            let errors = {};
            if (error.errors) {
                error.errors.forEach(error => {
                    errors[error.path] = error.message;
                });
            }

            res.status(404).send({
                success: false,
                errors: errors,
            });
        }
    }
}

export default (new AuthRouter()).router;