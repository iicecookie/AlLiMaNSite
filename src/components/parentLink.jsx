import React from 'react';
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import Kitten from "./kitten";

const ParentLink = (props) => {

    const {t} = useTranslation();
    return (
        <div className="lh">
            <span className="lhf">{t("gender." + props.gender)}</span>
            <a href="our-cats/gentlemen/kopiya-quadruple-grand-champion-apollo-peace-coon-.html">
                {props.name} {props.cattery}
            </a>
        </div>
    );
};

ParentLink.propTypes = {
    gender:  PropTypes.string.isRequired,
    name:    PropTypes.string.isRequired,
    cattery: PropTypes.string.isRequired,
};

export default ParentLink;