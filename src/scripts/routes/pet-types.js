import mongoose from 'mongoose';
import { Router } from 'express';
import { PetType } from '../models/pet-type';
import { PetBreed } from '../models/pet-breed';
import { bird } from '../data/pet-breeds/bird';
import { cat } from '../data/pet-breeds/cat';
import { dog } from '../data/pet-breeds/dog';
import { fish } from '../data/pet-breeds/fish';
import { hamster } from '../data/pet-breeds/hamster';
import { rabbit } from '../data/pet-breeds/rabbit';

const petTypes = [bird, cat, dog, fish, hamster, rabbit];

class PetTypesRouter {
    router = null;

    constructor() {
        this.router = Router();

        this.router.get('/:petType/breeds', PetTypesRouter.getBreeds);
        this.router.get('/', PetTypesRouter.get);
        this.router.post('/', PetTypesRouter.create);
    }

    static async get(req, res) {
        try {
            const petTypes = await PetType.find()
                .select('_id name');

            res.status(200).send({
                success: true,
                petTypes,
            });
        } catch(error) {
            res.status(500).send({
                success: false,
                errors: {
                    message: 'Something went wrong',
                },
            });
        }
    }

    static async getBreeds(req, res) {
        const { petType } = req.params;
        try {
            const petBreeds = await PetBreed.find({ petType })
                .select('_id name');

            res.status(200).send({
                success: true,
                petBreeds,
            });
        } catch(error) {
            res.status(500).send({
                success: false,
                errors: {
                    message: 'Something went wrong',
                },
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
            res.status(500).json({
                success: false,
            });
        }
    }

}

export default (new PetTypesRouter()).router;
