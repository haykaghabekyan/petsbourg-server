import "babel-polyfill";

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import ApiRouter from "./routes/router";

class Server {
    port = null;
    app = null;

    constructor (port) {
        this.port = port;
        this.app = express();
        this.config();
        this.routes();
    }

    config () {
        // Log requests to console
        this.app.use(morgan('dev'));

        // Use body-parser to get POST requests for API use
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.app.use('error', Server.onError);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }

    routes () {
        const apiRouter = new ApiRouter();

        const corsOptions = {
            // origin: 'http://localhost:8081',
            // optionsSuccessStatus: 200,
        };

        this.app.use('/api', cors(corsOptions), apiRouter.router);
    }

    static onError(error) {
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
        switch(error.code) {
            case "EACCES":
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}

const port = Number(process.env.PORT) || 3000;

const server = new Server(port);
server.start();
