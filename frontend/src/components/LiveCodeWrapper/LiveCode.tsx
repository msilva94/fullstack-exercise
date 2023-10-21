import React from 'react';

import { LiveCodeWrapper, LiveSpan, CodeWrapper, CodeLabel, CodeSpan } from './LiveCode.styles';
import { LiveCodeProps } from './LiveCode.types';

const LiveCode: React.FC<LiveCodeProps> = ({ code }) => {
    return (
        <LiveCodeWrapper>
            <LiveSpan>Live</LiveSpan>
            <CodeWrapper>
                <CodeLabel>Your code: </CodeLabel>
                <CodeSpan>{code}</CodeSpan>
            </CodeWrapper>
        </LiveCodeWrapper>
    );
};

export default LiveCode;
