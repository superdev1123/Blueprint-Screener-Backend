import { Router } from 'express';
import { getHello } from '../controllers/HelloController';

const router = Router();

router.get('/', getHello);

export default router;
