import express from 'express';
import bodyParser from 'body-parser';
import logger from 'mongoose';
import mongoose from 'mongoose';
import { DB_URI } from './config/keys.js';

const app = express();
const router = express.Router();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    DB_URI,
    { useNewUrlParser: true },
  )
  .then(() => console.log('Connected Mongo'))
  .catch(err => console.log(err));

router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/', router);

app.listen(PORT, () => console.log('Listening on ${PORT}'));
