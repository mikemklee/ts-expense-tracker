import express from 'express';
import dotenv from 'dotenv';
import 'colors';
import morgan from 'morgan';

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Hello there'));

const PORT = process.env.PORT || 4000;

const testCallback = () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  );
};

app.listen(PORT, testCallback);
