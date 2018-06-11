import { Router } from "express";
import models from "../db/models/index";
const { PetType, PetBreed } = models;

class PetsRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
    }

    static async get(req, res) {
        try {
            const petTypes = await PetType.findAll({
                attributes: ["id", "name"],
                include: [{
                    model: PetBreed,
                    attributes: ["id", "name"]
                }],
            });

            res.send({
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

    static async create(req, res) {

    }

    routes () {
        this.router.get('/', PetsRouter.get);
    }
}

export default (new PetsRouter()).router;
