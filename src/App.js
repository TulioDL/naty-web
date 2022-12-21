import React from 'react';
import './App.css';
import Header from './components/Navigation/Header';
import NavLinks from './components/Navigation/NavLinks';
import Bar from './components/UI/Bar';
import Description from './components/UI/Description';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Bar />
            <main>
                <Description />
            </main>
            <Bar />
            <NavLinks />
        </React.Fragment>
    );
};

export default App;
