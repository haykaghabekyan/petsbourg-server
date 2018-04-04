import { Router } from "express";
import AuthRouter from "./routes/auth";
import PostsRouter from "./routes/posts";
import UsersRouter from "./routes/users";
import PetsRouter from "./routes/pets";

export default class ApiRouter {
    public router: Router;

    constructor () {
        this.router = Router();
        this.router.use('/auth', AuthRouter);
        this.router.use('/posts', PostsRouter);
        this.router.use('/users', UsersRouter);
        this.router.use('/pets', PetsRouter);

    }
}
