import { Router } from "express";
import mongoose from "mongoose";

import { PetType } from "../models/pet-type";

import { bird } from "../data/pet-breeds/bird";
import { cat } from "../data/pet-breeds/cat";
import { dog } from "../data/pet-breeds/dog";
import { fish } from "../data/pet-breeds/fish";
import { hamster } from "../data/pet-breeds/hamster";
import { rabbit } from "../data/pet-breeds/rabbit";

const petTypes = [bird, cat, dog, fish, hamster, rabbit];

class PetTypesRouter {
    router = null;

    constructor() {
        this.router = Router();
        this.router.get("/", PetTypesRouter.get);
        this.router.post("/", PetTypesRouter.create);
    }

    static async get(req, res) {
        try {
            const petTypes = await PetType.find({})
                .populate({
                    path: "breeds",
                    select: "_id name",
                });

            res.status(200).json({
                success: true,
                petTypes: petTypes,
            });
        } catch(error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message: "error",
            });
        }
    }

    static async create(req, res) {
        const types = [];
        petTypes.forEach(petType => {
            types.push({
                _id: new mongoose.Types.ObjectId(),
                name: petType.petType,
            });
        });
        try {
            const pTs = await PetType.create(types);
            res.status(200).send(pTs);
        } catch(error) {
            console.error(error);
            res.status(500).json({
                success: false,
            });
        }
    }

}

export default (new PetTypesRouter()).router;
