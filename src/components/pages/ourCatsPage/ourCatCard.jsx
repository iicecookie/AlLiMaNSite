import React from 'react';
import '../../../styles/fonts/font.css';
import '../../../styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery';
import {Link} from "react-router-dom";
import ImagePopUp from '../../imagePopUp';
import PropTypes from "prop-types";
import {useTranslation} from 'react-i18next';
import i18next from "i18next";

const OurCatCard = (props) => {

    const {t} = useTranslation();

    function isLastBlock() {
        if (props.catCount === 1) return true;
        return props.cat.id === props.catCount;
    }

    function getImages() {
        let images = [];
        for (let i = 0; i < 5; i++) {
            images[i] = {
                original: require(`/src/contentData/ourCats/${props.cat.gender === 0 ? "girls" : "boys"}/${props.cat.name.toLowerCase()}/${props.cat.name.toLowerCase()}${i + 1}.jpg`),
                thumbnail: require(`/src/contentData/ourCats/${props.cat.gender === 0 ? "girls" : "boys"}/${props.cat.name.toLowerCase()}/${props.cat.name.toLowerCase()}${i + 1}.jpg`),
            };
        }
        return images;
    }

    function GetPhotoFrame() {
        return <div className="col-md-8">
            <div className="thumbs_wrap">
                <div className="thumbs_fixed">
                    <ImageGallery items={getImages()}
                                  infinite={true}
                                  thumbnailPosition={'right'}
                                  slideOnThumbnailOver={true}
                                  showBullets={true}
                                  slideInterval={1700}/>
                </div>
            </div>
        </div>
    }

    return (
        <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="js_shop row d-flex litter_list__item">
                <div className="col-md-4 litter_list__itemleft">
                    <Link to="/our-cats/gentlemen/george-peace-coon-lorettabritish"
                          className="litter_list__item-name">{props.cat.name} {props.cat.cattery}
                    </Link>

                    <div className="family_id_date_wrap">
                        <span className="family_id_date">{props.cat.birthDate}</span>
                        <span
                            className="family_id_date"> {props.cat.gender === 1 ? t("gender.maleCat") : t("gender.femaleCat")}</span>
                    </div>

                    <div className="litter_list__item-desc">
                        <p>
                            <span>
                                {props.cat.description[i18next.language === 'en' ? 'en' : 'ru']}
                            </span>
                        </p>
                    </div>

                    <div className="">
                        <div className='d-flex flex-row justify-content-lg-start'>
                            <div className="block">
                                <ImagePopUp Label={'test'}/>
                            </div>
                            <div className='block'>
                                <ImagePopUp Label={'test1'}/>
                            </div>
                        </div>
                    </div>
                </div>

                {GetPhotoFrame()}
            </div>
        </div>
    );
};

OurCatCard.propTypes = {
    cat: PropTypes.object.isRequired,
    catCount: PropTypes.number,
};

export default OurCatCard;