import React, { useEffect, useRef, useState } from 'react';

import Button from '../../components/Button/Button';
import Grid from '../../components/Grid/Grid';
import Icon from '../../components/Icon/Icon';
import LiveCode from '../../components/LiveCodeWrapper/LiveCode';
import TextInput from '../../components/Input/TextInput';

import { Wrapper, Header } from './GridPage.styles';
import { GridInfo } from './GridPage.types';

import { API_URL, ALPHABET } from '../../utils/constants';
import clockIcon from '../../assets/images/clock.svg';

const GRID_REFRESH_INTERVAL = 1000;
const BIAS_COOLDOWN_INTERVAL = 4000;

const GridPage: React.FC = () => {
    const [gridInfo, setGridInfo] = useState<GridInfo | null>(null);
    const [biasChar, setBiasChar] = useState('');
    const [canChangeBiasChar, setCanChangeBiasChar] = useState(true);
    const refreshTimeoutRef = useRef(0);
    const biasTimeout = useRef(0);

    useEffect(() => {
        return () => clearTimeout(refreshTimeoutRef?.current);
    }, []);

    useEffect(() => {
        if (gridInfo) {
            biasChar.length > 0 && setCanChangeBiasChar(false);
            refreshGrid();
        }
    }, [biasChar]);

    useEffect(() => {
        if (canChangeBiasChar) {
            clearTimeout(biasTimeout?.current);
        } else {
            biasTimeout.current = window.setTimeout(() => setCanChangeBiasChar(true), BIAS_COOLDOWN_INTERVAL);
        }
    }, [canChangeBiasChar]);

    const refreshGrid = () => {
        const biasQuery = biasChar ? `?bias=${biasChar}` : '';

        fetch(`${API_URL}/grid${biasQuery}`)
            .then((res) => res.json())
            .then((data) => setGridInfo(data))
            .catch((err) => console.log(err))
            .finally(() => {
                clearTimeout(refreshTimeoutRef?.current);
                refreshTimeoutRef.current = window.setTimeout(refreshGrid, GRID_REFRESH_INTERVAL);
            });
    };

    const handleBiasCharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        value.length <= 1 && ALPHABET.includes(value) && canChangeBiasChar && setBiasChar(value);
    }

    return (
        <Wrapper>
            <Header>
                <TextInput
                    label="Character"
                    value={biasChar}
                    onChange={handleBiasCharChange}
                    disabled={!canChangeBiasChar}
                />
                <Icon src={clockIcon} alt="Clock" />
                <Button onClick={refreshGrid} disabled={!!gridInfo}>
                    Generate 2D grid
                </Button>
            </Header>
            {gridInfo && (
                <>
                    <Grid grid={gridInfo?.grid} />
                    <LiveCode code={gridInfo?.code} />
                </>
            )}
        </Wrapper>
    );
};

export default GridPage;
