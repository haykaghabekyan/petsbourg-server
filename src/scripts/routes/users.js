import { Router } from "express";
import models from "../db/models/index";

const { User, Pet, PetType, PetBreed } = models;

class UsersRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
    }

    static async get(req, res) {

        const { params: { userId } } = req;

        try {
            const user = await User.findOne({
                where: {
                    id: userId,
                },
                attributes: ["id", "firstName", "lastName", "email", "username", "gender"],
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
            console.error(error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong while getting user with pets."
            })
        }

    }

    routes () {
        this.router.get('/:userId', UsersRouter.get);
    }
}

export default (new UsersRouter()).router;