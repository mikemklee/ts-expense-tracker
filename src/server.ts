import 'colors';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { connectDB } from './config/db';
import { router as transactionsRouter } from './routes/transactions';

dotenv.config({ path: './src/config/config.env' });

connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/transactions', transactionsRouter);

const PORT = process.env.PORT || 4000;

const testCallback = () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  );
};

app.listen(PORT, testCallback);
