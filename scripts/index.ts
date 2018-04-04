import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";
import ApiRouter from "./api/router";

class Server {
    public app: express.Application;

    constructor () {
        this.app = express();
        this.config();
        this.routes();
    }

    public config () {
        // Log requests to console
        this.app.use(morgan('dev'));

        // Use body-parser to get POST requests for API use
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    public routes (): void {
        const apiRouter: ApiRouter = new ApiRouter();

        const corsOptions = {
            // origin: 'http://localhost:8081',
            // optionsSuccessStatus: 200,
        };

        this.app.use('/api', cors(corsOptions), apiRouter.router);
    }
}

const port: Number = Number(process.env.PORT) || 8080;

const server = new Server();

// START THE SERVER
server.app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

server.app.use('error', onError);

function onError(error: NodeJS.ErrnoException): void {
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
