import React from 'react';
import HomeHeader from "./header";
import Footer from "../../static/footer";
import {Link} from "react-router-dom";

import logo from '../../../styles/icons/logo.png';
import phone from '../../../styles/icons/phone.png';
import location from '../../../styles/icons/location.png';
import instagram from '../../../styles/icons/instagram.png';
import facebook from '../../../styles/icons/facebook.png';
import whatsapp from '../../../styles/icons/whatsapp.png';
import {
    facebookAdress, instagramAdress, whatsappAdress,
    mainTelephone, mainTelephoneLink, contactMail, contactMailLink
} from '../../../contentData/Contacts';
import {useTranslation} from "react-i18next";
import ImageGallery from "react-image-gallery";

import contactImg from '../../../contentData/homePage/images/home1.jpg';
import KittensForSale from "./kittensForSale";
import OurCatsGallery from "./ourCatsGallery";

const Home = () => {
    const {t} = useTranslation();

    function getHeaderImages() {
        let images = [];
        for (let i = 0; i < 5; i++) {
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
                                <li><Link to="/our_cats" className="internal">{t('views.ourCats')}</Link></li>
                                <li><Link to="/litters" className="external">{t('views.pLitters')}</Link></li>
                                <li><Link to="/testimonials" className="internal">{t('views.testimonials')}</Link></li>
                                <li><Link to="/wallpapers" className="external">{t('views.wallpapers')}</Link></li>
                                <li><Link to="/contacts" className="internal">{t('views.contacts')}</Link></li>
                            </ul>
                        </nav>
                        <div className="main-phone"><a href={mainTelephoneLink}>{mainTelephone}</a></div>
                        <div className="main-social">
                            <a href={instagramAdress}>
                                <img className="icon icon-instagram" src={instagram} alt="title"/></a>
                            <a href={facebookAdress}>
                                <img className="icon icon-facebook" src={facebook} alt="title"/></a>
                            <a href={whatsappAdress}>
                                <img className="icon icon-whatsapp" src={whatsapp} alt="title"/></a>
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
            <section className="main-container contact land" id="contacts">
                <div className="row ">
                    <div className="col-md-7">
                        <img src={contactImg} alt="" title="" className="img-fluid"/>
                    </div>
                    <div className="col-md-5">
                        <div className="contact_right">
                            <h2>{t("views.contactUs")}</h2>
                            <div className="contact_desc">
                                <p>Our beautiful kittens and ca st you in your choice.</p>
                            </div>
                            <div className="adress_wrap">
                                <div className="adress">
                                    <img src={location} alt="" title="" className="icon icon-location"/>
                                    <a href="https://www.google.ru/maps/@55.7976464,37.6445659,10.78z/data=!5m1!1e1">Moscow, Korolyov</a>
                                </div>
                                <div className="phone">
                                    <img src={phone} alt="" title="" className="icon icon-phone"/>
                                    <a href={mainTelephoneLink}>{mainTelephone}</a>
                                </div>
                                <div className="email">
                                    <img src={logo} alt="" title="" className="icon icon-mail"/>
                                    <a href="#">info@.com</a>
                                    <a href="#">ac@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact__social">
                                <span>{t("socialMedia.followUs")}:</span>
                                <a href={instagramAdress}>
                                    <img className="icon icon-instagram" src={instagram} alt="title"/></a>
                                <a href={facebookAdress}>
                                    <img className="icon icon-facebook" src={facebook} alt="title"/></a>
                                <a href={whatsappAdress}>
                                    <img className="icon icon-whatsapp" src={whatsapp} alt="title"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="main-container seo_desc">
                <div className="row">
                    <div className="col-md-4">
                        <h1>{t("title")} {t("cattery")}</h1>
                    </div>
                    <div className="col-md-8">
                        {t("footerDescription")}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Home;