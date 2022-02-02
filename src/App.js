import React, {Component} from 'react';
import Footer from './components/footer';
import Header from './components/header';
import KittenList from './components/kittenList';
import './styles/css/style.css';
import './styles/css/bootstrap.css';
import './styles/css/styles.css';
import {useTranslation} from 'react-i18next';

function App() {
    const {i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div id='page' className="header_stick_wrap">

            <Header/>

            <KittenList/>


            <Footer/>
        </div>

    );
}

export default App;
