import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import config from './app/config';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

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

//* Global Error Handler
app.use(globalErrorHandler);

//* Not Found Route
app.use(notFound);

export default app;
