import React from 'react';
import { Label, InputWrapper } from './Input.styles';

const Input: React.FC = () => {
    return (
        <Label>
            Character
            <InputWrapper type="text" pattern="[a-z]{1}" placeholder="Character" name="bias" />
        </Label>
    );
};

export default Input;
