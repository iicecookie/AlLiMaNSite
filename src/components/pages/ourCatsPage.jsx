import React from 'react';
import Header from "../static/header";
import Footer from "../static/footer";
import OurCatsList from "../ourCatsList";
import {ourLadies, ourGentlemens} from "../../contentData/ourCats/OurCats";

const OurCatsPage = () => {

    const Ladies = ourLadies;
    const Gentlemens = ourGentlemens;

    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <OurCatsList ourCats={Gentlemens}/>
            <OurCatsList ourCats={Ladies}/>

            <Footer/>
        </div>
    );
};

export default OurCatsPage;