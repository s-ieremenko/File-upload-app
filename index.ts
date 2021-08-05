import express, { Express } from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import { checkRole } from './src/admin/admin.controller';
import fileRouter from './src/file/file.route';
import {
  dbName,
  port,
  uriMongoDb,
  multerFieldName,
  multerDestinationFolder,
} from './common/constants';

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/*/:uuid', checkRole);

app.use(multer({ dest: multerDestinationFolder }).single(multerFieldName));

app.use(fileRouter);

app.listen(port, async () => {
  console.log(`App running at http://localhost:3001`);
  await mongoose.connect(uriMongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName,
  });
});
