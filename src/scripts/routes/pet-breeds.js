import { Router } from 'express';
import { PetType } from '../models/pet-type';
import { PetBreed } from '../models/pet-breed';
import { bird } from '../data/pet-breeds/bird';
import { cat } from '../data/pet-breeds/cat';
import { dog } from '../data/pet-breeds/dog';
import { fish } from '../data/pet-breeds/fish';
import { hamster } from '../data/pet-breeds/hamster';
import { rabbit } from '../data/pet-breeds/rabbit';

const petTypes = {
    bird,
    cat,
    dog,
    fish,
    hamster,
    rabbit,
};

class PetBreedsRouter {
    router = null;

    constructor() {
        this.router = Router();
        this.router.get('/', PetBreedsRouter.get);
        this.router.post('/:petTypeParam', PetBreedsRouter.create);
    }

    static async get(req, res) { }

    static async create(req, res) {
        const { params: { petTypeParam } } = req;

        const petType = petTypes[petTypeParam];
        const petBreeds = [];

        try {
            const pT = await PetType.findOne({
                name: petType.petType,
            });

            petType.breeds.forEach(breed => {
                petBreeds.push({
                    name: breed.name,
                    petType: pT._id,
                });
            });

            try {
                const savedBreeds = await PetBreed.create(petBreeds);

                savedBreeds.forEach(breed => {
                    pT.breeds.push(breed);
                });

                await pT.save();

                res.status(200).json({
                    success: true,
                });
            } catch(error) {
                res.status(500).json({});
            }

        } catch(error) {
            res.status(500).json({});
        }

    }

}

export default (new PetBreedsRouter()).router;
