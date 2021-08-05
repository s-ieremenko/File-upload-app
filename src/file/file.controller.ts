import { Request, Response } from 'express';
import { notFound, ok } from '../../common/constants';
import { getFilesAsAdmin, uploadFilesAsAdmin } from './file.service';
import { File } from './file.model';

export const readFiles = async (req: Request, res: Response): Promise<void> => {
  const offset: number = Number(req.query.offset) || 0;
  try {
    const files: File[] = await getFilesAsAdmin(offset);
    res.status(ok).send(files);
  } catch (error: any) {
    res.status(error.response.status).send(error.response.data);
  }
};

export const uploadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const filedata: Express.Multer.File | undefined = req.file;
  try {
    if (!filedata) {
      res.status(notFound).send('No file provided');
    } else {
      const {
        originalname: name,
        mimetype: mimeType,
        size,
        path,
      }: {
        originalname: string;
        mimetype: string;
        size: number;
        path: string;
      } = filedata;
      await uploadFilesAsAdmin(name, mimeType, size, path);
      res.status(ok).send('File is upload');
    }
  } catch (error: any) {
    res.status(error.response.status).send(error.response.data);
  }
};
