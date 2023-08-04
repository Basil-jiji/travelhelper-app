import express from 'express';
import fs from 'fs';
import path from 'path'
import connectDB from './config/db.js';
import placeRoutes from './routes/placeRoutes.js';
import userRoutes from './routes/userRoutes.js';

const port = 5000;

connectDB();

const app = express();

app.use(express.json());

app.use('/upload/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occured!' });
});

app.get('/', (req, res) => {
  res.send('API is Running...!');
});

app.use('/api/v1/places', placeRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
