import 'babel-polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRouter from './routes/auth';
import PetsRouter from './routes/pets';
import PetTypesRouter from './routes/pet-types';
import PetBreedsRouter from './routes/pet-breeds';
import UsersRouter from './routes/users';
import SearchRouter from './routes/search';

dotenv.config();

class Server {
  app = null;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    const mongoUrl = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`;
    console.log('mongoUrl:', mongoUrl);
    const mongooseConfigs = {
      useNewUrlParser: true,
    };
    const connection = mongoose.connect(url, mongooseConfigs);
    connection
      .then(result => {
        console.log('mongo connection success', result);
      })
      .catch(error => {
        console.error('mongo connection error', error);
      });

    // Log requests to console
    this.app.use(morgan('dev'));

    // Use body-parser to get POST requests for API use
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    this.app.use('error', Server.onError);
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }

  routes() {
    const corsOptions = {
      // origin: 'http://localhost:8081',
      // optionsSuccessStatus: 200,
    };

    const router = express.Router();

    router.use('/auth', AuthRouter);
    router.use('/pets', PetsRouter);
    router.use('/pet-types', PetTypesRouter);
    router.use('/pet-breeds', PetBreedsRouter);
    router.use('/users', UsersRouter);
    router.use('/search', SearchRouter);

    router.get('/health', (req, res) => {
      res
        .status(200)
        .send({
          date: new Date(),
        });
    });

    this.app.use('/api', cors(corsOptions), router);
  }

  static onError(error) {
    if (error.syscall !== 'listen') throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
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

const port = Number(process.env.PORT) || 3003;

const server = new Server();
server.start(port);
