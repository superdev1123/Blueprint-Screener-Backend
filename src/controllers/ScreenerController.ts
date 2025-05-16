import { Request, Response } from 'express';
import Screener from '../mockup/Screener';

export const getScreeener = (req: Request, res: Response) => {
  res.json(Screener);
};