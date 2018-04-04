import { Router, Request, Response } from "express";

class PostsRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    getPost (req: Request, res: Response) {

        return res.json({
            posts: [{
                title: "Post name"
            }, {
                title: "fuck sss"
            }]
        });

    }

    createPost (req: Request, res: Response) {

    }

    routes (): void {
        this.router.get('/', this.getPost);
        this.router.post('/', this.createPost);
    }
}

export default (new PostsRouter()).router;