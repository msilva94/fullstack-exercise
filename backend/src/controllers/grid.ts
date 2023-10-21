import { Request, Response } from 'express';
import { generateRandomGrid, generateRandomGridWithBias, generateCode } from '../utils/grid';
import { ALPHABET, GRID_SIZE } from '../utils/constants';
import { GridType } from '../types/grid';

export const getGrid = (req: Request, res: Response) => {
    const { bias } = req.query;
    let grid: GridType = [];

    if (bias) {
        if (typeof bias === 'string' && bias.length === 1 && ALPHABET.includes(bias)) {
            grid = generateRandomGridWithBias(GRID_SIZE, bias);
        } else {
            return res.status(400).json({ error: 'The bias parameter must be a single alphabetic character.' });
        }
    } else {
        grid = generateRandomGrid(GRID_SIZE);
    }

    return res.json({ grid, code: generateCode(grid) });
};
