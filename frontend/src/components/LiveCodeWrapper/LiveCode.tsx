import React from 'react';
import { LiveCodeWrapper, LiveSpan, CodeWrapper, CodeLabel, CodeSpan } from './LiveCode.styles';

const LiveCode: React.FC = () => {
    return (
        <LiveCodeWrapper>
            <LiveSpan>Live</LiveSpan>
            <CodeWrapper>
                <CodeLabel>Your code: </CodeLabel>
                <CodeSpan>11</CodeSpan>
            </CodeWrapper>
        </LiveCodeWrapper>
    );
};

export default LiveCode;
