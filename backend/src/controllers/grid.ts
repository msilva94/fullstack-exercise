import { Request, Response } from 'express';
import { matchedData, query, validationResult } from 'express-validator';

import { generateRandomGrid, generateRandomGridWithBias, generateCode } from '../utils/grid';
import { GRID_SIZE } from '../utils/constants';

import { GridType } from '../types/grid';

export const getGrid = async (req: Request, res: Response) => {
    await query('bias')
        .isLength({ min: 1, max: 1 })
        .withMessage('The bias parameter must contain one character.')
        .isString()
        .withMessage('The bias parameter must be a string.')
        .isAlpha()
        .withMessage('The bias parameter must be an alphabet character.')
        .optional()
        .run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }

    const { bias } = matchedData(req);
    const grid: GridType = bias ? generateRandomGridWithBias(GRID_SIZE, bias) : generateRandomGrid(GRID_SIZE);

    res.json({ grid, code: generateCode(grid) });
};
