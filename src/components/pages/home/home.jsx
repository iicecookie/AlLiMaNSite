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

const Home = () => {
    const {t} = useTranslation();

    function getImages() {
        let images = [];
        for (let i = 0; i < 5; i++) {
            images[i] = {
                original: require(`/src/contentData/homePage/images/home${i + 1}.jpg`),
                thumbnail: require(`/src/contentData/homePage/images/home${i + 1}.jpg`),
            };
        }
        return images;
    }

    function GetPhotoFrame() {
        return


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
                                <li><Link to="/kittens" className="internal">Kittens</Link></li>
                                <li><Link to="/our_cats" className="internal">Our cats</Link></li>
                                <li><Link to="/litters" className="external">Previous litters</Link></li>
                                <li><Link to="/testimonials" className="internal">Testimonials</Link></li>
                                <li><Link to="/wallpapers" className="external">Wallpapers</Link></li>
                                <li><Link to="/contacts" className="internal">Contact US</Link></li>
                            </ul>
                        </nav>
                        <div className="main-phone"><a href="tel:+18479070454">+1-8</a></div>
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
                        <img className='cst1'
                             src={require("../../../../src/otherImages/bs/imgonline-com-ua-resize-porjplndeoidfg_4.JPG")}/>
                    </div>
                    {/* <ImageGallery items={getImages()}
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
                                      showBullets={false}

                        />*/}
                </div>
            </div>

            {/* Header */}
            <HomeHeader/>

            {/* Kittens For Sale */}
            <section className="main-container available_wrap land" id="kittens">
                <div className="row no-gutters">
                    <div className="col-md-7">
                        <div className="available_left">
                            <h2><a href="https://www.britishcattery.com/kittens">Available Kittens</a></h2>
                            <div className="owl-carousel owl-carousel-available owl-theme owl-loaded">
                                <div className="owl-stage-outer owl-height">
                                    <div className="owl-stage">
                                        <div className="owl-item active">
                                            <div className="avlitter">
                                                <div className="avlitter__name">
                                                    <h3><a href="https://www.britishcattery.com/kittens/litter-w88">Litter
                                                        W2</a></h3>
                                                </div>
                                                <div className="ld">11.11.2021</div>
                                                <div className="cn">1 boy and 2 girls</div>
                                                <div className="rod_wrap">
                                                    <div className="lh">
                                                        <span className="lhf">F</span>
                                                        <a href="htt">Irving MiracleBri Loretta British</a>
                                                    </div>
                                                    <div className="lh">
                                                        <span className="lhm">M</span>
                                                        <a href="https://w">Varvara LorettaBritish</a>
                                                    </div>
                                                </div>
                                                <div className="js_shop avlitter__item avlitter__item-male">
                                                    <a href="h" className="avlitter__item-name">Winnie</a>
                                                    <div className="avlitter__item-desc">
                                                        <p>British shorthair golden shaded point kitty-boy with blue
                                                            eyes.</p>
                                                        <p>Prie is $4800</p>
                                                        <p>Reserved for Linsey (Dallas, TX)</p>
                                                    </div>
                                                </div>
                                                <div className="js_shop avlitter__item avlitter__item-male"><a
                                                    href="https://www.britishcattery.com/kittens/wren-"
                                                    className="avlitter__item-name">Wren </a>
                                                    <div className="avlitter__item-desc">
                                                        <p>Black golden chinchilla kitty-girl with green eyes</p>
                                                        <p>Price $4800</p>
                                                        <p>Reserved for Joshua and Jennifer (Morgantown, WV)</p>
                                                    </div>
                                                </div>
                                                <div className="js_shop avlitter__item avlitter__item-male"><a
                                                    href="https://www.britishcattery.com/kittens/wikki"
                                                    className="avlitter__item-name">Wikki</a>
                                                    <div className="avlitter__item-desc"><p>British shorthair golden
                                                        shaded point kitty-girl with blue eyes</p>
                                                        <p>Price $4000</p>
                                                        <p>Reserved for Ekaterina (Schaumburg,IL)</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-controls">
                                    <div className="owl-nav">
                                        <div className="owl-prev">
                                            <i className="ti-arrow-left owl-direction"/>
                                        </div>
                                        <div className="owl-next">
                                            <i className="ti-arrow-right owl-direction"/>
                                        </div>
                                    </div>
                                    <div className="owl-dots"/>
                                </div>
                                <div className="owl-thumbs"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={contactImg} alt="" title="" className="img-fluid"/>
                    </div>
                </div>
            </section>

            {/* Our Cats Description */}
            <section className="main-container ourfamily land" id="our_cats">
                <div className="row d-flex flex-md-row-reverse">
                    <div className="col-md-4">
                        <h2><a href="https://www.britishcattery.com/our-cats">Our Family of Cats</a></h2>
                        <ul className="ourfamily__menu">
                            <li><a href="https://www.britishcattery.com/our-cats/gentlemen">Gentlemen</a></li>
                            <li><a href="https://www.britishcattery.com/our-cats/ladies">Ladies</a></li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <div className="ourfamily__desc">
                            <p>Welcome s.</p>
                            <p>We are loc nal manners. </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Cats preview */}
            <div className="owl-carouselZZZ owl-carousel-ourfamily sliderz slick-initialized slick-slider">
                <div className="slick-list draggable">
                    <div className="slick-track">
                    </div>
                </div>
            </div>


            {/* Contact Us Page */}
            <section className="main-container contact land" id="contacts">
                <div className="row ">
                    <div className="col-md-7">
                        <img src={contactImg} alt="" title="" className="img-fluid"/>
                    </div>
                    <div className="col-md-5">
                        <div className="contact_right">
                            <h2>Contact Us</h2>
                            <div className="contact_desc">
                                <p>Our beautiful kittens and ca st you in your choice.</p>
                            </div>
                            <div className="adress_wrap">
                                <div className="adress">
                                    <img src={location} alt="" title="" className="icon icon-location"/>
                                    Moscow, IL, 60610
                                    <a data-fancybox data-src="#maps" href="/home">Map</a>
                                </div>
                                <div className="phone">
                                    <img src={phone} alt="" title="" className="icon icon-phone"/>
                                    <a href="tel:+79255619580">+7(925)561-95-80</a>
                                </div>
                                <div className="email">
                                    <img src={logo} alt="" title="" className="icon icon-mail"/>
                                    <a href="#">info@.com</a>
                                    <a href="#">ac@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact__social">
                                <span>Follow us on social media:</span>
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
                        <h1>Loretta British Cattery</h1>
                    </div>
                    <div className="col-md-8">
                        <div className="more">
                            LorettaBritish Cattery takes care of British shorthair kittens and cats during 15 years. If
                            you’ve
                            been searching for a companion who will give you unconditional love and always be there for
                            y
                            and lifestyle, we are happy to assist you in your choice!
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Home;