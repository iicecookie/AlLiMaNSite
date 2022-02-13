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

    function GetNextCat() {
        let indexOfNextCat = ourCats.indexOf(GetCat()) + 1;
        if (indexOfNextCat >= ourCats.length) {
            indexOfNextCat = 0;
        }
        return ourCats[indexOfNextCat];
    }

    function GetPrevCat() {
        let indexOfPrevCat = ourCats.indexOf(GetCat()) - 1;
        if (indexOfPrevCat === -1) {
            indexOfPrevCat = ourCats.length - 1;
        }
        return ourCats[indexOfPrevCat];
    }

    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <div className="container-fluid">
                {GetCatCard()}
            </div>

            <div className="prevnext">
                <div className="prev">
                    <Link to={"/our-cats/" + GetPrevCat().name} title={GetPrevCat().name + " " + GetPrevCat().cattery}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                             className="bi ti-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </Link>
                </div>

                <div className="next">
                    <Link to={"/our-cats/" + GetNextCat().name} title={GetNextCat().name + " " + GetNextCat().cattery}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                             className="bi ti-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default OneCatPage;