import { Router } from "express";
import requireAuth from "../utils/require-auth";
import models from "../db/models/index";
const { PetType, PetBreed } = models;

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
            console.log(error);
            res.send({
                success: false,
                error: error
            });
        }
    }

    // static async getPetBreeds (req, res) {
    //
    //     const petBreeds = await PetType.getPetBreeds();
    //
    //     res.send(petBreeds);
    // }

    // static async getUserPets(req, res) {
    //
    //     const { user } = req;
    //
    //     const pets = await Pet.getUserPets(user.uid);
    //
    //     res.send(pets);
    // }

    // static async create (req, res) {
    //     const { user, body } = req;
    //
    //     const data = {
    //         user,
    //         pet: {
    //             ...body
    //         },
    //     };
    //
    //     let pet = null;
    //
    //     try {
    //         pet = await Pet.addPet(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //
    //     res.send({
    //         success: true,
    //         pet: pet,
    //     });
    // }

    routes () {
        // this.router.post('/', requireAuth, PetsRouter.create);
        // this.router.get('/', requireAuth, PetsRouter.getUserPets);
        this.router.get('/pet-types', PetsRouter.getPetTypes);
        // this.router.get('/pet-breeds', PetsRouter.getPetBreeds);
    }
}

export default (new PetsRouter()).router;