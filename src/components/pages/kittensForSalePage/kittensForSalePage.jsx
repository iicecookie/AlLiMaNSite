import React from 'react';
import Header from "../../static/header";
import KittensList from "./kittensList";
import Footer from "../../static/footer";

const KittensForSalePage = () => {
    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <KittensList/>

            <Footer/>
        </div>

    );
};

export default KittensForSalePage;