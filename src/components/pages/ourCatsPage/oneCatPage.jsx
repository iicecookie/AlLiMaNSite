import React from 'react';
import {Link, useParams} from "react-router-dom";
import Header from "../../static/header";
import Footer from "../../static/footer";
import OurCatCard from "./ourCatCard";
import {ourCats} from "../../../contentData/ourCats/OurCats";
import {useTranslation} from "react-i18next";

const OneCatPage = () => {

    const {t} = useTranslation();
    const params = useParams();

    function GetCat() {
        const cats = ourCats.filter(cat => cat.name === params.Name);
        if (cats.length === 1) {
            return cats[0];
        }
    }

    function GetCatCard() {
        if (GetCat()) {
            return (
                <OurCatCard cat={GetCat()} catCount={1}/>
            )
        } else return (
            <div className="litter_list__header our_cats_list">
                <div className="litter_list__headername">
                    <h3>{t("notOurCat")}</h3>
                </div>
            </div>
        )
    }

    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <div className="container-fluid">
                {GetCatCard()}
            </div>

            <Footer/>
        </div>
    );
};

export default OneCatPage;