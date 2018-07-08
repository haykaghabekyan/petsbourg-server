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
        this.router.post('/sign-in', AuthRouter.signIn);
        this.router.post('/sign-up', AuthRouter.signUp);
    }

    static async signIn (req, res) {

        const { email, password } = req.body;

        try {
            const user = await User.findOne({
                where: {
                    [Sequelize.Op.or]: [{
                        email: email,
                    }],
                },
                include: [{
                    model: Pet,
                    include: [{
                        model: PetType,
                    }],
                    attributes: ["id", "name"],
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
                            gender: user.gender,
                            birthday: user.birthday,
                            biography: user.biography,
                            profilePicture: user.profilePicture,
                            Pets: user.Pets,
                        },
                    })
                });
            } else {
                res.status(400).send({
                    success: false,
                    errors: {
                        password: "Please check your password.",
                    },
                });
            }

        } catch (error) {
            res.status(400).send({
                success: false,
                errors: {
                    email: "User not found. Check your credentials.",
                },
            });
        }
    }

    static async signUp (req, res) {
        const { body } = req;
        try {
            const user = await User.create(body);

            res.send({
                success: true,
                token: signToken({
                    profile: {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        gender: user.gender,
                        birthday: user.birthday,
                        biography: user.biography,
                        profilePicture: user.profilePicture,
                        Pets: [],
                    },
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