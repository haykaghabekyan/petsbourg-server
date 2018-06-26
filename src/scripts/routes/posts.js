import { Router } from "express";

class PostsRouter {

    router = null;

    constructor() {
        this.router = Router();
    }
}

export default (new PostsRouter()).router;