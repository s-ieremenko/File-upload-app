import axios, { AxiosResponse } from 'axios';
import { FileModel } from './file.model';

export const getFilesAsAdmin = async (offset: number) => {
  const files = await FileModel.find().skip(offset).limit(10).exec();
  return files;
};

export const uploadFilesAsAdmin = async (
  name: string,
  mimeType: string,
  size: number,
  path: string
): Promise<void> => {
  await FileModel.create({
    name,
    mimeType,
    size,
    path,
  });
};
