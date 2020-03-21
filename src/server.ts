import 'colors';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';

import { connectDB } from './config/db';
import { router as transactionsRouter } from './routes/transactions';

dotenv.config({ path: './src/config/config.env' });

connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactionsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 4000;

const testCallback = () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  );
};

app.listen(PORT, testCallback);
