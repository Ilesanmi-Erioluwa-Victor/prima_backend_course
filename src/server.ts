import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send('Hi from youtube live...');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
