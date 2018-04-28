import { Router, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import User from "../models/user";
import Pet from "../models/pet";

import JWT_PUBLIC_KEY from "../../configs/jwt";

const signToken = (user): jwt => {
    return jwt.sign({
        user: user
    }, JWT_PUBLIC_KEY, {
        expiresIn: 60 * 60
    });
};

class AuthRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes (): void {
        this.router.post('/sign-in', AuthRouter.signIn);
        this.router.post('/sign-up', AuthRouter.signUp);
    }

    static async signIn (req: Request, res: Response): Promise<Response> {
        const user: any = await User.signIn(req.body);

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

    static async signUp (req: Request, res: Response): Promise<Response> {
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