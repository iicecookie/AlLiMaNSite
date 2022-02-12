import React from 'react';
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ParentLink = (props) => {

    const {t} = useTranslation();
    return (
        <div className="rod_wrap">
            <div className="lh">
                <span className="lhf">{t("gender.male")}</span>
                <Link to='our-cats/gentlemen/'>
                    {props.litter.fatherName} {props.litter.fatherCattery}
                </Link>
            </div>
            <div className="lh">
                <span className="lhf">{t("gender.female")}</span>
                <Link to='our-cats/ladies/'>
                    {props.litter.motherName} {props.litter.motherCattery}
                </Link>
            </div>
        </div>
    );
};

ParentLink.propTypes = {
    litter: PropTypes.object.isRequired
};

export default ParentLink;