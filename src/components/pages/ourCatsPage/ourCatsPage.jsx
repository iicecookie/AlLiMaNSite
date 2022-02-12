import React from 'react';
import Header from "../../static/header";
import Footer from "../../static/footer";
import OurCatsList from "./ourCatsList";
import {ourGentlemens, ourLadies} from "../../../contentData/ourCats/OurCats";

const OurCatsPage = () => {

    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <OurCatsList ourCats={ourGentlemens}/>
            <OurCatsList ourCats={ourLadies}/>

            <Footer/>
        </div>
    );
};

export default OurCatsPage;