import { Router, Request, Response } from "express";

class UsersRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes () {

    }
}

export default (new UsersRouter()).router;