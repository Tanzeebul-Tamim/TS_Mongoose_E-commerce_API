import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//* parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API of TS_Mongoose_E-commerce_API!');
});

export default app;
