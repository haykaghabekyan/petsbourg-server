import { Router } from "express";
import AuthRouter from "./auth";
import PetsRouter from "./pets";
// import PostsRouter from "./posts";
import UsersRouter from "./users";

export default class ApiRouter {
    router = null;

    constructor () {
        this.router = Router();
        this.router.use('/auth', AuthRouter);
        this.router.use('/pets', PetsRouter);
        // this.router.use('/posts', PostsRouter);
        this.router.use('/users', UsersRouter);
    }
}
