import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Grid from '../../components/Grid/Grid';
import LiveCode from '../../components/LiveCodeWrapper/LiveCode';
import { Wrapper, Header } from './GridPage.styles';

const GridPage: React.FC = () => {
    const handleGenerateClick = () => {
        console.log('CLICK');
    };

    return (
        <Wrapper>
            <Header>
                <Input />
                <div>CLOCK</div>
                <Button onClick={handleGenerateClick}>Generate 2D grid</Button>
            </Header>
            <Grid />
            <LiveCode />
        </Wrapper>
    );
};

export default GridPage;
