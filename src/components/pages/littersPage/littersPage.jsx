import React from 'react';
import Header from "../../static/header";
import Footer from "../../static/footer";
import LitterList from "./litterList";

const LittersPage = () => {
    return (
        <div id='page' className="header_stick_wrap">

            <Header/>

            <LitterList/>

            <Footer/>
        </div>
    );
};

export default LittersPage;