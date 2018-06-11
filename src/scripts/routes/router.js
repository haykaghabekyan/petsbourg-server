import { Router } from "express";
import AuthRouter from "./auth";
import PetsRouter from "./pets";
import PetTypesRouter from "./pet-types";
import UsersRouter from "./users";

class ApiRouter {
    router = null;

    constructor () {
        this.router = Router();
        this.router.use('/auth', AuthRouter);
        this.router.use('/pets', PetsRouter);
        this.router.use('/pet-types', PetTypesRouter);
        this.router.use('/users', UsersRouter);
    }
}

export default ApiRouter;
