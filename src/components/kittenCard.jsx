import React from 'react';
import '../styles/fonts/font.css';
import '../styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery';
import PropTypes from "prop-types";
import {useTranslation} from 'react-i18next';
import ParentLink from "./parentLink";

const KittenCard = (props) => {

    const {t} = useTranslation();

    function getImages() {
        let images = [];
        for (let i = 0; i < 5; i++) {
            images[i] = {
                original: require(`/src/contentData/kittenForSale/${props.kitten.name}/${props.kitten.name}${i + 1}.JPG`),
                thumbnail: require(`/src/contentData/kittenForSale/${props.kitten.name}/${props.kitten.name}${i + 1}.JPG`),
            };
        }
        console.log(props.kittenCount);
        return images;
    }

    function isLastBlock() {
        return props.kittenCount === props.kitten.id;
    }

    function GetLitterDescription() {
        return <div
            className="cn">{props.litter.maleCount} {t('gender.maleKitten')} {t('unions.and')} {props.litter.femaleCount} {t('gender.femaleKitten')}
        </div>
    }

    function GetParentsLinks() {
        return <div className="rod_wrap">
            <ParentLink gender={'male'} name={'Irving MiracleBri'} cattery={'AlLiMaN'}/>
            <ParentLink gender={'female'} name={'Varvara'} cattery={'AlLiMaN'}/>
        </div>
    }

    function GetKittenDescription() {
        return <div className="col-md-4 litter_list__itemleft">
            <a href="kittens/winnie.html" className="litter_list__item-name">
                {props.kitten.name}
            </a>
            <div className="litter_list__item-desc">
                <p>British shorthair golden shaded point kitty-boy with blue eyes.</p>
                <p>Price is $4800</p>
                <p>Reserved for Linsey (Dallas, TX)</p>
                <p></p>
            </div>
            <div className="d-block"></div>
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
                <h2><a href="kittens/litter-w88.html">{t("litter")} {props.litter.name}</a></h2>
            </div>
            <div className="ld">{props.kitten.birthDate}</div>

            {GetLitterDescription()}
            {GetParentsLinks()}

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


    gender: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cattery: PropTypes.string.isRequired,
};

export default KittenCard;