import { Router } from "express";

class SearchRouter {
    router = null;

    constructor() {
        this.router = Router();

        this.router.get("/:searchBy?", SearchRouter.get);
    }

    static get(req, res) {

        const { searchBy = "pets" } = req.params;

        console.log(searchBy);

        res.send("qaq");

    }

}

export default (new SearchRouter()).router;
