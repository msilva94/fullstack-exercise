import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/constants';

const Button = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 0.2rem;
    text-transform: uppercase;
    background-color: ${MAIN_COLOR};
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

export default Button;
