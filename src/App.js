import React, {Component, useState} from 'react';
import './styles/css/style.css';
import './styles/css/bootstrap.css';
import './styles/css/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import KittensForSalePage from "./components/pages/kittensForSalePage/kittensForSalePage";
import OurCatsPage from "./components/pages/ourCatsPage/ourCatsPage";
import LittersPage from "./components/pages/littersPage/littersPage";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<KittensForSalePage/>}/>

                <Route path="/kittens" element={<KittensForSalePage/>}/>
                <Route path="/our-cats" element={<OurCatsPage/>}/>
                <Route path="/previous-littersList" element={<LittersPage/>}/>

                <Route path="/*" element={<KittensForSalePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
