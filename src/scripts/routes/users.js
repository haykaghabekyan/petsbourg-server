import { Router } from "express";
import requireAuth from "../utils/require-auth";
import models from "../db/models/index";

const { User, Pet, PetType } = models;

class UsersRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
    }

    static async getUserWithPets (req, res) {

        const { params: { userId } } = req;

        try {
            const user = await User.findOne({
                where: {
                    id: userId,
                },
                include: [{
                    model: Pet
                }]
            });

            res.send({
                success: true,
                user: user,
            });
        } catch (e) {
            console.log("error", e);

            res.status(400).send({
                success: false,
                msg: "Something went wrong. Please try later."
            })
        }

    }

    static async getUserPets (req, res) {

        const { params: { userId } } = req;

        try {
            const pets = await Pet.findAll({
                where: {
                    userId: userId
                },
                include: [{
                    model: PetType,
                    // as: 'petType'
                }],
            });

            res.send({
                success: true,
                pets
            });

        } catch (error) {
            // console.log("error", error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong.",
            });
        }

    }

    routes () {
        this.router.get('/:userId', UsersRouter.getUserWithPets);
        this.router.get('/:userId/pets', UsersRouter.getUserPets);
    }
}

export default (new UsersRouter()).router;