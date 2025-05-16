import { Router } from 'express';
import { calcScore } from '../controllers/ScoreController';

const router = Router();

router.post('/', calcScore);

export default router;
