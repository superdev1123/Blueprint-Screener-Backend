import { Router } from 'express';
import { getScreeener } from '../controllers/ScreenerController';

const router = Router();

router.get('/', getScreeener);

export default router;
