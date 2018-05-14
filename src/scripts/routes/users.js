import { Router } from "express";
import requireAuth from "../utils/require-auth";
import models from "../db/models/index";

const { Pet, PetType } = models;

class UsersRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
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

            console.log("pets", pets);

            res.send({
                success: true,
                userPets: pets,
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
        this.router.get('/:userId/pets', UsersRouter.getUserPets);
    }
}

export default (new UsersRouter()).router;