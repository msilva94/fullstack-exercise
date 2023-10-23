import { Router } from 'express';
import { query } from 'express-validator';

import { getGrid } from '../controllers/grid';

const router = Router();

router.get(
    '/',
    query('bias')
        .isLength({ min: 1, max: 1 })
        .withMessage('The bias parameter must contain one character.')
        .isString()
        .withMessage('The bias parameter must be a string.')
        .isAlpha()
        .withMessage('The bias parameter must be an alphabet character.')
        .optional(),
    getGrid,
);

export default router;