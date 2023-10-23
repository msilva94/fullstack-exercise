import React from 'react';

import { GridWrapper, Cell } from './Grid.styles';
import { GridProps } from './Grid.types';

const Grid: React.FC<GridProps> = ({ grid }) => {
    return (
        <GridWrapper>
            {grid.map((char, index) => (
                <Cell key={index}>{char}</Cell>
            ))}
        </GridWrapper>
    );
};

export default Grid;
