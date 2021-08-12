import * as express from 'express';
import { Router } from 'express';
import { checkRole } from '../admin/admin.controller';
import { readFiles, uploadFile } from './file.controller';

const fileRouter: Router = express.Router();

fileRouter.use('/*', checkRole);

fileRouter.get('/read', readFiles);
fileRouter.post('/upload', uploadFile);

export default fileRouter;
