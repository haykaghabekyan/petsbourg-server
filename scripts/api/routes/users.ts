import { Router, Request, Response } from "express";

class UsersRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    getPetsByUserId (req: Request, res: Response) {

        res.send({
            pets: [{
                name: "Jeko",
                petType: "dog"
            }, {
                name: "Chamich",
                petType: "cat"
            }]
        });

    }

    routes (): void {
        this.router.get('/:userId/pets', this.getPetsByUserId);
    }
}

export default (new UsersRouter()).router;