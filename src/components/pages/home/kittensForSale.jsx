import React, {useCallback} from 'react';
import ImageGallery from "react-image-gallery";
import {littersList} from "../../../contentData/littersData/LittersList";
import {Link} from "react-router-dom";
import KittenCard from "../kittensPage/kittenCard";
import i18next, {t} from "i18next";
import ParentLink from "../../parentLink";

const KittensForSale = () => {

    let kittensList = [];

    function GetLitter(kitten) {
        return littersList.at(-kitten.litterId);
    }

    function GetLitterCode(kitten) {
        return littersList.at(-kitten.litterId).code;
    }

    function GetKittensList() {
        if (kittensList.length !== 0) return kittensList;
        littersList.forEach(litter => {
            litter.kittens.forEach(kitten => {
                if (kitten.status === 'sale') {
                    kittensList.push(kitten);
                }
            })
        })
        return kittensList;
    }

    function getImages() {
        let kittens = GetKittensList();
        let images = [];
        for (let i = 0; i < kittens.length; i++) {
            images[i] = {
                description: kittens[i].name.toUpperCase(),
                original: require(`/src/contentData/littersData/litters/litter-${GetLitterCode(kittens[i])}/${kittens[i].name}/home.jpg`),
            };
        }
        return images;
    }

    return (
        <div>
            <section className="main-container available_wrap land" id="kittens">
                <div className="row no-gutters">
                    <div className="col-md-7">
                        <div className="available_left">
                            <h2><Link to="/kittens">{t("views.kittensForSale")}</Link></h2>

                            <div className="avlitter">
                                {GetKittensList().map(kitten =>
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="avlitter__item">
                                        {/*Header*/}
                                        <Link to="/kittens"
                                              className="avlitter__name avlitter__item-name">{kitten.name}</Link>

                                        <Link to={"/litters/" + GetLitterCode(kitten)}
                                              className="avlitter__name avlitter__item-name">
                                            {t("litter")} {GetLitterCode(kitten)}
                                        </Link>

                                        <div
                                            className="avlitter__name avlitter__item-name ">{GetLitter(kitten).birthDate}</div>

                                        {/*Description*/}
                                        <div className="avlitter__item-desc">
                                            <p>{kitten.description[i18next.language === 'en' ? 'en' : 'ru']}</p>
                                        </div>

                                        {/*Parents*/}
                                        <ParentLink litter={GetLitter(kitten)}/>
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <ImageGallery items={getImages()}
                                      autoPlay={true}
                                      infinite={true}
                                      showNav={true}
                                      disableThumbnailScroll={true}
                                      thumbnailPosition={'left'}
                                      slideDuration={1500}
                                      slideInterval={5000}

                                      showThumbnails={true}
                                      showFullscreenButton={false}
                                      showPlayButton={false}
                                      showBullets={true}/>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default KittensForSale;