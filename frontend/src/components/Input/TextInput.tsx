import React from 'react';

import { Label, Input } from './TextInput.styles';
import { TextInputProps } from './TextInput.types';

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
    return (
        <Label>
            {label}
            <Input type='text' placeholder={label} {...props} />
        </Label>
    );
};

export default TextInput;
