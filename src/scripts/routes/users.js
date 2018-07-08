import { Router } from "express";
import models from "../db/models/index";
import requireAuth from "../utils/require-auth";

const { User, Pet, PetType } = models;

class UsersRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.router.get('/:userId', UsersRouter.get);
        this.router.put('/:userId', requireAuth, UsersRouter.update);
    }

    static async update(req, res) {
        const { params: { userId }, user, body } = req;

        try {
            const updatedUser = await User.update({
                ...body,
                birthday: new Date(body.birthday),
            }, {
                where: {
                    id: userId,
                },
                attributes: ["id", "firstName", "lastName", "email", "gender", "birthday", "biography", "profilePicture"],
                returning: true,
                limit: 1,
            });

            res.status(200).send({
                success: true,
                user: updatedUser[1][0],
            });

        } catch (error) {
            // console.error(error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong.",
            });
        }
    }

    static async get(req, res) {

        const { params: { userId } } = req;

        try {
            const user = await User.findOne({
                where: {
                    id: userId,
                },
                attributes: ["id", "firstName", "lastName", "email", "gender", "birthday", "biography", "profilePicture"],
                include: [{
                    model: Pet,
                    attributes: ["id", "name", "gender", "story"],
                    include: [{
                        model: PetType,
                        attributes: ["id", "name"],
                    }],
                }],
            });

            res.status(200).send({
                success: true,
                user: user,
            });
        } catch (error) {
            // console.error(error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong while getting user with pets.",
            });
        }

    }
}

export default (new UsersRouter()).router;