import styled from 'styled-components';

export const LiveCodeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LiveSpan = styled.span`
    position: relative;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: bold;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -1rem;
        transform: translateY(-50%);
        display: inline-block;
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 50%;
        background-color: red;
    }
`;

export const CodeWrapper = styled.div`
    padding: 1rem 3rem;
    border: 1px solid black;
    border-radius: 0.2rem;
`;

export const CodeLabel = styled.span`
    text-transform: uppercase;
`;

export const CodeSpan = styled.span`
    font-weight: bold;
`;
