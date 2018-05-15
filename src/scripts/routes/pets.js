import { Router } from "express";
import requireAuth from "../utils/require-auth";
import models from "../db/models/index";
const { Pet, PetType, PetBreed } = models;

class PetsRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
    }

    static async getPetTypes (req, res) {

        try {
            const petTypes = await PetType.findAll({
                include: [{
                    model: PetBreed,
                    // as: 'Breed'
                }],
            });

            res.send({
                success: true,
                petTypes: petTypes
            });

        } catch (error) {
            console.log("error", error);
            res.status(400).send({
                success: false,
                error: error
            });
        }
    }

    static async create (req, res) {
        const { user, body } = req;

        try {
            const pet = await Pet.create({
                userId: user.id,
                name: body.name,
                petTypeId: body.type,
                petBreedId: body.breed,
                gender: body.gender,
            });

            res.send({
                success: true,
                pet: pet,
            });
        } catch (error) {
            console.log("error", error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong, please try later.",
            });
        }
    }

    routes () {
        this.router.post('/', requireAuth, PetsRouter.create);
        this.router.get('/pet-types', PetsRouter.getPetTypes);
    }
}

export default (new PetsRouter()).router;