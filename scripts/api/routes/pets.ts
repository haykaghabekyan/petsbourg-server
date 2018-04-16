import { Router, Request, Response } from "express";
import Pet from "../models/pet";
import requireAuth from "../utils/require-auth";

class PetsRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    async getPetTypes (req: Request, res: Response): Promise<any> {
        const petTypes = await Pet.getPetTypes();

        res.send({
            success: true,
            petTypes: petTypes
        });
    }

    async getPetBreeds (req: Request, res: Response): Promise<any> {

        const petBreeds = await Pet.getPetBreeds();

        res.send(petBreeds);
    }

    async getUserPets(req: Request, res: Response): Promise<any> {

        res.send({

        });

    }

    async create (req: Request, res: Response): Promise<void> {
        const { user, body } = req as any;

        const data = {
            uid: user.uid,
            ...body
        };

        let pet = null;

        try {
            pet = await Pet.addPet(data);
        } catch (error) {
            console.log(error);
        }

        res.send({
            success: true,
            pet: pet,
        });
    }

    routes (): void {
        this.router.post('/', requireAuth, this.create);
        this.router.get('/', requireAuth, this.getUserPets);
        this.router.get('/pet-types', this.getPetTypes);
        this.router.get('/pet-breeds', this.getPetBreeds);
    }
}

export default (new PetsRouter()).router;