import React from 'react';
import Body from './body';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './style.scss';

const HomePage = () => (
    <React.Fragment>
        <Header />
        <Body />
        <Footer />
    </React.Fragment>
);

export default HomePage;
