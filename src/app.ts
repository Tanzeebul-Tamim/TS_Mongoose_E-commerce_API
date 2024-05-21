import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import config from './app/config';

const app: Application = express();

//* parsers
app.use(express.json());
app.use(cors());

//* application routes
app.use('/api', router);

const test = async (_req: Request, res: Response) => {
  res.send(
    `Welcome to the API of TS_Mongoose_E-commerce_API! Running on port ${config.port}`,
  );
};

app.get('/', test);

export default app;
