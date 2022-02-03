import React, {Component, useState} from 'react';
import Footer from './components/footer';
import Header from './components/header';
import KittenList from './components/kittenList';
import './styles/css/style.css';
import './styles/css/bootstrap.css';
import './styles/css/styles.css';
import {useTranslation} from 'react-i18next';
import Kitten from "./components/kitten";
import PropTypes from "prop-types";

function App() {
    const {i18n} = useTranslation();

    const[kittens, setKitten] = useState([
        {id: 1, name: 'elfie' },
        {id: 2, name: 'elfie' },
    ]);

    return (
        <div id='page' className="header_stick_wrap">

            <Header/>

            <KittenList kittens={kittens}/>

            <Footer/>
        </div>

    );
}

export default App;
