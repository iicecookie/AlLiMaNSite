import React from 'react';
import Header from "../../static/header";
import KittensList from "./kittensList";
import Footer from "../../static/footer";
import {useParams} from "react-router-dom";

const KittensForSalePage = () => {
    const params = useParams();
    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <KittensList litterCode={params.id}/>

            <Footer/>
        </div>

    );
};

export default KittensForSalePage;