import { Router } from "express";
import AuthRouter from "./auth";
// import PostsRouter from "./posts";
// import UsersRouter from "./users";
// import PetsRouter from "./pets";

export default class ApiRouter {
    router = null;

    constructor () {
        this.router = Router();
        this.router.use('/auth', AuthRouter);
        // this.router.use('/posts', PostsRouter);
        // this.router.use('/users', UsersRouter);
        // this.router.use('/pets', PetsRouter);
    }
}
