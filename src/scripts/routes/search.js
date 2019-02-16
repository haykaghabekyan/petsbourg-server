import { Router } from 'express';

class SearchRouter {
    router = null;

    constructor() {
        this.router = Router();

        this.router.get('/', SearchRouter.get);
    }

    static get(req, res) {

        const { query = '' } = req.query;

        res.send({
            success: true,
            pets: [],
        });
    }

}

export default (new SearchRouter()).router;
