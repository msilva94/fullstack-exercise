import React from 'react';

import { Label, MyInput } from './Input.styles';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
    return (
        <Label>
            {placeholder}
            <MyInput placeholder={placeholder} {...props} />
        </Label>
    );
};

export default Input;
