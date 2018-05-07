import { Router } from "express";
import * as jwt from "jsonwebtoken";
import Sequelize from "sequelize";

import { User } from "../db/models/index";

import JWT_PUBLIC_KEY from "../configs/jwt";

const signToken = user => {
    return jwt.sign({
        user: user
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
                }
            });

            if (user.validPassword(password)) {
                res.send({
                    success: true,
                    token: signToken({
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username,
                        gender: user.gender,
                    })
                });
            } else {
                res.status(400).send({
                    success: false,
                    message: "User not found. Check your credentials.",
                    errors: {
                        password: "Please check your password."
                    }
                });
            }


        } catch (error) {
            res.status(400).send({
                success: false,
                message: "User not found. Check your credentials.",
                errors: {
                    email: "User not found. Check your credentials."
                }
            });
        }
    }

    static async signUp (req, res) {

        const splittedEmail = req.body.email.split("@");

        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: splittedEmail[0],
            password: req.body.password,
            gender: req.body.gender,
        };

        try {
            const userUser = await User.create(userData);

            res.send({
                success: true,
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