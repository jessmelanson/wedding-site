import React from 'react';

import CustomStyles from '../styles/CustomStyles';
import Routes from './Routes';
import Footer from './layout/Footer';

const App = () => (
    <CustomStyles>
        <Routes />
        <Footer />
    </CustomStyles>
);

export default App;