import express, { Express, Request, Response } from 'express';
import { checkAdmin } from './admin.service';

export const checkRole = async (
  req: Request,
  res: Response,
  next: () => void
): Promise<void> => {
  const uuid: string = req.params.uuid;
  try {
    await checkAdmin(uuid);
    next();
  } catch (error: any) {
    res.status(error.response.status).send(error.response.data);
  }
};
