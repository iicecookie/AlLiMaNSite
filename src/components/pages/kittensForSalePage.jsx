import React from 'react';
import Header from "../header";
import KittenList from "../kittenList";
import Footer from "../footer";

const KittensForSalePage = () => {
    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <KittenList/>

            <Footer/>
        </div>

    );
};

export default KittensForSalePage;