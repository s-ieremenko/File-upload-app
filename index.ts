import express, { Express } from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import { readFiles, uploadFile } from './src/file/file.controller';
import { checkRole } from './src/admin/admin.controller';
import fileRouter from './src/file/file.route';

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/*/:uuid', checkRole);

app.use(multer({ dest: 'uploads' }).single('myFile'));

app.use(fileRouter);

app.listen(3001, async () => {
  console.log(`App running at http://localhost:3001`);
  await mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test',
  });
});
