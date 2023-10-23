import { Router } from 'express';

import { getGrid } from '../controllers/grid';

const router = Router();

router.get('/', getGrid);

export default router;