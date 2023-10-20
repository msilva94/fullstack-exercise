import { Request, Response } from 'express';

export const getGrid = (req: Request, res: Response) => {
    res.json({ grid: generateRandomGrid() });
}

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const generateRandomGrid = () => {
    return Array.from({ length: 100 }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]);
}