export type GridType = string[];

export type CounterType = { [key: string]: number };

export type GenerateRandomGridType = (numCells: number) => Grid;

export type GenerateRandomGridWithBiasType = (numCells: number, bias: string) => Grid;

export type GenerateCodeType = (grid: Grid) => number;

export type GetCharAtXYType = (grid: Grid, x: number, y: number) => string;

export type ConvertBigNumberType = (number: number) => number;