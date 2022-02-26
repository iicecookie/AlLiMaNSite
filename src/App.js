import React from 'react';
import './styles/css/style.css';
import './styles/css/bootstrap.css';
import './styles/css/styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import KittensForSalePage from "./components/pages/kittensPage/kittensForSalePage";
import OurCatsPage from "./components/pages/ourCatsPage/ourCatsPage";
import LittersPage from "./components/pages/littersPage/littersPage";
import OneCatPage from "./components/pages/ourCatsPage/oneCatPage";
import Home from "./components/pages/home/home";
import ScrollToTop from "./components/scrollToTop";
import ContactUsPage from "./components/pages/contactUsPage/contactUsPage";

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>

                    <Route path="/kittens" element={<KittensForSalePage/>}/>

                    <Route path="/our-cats" element={<OurCatsPage/>}/>
                    <Route path="/our-cats/:Name" element={<OneCatPage/>}/>

                    <Route path="/litters" element={<LittersPage/>}/>
                    <Route path="/litters/:id" element={<KittensForSalePage/>}/>

                    <Route path="/contacts" element={<ContactUsPage/>}/>

                    <Route path="/*" element={<KittensForSalePage/>}/>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
