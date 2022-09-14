import 'express-async-errors';
import express from 'express';
import errorHandler from './middlewares/error';
import carRouter from './routes/Car';

const app = express();
app.use(express.json());

app.use(carRouter);

app.use(errorHandler);

export default app;
