import React, {Component, useState} from 'react';
import './styles/css/style.css';
import './styles/css/bootstrap.css';
import './styles/css/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import KittensForSalePage from "./components/pages/kittensForSalePage";
import OurCatsPage from "./components/pages/ourCatsPage";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/kittens" element={<KittensForSalePage/>}/>
                <Route path="/our-cats" element={<OurCatsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
