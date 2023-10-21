import React from 'react';
import AppWrapper from './App.styles'
import GridPage from './pages/Grid/GridPage';

const App: React.FC = () => {
    return (
        <AppWrapper>
            <GridPage />
        </AppWrapper>
    );
}

export default App;
