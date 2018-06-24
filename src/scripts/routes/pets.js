import { Router } from "express";
import requireAuth from "../utils/require-auth";
import models from "../db/models/index";
const { Pet, PetType, PetBreed, User } = models;

class PetsRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
    }

    static async get(req, res) {
        const { params: { petId } } = req;

        try {
            const pet = await Pet.findOne({
                where: {
                    id: petId,
                },
                model: Pet,
                attributes: ["id", "userId", "name", "gender", "story", "color", "size", "birthday", "passportId"],
                include: [{
                    model: PetType,
                    attributes: ["id", "name"],
                }, {
                    model: PetBreed,
                    attributes: ["id", "name"],
                }],
            });

            const user = await User.findOne({
                where: {
                    id: pet.userId,
                },
                attributes: ["id", "firstName", "lastName", "email", "username", "gender"],
                include: [{
                    model: Pet,
                    attributes: ["id", "petTypeId", "name", "gender"],
                    include: [{
                        model: PetType,
                        attributes: ["id", "name"],
                    }],
                }],
            });

            res.status(200).send({
                success: true,
                pet: pet,
                user: user,
            });

        } catch (error) {
            // console.log(error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong while getting pet."
            });
        }
    }

    static async getPetTypes(req, res) {
        try {
            const petTypes = await PetType.findAll({
                attributes: ["id", "name"],
                include: [{
                    model: PetBreed,
                    attributes: ["id", "name"]
                }],
            });

            res.status(200).send({
                success: true,
                petTypes: petTypes
            });

        } catch (error) {
            // console.error(error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong while getting pet types."
            });
        }
    }

    static async update(req ,res) {

        const { petId } = req.params;

        const {
            name,
            type,
            breed,
            passportId,
            gender,
            story = "",
            color = "",
            birthday,
            size = "",
        } = req.body;

        try {

            const pet = Pet.update({
                name: name,
                type: type,
                breed: breed,
                gender: gender,
                story: story,
                passportId: passportId,
                color: color,
                size: size,
                birthday: birthday ? new Date(birthday) : "",
            }, {
                where: {
                    id: petId,
                },
            });

            res.send({
                petId: petId,
                pet: req.body,
            });

        } catch(error) {
            console.log("error", error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong, please try later.",
            });
        }
    }

    static async create(req, res) {
        const { user, body } = req;

        try {
            const createdPet = await Pet.create({
                userId: user.id,
                name: body.name,
                petTypeId: body.type,
                petBreedId: body.breed,
                gender: body.gender,
            });

            const pet = await Pet.findOne({
                where: {
                    id: createdPet.id,
                },
                model: Pet,
                attributes: ["id", "userId", "name", "gender"],
                include: [{
                    model: PetType,
                    attributes: ["id", "name"],
                }, {
                    model: PetBreed,
                    attributes: ["id", "name"],
                }],
            });

            res.status(200).send({
                success: true,
                pet: pet,
            });
        } catch (error) {
            // console.log("error", error);

            res.status(400).send({
                success: false,
                msg: "Something went wrong, please try later.",
            });
        }
    }

    routes () {
        this.router.get('/pet-types', PetsRouter.getPetTypes);
        this.router.get('/:petId', PetsRouter.get);
        this.router.put('/:petId', PetsRouter.update);
        this.router.post('/', requireAuth, PetsRouter.create);
    }
}

export default (new PetsRouter()).router;
