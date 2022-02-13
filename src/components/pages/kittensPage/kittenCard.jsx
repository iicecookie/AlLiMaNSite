import React from 'react';
import '../../../styles/fonts/font.css';
import '../../../styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery';
import PropTypes from "prop-types";
import {useTranslation} from 'react-i18next';
import ParentLink from "../../parentLink";
import i18next from "i18next";
import {Link} from "react-router-dom";

const KittenCard = (props) => {

    const {t} = useTranslation();

    function getImages() {
        let images = [];
        for (let i = 0; i < 5; i++) {
            images[i] = {
                original: require(`/src/contentData/littersData/litters/litter-${props.litter.code}/${props.kitten.name}/${props.kitten.name}${i + 1}.jpg`),
                thumbnail: require(`/src/contentData/littersData/litters/litter-${props.litter.code}/${props.kitten.name}/${props.kitten.name}${i + 1}.jpg`),
            };
        }
        console.log(props.kittenCount);
        return images;
    }

    function isLastBlock() {
        return props.kittenCount === props.kitten.id;
    }

    function GetLitterCatCount() {

        let maleCount = props.litter.kittens.filter(kitten => kitten.gender === 1).length;
        let femaleCount = props.litter.kittens.filter(kitten => kitten.gender === 0).length;

        return <div
            className="cn">{maleCount} {t('gender.maleKitten')} {t('unions.and')} {femaleCount} {t('gender.femaleKitten')}
        </div>
    }

    function GetKittenDescription() {
        return <div className="col-md-4 litter_list__itemleft">
            <Link to="/kittens/" className="litter_list__item-name">
                {props.kitten.name}
            </Link>
            <div className="litter_list__item-desc">
                <p>{props.kitten.description[i18next.language === 'en' ? 'en' : 'ru']}</p>

            </div>
        </div>
    }

    function GetPhotoFrame() {
        return <div className="col-md-8">
            <div className="thumbs_wrap">
                <div className="thumbs_fixed">
                    <ImageGallery items={getImages()}
                                  infinite={true}
                                  thumbnailPosition={'left'}
                                  slideOnThumbnailOver={true}
                                  showBullets={true}
                                  slideInterval={1700}/>
                </div>
            </div>
        </div>
    }

    return (
        <div className="litter_list__header">

            <div className="litter_list__headername">
                <h2>
                    <Link to={"/litters/" + props.litter.code}>{t("litter")} {props.litter.code}</Link>
                </h2>
            </div>
            <div className="ld">{props.litter.birthDate}</div>

            {GetLitterCatCount()}
            <ParentLink litter={props.litter}/>

            <div className="row d-flex justify-content-around litter_list__item">
                {GetKittenDescription()}
                {GetPhotoFrame()}
            </div>

            <hr style={{visibility: isLastBlock() ? 'hidden' : 'visible'}}/>
        </div>
    );
};

KittenCard.propTypes = {
    kitten: PropTypes.object.isRequired,
    kittenCount: PropTypes.number.isRequired,
    litter: PropTypes.object.isRequired,
};

export default KittenCard;