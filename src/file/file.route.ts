import * as express from 'express';
import { Router } from 'express';
import { readFiles, uploadFile } from './file.controller';

const fileRouter: Router = express.Router();

fileRouter.get('/admin/:uuid', readFiles);
fileRouter.post('/upload/:uuid', uploadFile);

export default fileRouter;
