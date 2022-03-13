import React from 'react';
import {Link} from "react-router-dom";
import ImageGallery from "react-image-gallery";
import {useTranslation} from "react-i18next";

import HomeHeader from "./header";
import Footer from "../../static/footer";
import KittensForSale from "./kittensForSale";
import OurCatsGallery from "./ourCatsGallery";

import {
    facebookLink, instagramLink,
    mainTelephone, mainTelephoneLink, telegramGroupLink
} from '../../../contentData/Links';
import {
    logo, instagramIcon, facebookIcon, telegramIcon
} from "../../../contentData/Icons";
import ContactsCard from "../contactUsPage/contactsCard";

const Home = () => {
    const {t} = useTranslation();

    function getHeaderImages() {
        let images = [];
        for (let i = 0; i < 6; i++) {
            images[i] = {
                original: require(`/src/contentData/homePage/images/home${i + 1}.jpg`),
                thumbnail: require(`/src/contentData/homePage/images/home${i + 1}.jpg`),
            };
        }
        return images;
    }

    return (
        <div id='page' className="mainpage">

            {/* Main Links And Gallery */}
            <div className="main-container">
                <div className="row no-gutters d-flex flex-md-row-reverse">
                    <div className="col-md-5 hero-right">
                        <div className="logo_main ">
                            <Link to="/home"><img src={logo} alt="title"/></Link>
                            <div>
                                <a href="https://www.britishcattery.com/">
                                    {t('title')}
                                    <span> {t('cattery')}</span>
                                </a>
                            </div>
                        </div>
                        <nav className="main-nav">
                            <ul className="scrollmenu">
                                <li><Link to="/kittens" className="internal">{t('views.kittens')}</Link></li>
                                <li><Link to="/our-cats" className="internal">{t('views.ourCats')}</Link></li>
                                <li><Link to="/litters" className="external">{t('views.pLitters')}</Link></li>
                                {/*
                                <li><Link to="/testimonials" className="internal">{t('views.testimonials')}</Link></li>
                                <li><Link to="/wallpapers" className="external">{t('views.wallpapers')}</Link></li>
                                */}
                                <li><Link to="/contacts" className="internal">{t('views.contacts')}</Link></li>
                            </ul>
                        </nav>
                        <div className="main-phone"><a href={mainTelephoneLink}>{mainTelephone}</a></div>
                        <div className="main-social">
                            <a href={instagramLink}>
                                <img className="icon icon-instagram" src={instagramIcon} alt="title"/></a>
                            <a href={facebookLink}>
                                <img className="icon icon-facebook" src={facebookIcon} alt="title"/></a>
                            <a href={telegramGroupLink}>
                                <img className="icon icon-whatsapp" src={telegramIcon} alt="title"/></a>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <ImageGallery items={getHeaderImages()}
                                      autoPlay={true}
                                      infinite={true}
                                      showNav={false}
                                      disableThumbnailScroll={true}
                                      thumbnailPosition={'left'}
                                      slideDuration={1500}
                                      slideInterval={5000}
                                      showThumbnails={false}
                                      showFullscreenButton={false}
                                      showPlayButton={false}
                                      showBullets={false}/>
                    </div>
                </div>
            </div>

            {/* Header */}
            <HomeHeader/>

            {/* Kittens For Sale */}
            {<KittensForSale/>}

            {/* Our Cats Description */}
            <section className="main-container ourfamily land" id="our_cats">
                <div className="row d-flex flex-md-row-reverse">
                    <div className="col-md-4">
                        <h2><Link to="/our-cats">{t("views.ourCats")}</Link></h2>
                    </div>
                    <div className="col-md-8">
                        <div className="ourfamily__desc">
                            <p>Welcome s.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Cats preview */}
            <section className="main-container ourfamily land" id="our_cats">
                <OurCatsGallery/>
            </section>

            {/* Contact Us Page */}
            <ContactsCard/>

            <Footer/>
        </div>
    );
};

export default Home;