import shuffle from 'lodash.shuffle';
import { ALPHABET, BIAS_WEIGHT, GRID_COLS } from '../utils/constants';
import {
    GenerateRandomGridType,
    GenerateRandomGridWithBiasType,
    GenerateCodeType,
    CounterType,
    GetCharAtXYType,
    ConvertBigNumberType,
} from '../types/grid';

export const generateRandomGrid: GenerateRandomGridType = (numCells) => {
    return Array.from({ length: numCells }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]);
};

export const generateRandomGridWithBias: GenerateRandomGridWithBiasType = (numCells, bias) => {
    const numBiasCells = Math.ceil(numCells * BIAS_WEIGHT);
    const biasCells = Array.from({ length: numBiasCells }, () => bias);
    const remainingCells = generateRandomGrid(numCells - numBiasCells);

    return shuffle([...biasCells, ...remainingCells]);
};

export const generateCode: GenerateCodeType = (grid) => {
    const clockSeconds: string = new Date().getSeconds().toString().padStart(2, '0');
    const clockSecondsFirstDigit: number = +clockSeconds[0];
    const clockSecondsSecondDigit: number = +clockSeconds[1];

    const firstChar = getCharAtXY(grid, clockSecondsFirstDigit, clockSecondsSecondDigit);
    const secondChar = getCharAtXY(grid, clockSecondsSecondDigit, clockSecondsFirstDigit);

    const counter: CounterType = {
        [firstChar]: 0,
        [secondChar]: 0,
    };

    for (const char of grid) {
        if (char in counter) {
            counter[char] += 1;
        }
    }

    const counts: number[] = Object.values(counter);

    // if there is only one count it means the same character was in both positions, so we duplicate
    // it in order to generate a two digit code
    if (counts.length === 1) counts[1] = counts[0];

    return +counts.map((count) => (count > 9 ? convertBigNumber(count) : count)).join('');
};

export const getCharAtXY: GetCharAtXYType = (grid, x, y) => {
    return grid[y * GRID_COLS + x];
};

export const convertBigNumber: ConvertBigNumberType = (number) => {
    // divide the number by the lowest integer possible in order to get a value <= 9
    return Math.floor(number / (Math.floor(number / 10) + 1));
};
