import { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';

import { generateRandomGrid, generateRandomGridWithBias, generateCode } from '../utils/grid';
import { GRID_SIZE } from '../utils/constants';

import { GridType } from '../types/grid';

export const getGrid = (req: Request, res: Response) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }

    const { bias } = matchedData(req);
    const grid: GridType = bias ? generateRandomGridWithBias(GRID_SIZE, bias) : generateRandomGrid(GRID_SIZE);

    res.json({ grid, code: generateCode(grid) });
};
