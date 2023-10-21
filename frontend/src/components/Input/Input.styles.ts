import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/constants';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    color: ${MAIN_COLOR};
    font-size: 0.8rem;
    font-weight: bold;
`;

export const InputWrapper = styled.input`
    width: 4rem;
    padding: 1rem;
    margin-top: 0.5rem;
    border: 0.1rem solid black;
    border-radius: 0.2rem;
`;
