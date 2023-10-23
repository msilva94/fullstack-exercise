import React from 'react';

import GridPage from './pages/Grid/GridPage';

import AppWrapper from './App.styles'

const App: React.FC = () => {
    return (
        <AppWrapper>
            <GridPage />
        </AppWrapper>
    );
}

export default App;
