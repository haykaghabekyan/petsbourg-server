import { Router } from "express";
import * as jwt from "jsonwebtoken";

import User from "../models-neo4j/user";
import Pet from "../models-neo4j/pet";

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
        const user = await User.signIn(req.body);

        if (user) {
            const pets = await Pet.getUserPets(user.uid);

            res.status(201).json({
                success: true,
                message: 'Signed in successfully.',
                token: signToken(user),
                pets: pets,
            });
        } else {
            return res.status(400).send({
                success: false,
                message: 'User not found. Check your credentials.',
            });
        }
    }

    static async signUp (req, res) {
        if (await User.userExists(req.body.email)) {
            return res.status(400).send({
                success: false,
                message: 'Email already in use.',
            });
        }

        const user = await User.signUp(req.body);

        if (user) {
            res.status(201).json({
                success: true,
                message: 'Congrats! You have signed up successfully.',
                token: signToken(user),
            });
        } else {
            return res.status(400).send({
                success: false,
                message: 'Something went wrong. Please try later.',
            });
        }
    }
}

export default (new AuthRouter()).router;