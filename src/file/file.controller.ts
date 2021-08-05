import express, { Express, Request, Response } from 'express';
import multer from 'multer';
import { FileModel } from './file.model';
import { getFilesAsAdmin, uploadFilesAsAdmin } from './file.service';

export const readFiles = async (req: Request, res: Response): Promise<void> => {
  const offset: number = Number(req.query.offset) || 0;
  try {
    const files = await getFilesAsAdmin(offset);
    res.status(200).send(files);
  } catch (error: any) {
    res.status(error.response.status).send(error.response.data);
  }
};
export const uploadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const filedata: Express.Multer.File | undefined = req.file;
  if (!filedata) {
    res.send('Ошибка при загрузке файла');
  } else {
    try {
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
      res.status(200).send('File is upload');
    } catch (error: any) {
      res.status(error.response.status).send(error.response.data);
    }
  }
};
