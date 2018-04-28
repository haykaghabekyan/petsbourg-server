import { Router } from "express";

class PostsRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes () {

    }
}

export default (new PostsRouter()).router;