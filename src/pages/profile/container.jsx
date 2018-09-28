import React from 'react';
import Body from './body';
import { Header } from '../../components/Header/index';
import { Footer } from '../../components/Footer/index';
import './style.scss';

const HomePage = () => (
    <React.Fragment>
        <Header />
        <Body />
        <Footer />
    </React.Fragment>
);

export default HomePage;
