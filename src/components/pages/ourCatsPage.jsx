import React from 'react';
import Header from "../header";
import KittenList from "../kittenList";
import Footer from "../footer";

const OurCatsPage = () => {
    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <h1>Header</h1>

            <Footer/>
        </div>
    );
};

export default OurCatsPage;