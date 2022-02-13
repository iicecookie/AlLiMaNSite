import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const LitterCard = (props) => {

    const {t} = useTranslation();

    function GetLitterGenderCount() {

        let maleCount = props.litter.kittens.filter(kitten => kitten.gender === 1).length;
        let femaleCount = props.litter.kittens.filter(kitten => kitten.gender === 0).length;

        return <div
            className="ld">{maleCount} {t('gender.maleKitten')} {t('unions.and')} {femaleCount} {t('gender.femaleKitten')}
        </div>
    }

    function GetLitterMainPhoto() {
        return require(`/src/contentData/littersData/litters/litter-${props.litter.code}/litterView.jpg`);
    }

    return (
        <div className="col-md-4 d-flex align-items-stretch">
                <div className="col-md-6 d-flex no-padding">
                    <div className="previous_list__left">

                        <div className="litter_list__headername">
                            <h2>
                                <Link to={'/litters/' + props.litter.code}>{t('litter')} {props.litter.code} </Link>
                            </h2>
                        </div>

                        <div className="ld">{props.litter.birthDate}</div>
                        {GetLitterGenderCount()}
                        <div className="rod_wrap">
                            <div className="lh"><span className="lhf">{t("gender.male")}</span>
                                <Link to="/our-cats/gentlemen/george-peace-coon-lorettabritish">
                                    {props.litter.fatherName} {props.litter.fatherCattery}
                                </Link>
                            </div>
                            <div className="lh">
                                <span className="lhm">{t("gender.female")}</span>
                                <Link
                                    to="/our-cats/ladies/glukoza-go-geirlina-dolche-of-feliland">
                                    {props.litter.motherName} {props.litter.motherCattery}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-flex previous_list__img no-padding"
                     style={{
                         backgroundImage: `url(${GetLitterMainPhoto()})`
                     }}>
                    <Link to={'/litters/' + props.litter.code} className="previous_list__link"/>
                </div>
        </div>
    );
}

LitterCard.propTypes = {
    litter: PropTypes.object.isRequired,
};

export default LitterCard;