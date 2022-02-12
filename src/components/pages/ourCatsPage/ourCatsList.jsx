import React, {useState} from 'react';
import {Link} from "react-router-dom";
import OurCatCard from "./ourCatCard";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const OurCatsList = (props) => {

    const {t} = useTranslation();

    function getGender() {
        return props.ourCats[0].gender === 1 ? 'gentelmens' : 'ladies';
    }

    return (
        <div>
            <div className="litter_list__header our_cats_list">
                <div className="litter_list__headername">
                    <h2><Link to="/our-cats/">{t("gender." + getGender())}</Link></h2>
                </div>
            </div>

            <div className="container-fluid">
                {props.ourCats.map(cat =>
                    <OurCatCard key={cat.id}
                                cat={cat}
                                catCount={props.ourCats.length}/>)}
            </div>
        </div>
    );
};

OurCatsList.propTypes = {
    ourCats: PropTypes.array.isRequired,
};

export default OurCatsList;