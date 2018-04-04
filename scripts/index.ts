import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";
import ApiRouter from "./api/router";

class Server {
    readonly port: Number;
    private app: express.Application;

    constructor (port: Number) {
        this.port = port;
        this.app = express();
        this.config();
        this.routes();
    }

    private config () {
        // Log requests to console
        this.app.use(morgan('dev'));

        // Use body-parser to get POST requests for API use
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.app.use('error', Server.onError);

        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }

    private routes (): void {
        const apiRouter: ApiRouter = new ApiRouter();

        const corsOptions = {
            // origin: 'http://localhost:8081',
            // optionsSuccessStatus: 200,
        };

        this.app.use('/api', cors(corsOptions), apiRouter.router);
    }

    static onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
        switch(error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}

const port: Number = Number(process.env.PORT) || 3000;

new Server(port);
