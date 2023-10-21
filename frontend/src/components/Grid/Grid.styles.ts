import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin: 3rem 0;
    border: 1px solid black;
    border-radius: 0.2rem;
`;

export const Cell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    border: 1px solid black;
`;
