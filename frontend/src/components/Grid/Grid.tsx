import React from 'react';
import { GridWrapper, Cell } from './Grid.styles';

const GRID = Array.from({ length: 100 }, () => 'a');

const Grid: React.FC = () => {
    return (
        <GridWrapper>
            {GRID.map((char, index) => (
                <Cell key={index}>{char}</Cell>
            ))}
        </GridWrapper>
    );
};

export default Grid;
