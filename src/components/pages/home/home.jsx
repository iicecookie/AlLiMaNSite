import React from 'react';
import Header from "../../static/header";
import Footer from "../../static/footer";
import {Link} from "react-router-dom";
import logo from '../../../styles/icons/logo.png';
import instagram from '../../../styles/icons/instagram.png';
import facebook from '../../../styles/icons/facebook.png';
import whatsapp from '../../../styles/icons/whatsapp.png';
import {
    facebookAdress, instagramAdress, whatsappAdress,
    mainTelephone, mainTelephoneLink, contactMail, contactMailLink
} from '../../../contentData/Contacts';
import {useTranslation} from "react-i18next";
import ImageGallery from "react-image-gallery";


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
        return <div>
            <ImageGallery items={getImages()}
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

            />
        </div>
    }

    return (
        <div id='page' className="mainpage">

            <div className="main-container">
                <div className="row no-gutters d-flex flex-md-row-reverse">
                    <div className="col-md-5 hero-right">
                        <div className="col-md-5 hero-right">
                            <div className="logo_main ">
                                <Link to="/home"> <img src={logo} alt="title"/></Link>
                                <div>
                                    <Link to="/home">{t("title")}<span>{t("cattery")}</span></Link>
                                </div>
                            </div>
                            <nav className="main-nav">
                                <ul className="scrollmenu">
                                    <li><Link to="/kittens">{t("views.kittens")}</Link></li>
                                    <li><Link to="/our-cats" className="internal">{t("views.ourCats")}</Link></li>
                                    <li><Link to="/litters" className="external">{t("views.pLitters")}</Link></li>
                                    <li><Link to="/testimonials" className="internal">{t("views.testimonials")}</Link>
                                    </li>
                                    <li><Link to="/files" className="external">{t("views.wallpapers")}</Link></li>
                                    <li><Link to="/contacts" className="internal">{t("views.contacts")}</Link></li>
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
                    </div>
                    <div className="col-md-auto">
                        {GetPhotoFrame()}
                    </div>
                </div>
            </div>

            <div>
                <meta name="p:domain_verify" content="df19245fa0cd51e520c8d82fb41dd4ff"/>
            </div>

            <section className="main-container contact land" id="contacts">
                <div className="row ">
                    <div className="col-md-7">
                        <img src={logo} alt="" title="" className="img-fluid"/>
                    </div>
                    <div className="col-md-5">
                        <div className="contact_right">
                            <h2>Contact Us</h2>
                            <div className="contact_desc">
                                <p>Our beautiful kittens and cats will be great companions to you and will love you
                                    forever. We are always happy to assist you in your choice.</p>
                            </div>
                            <div className="adress_wrap">
                                <div className="adress">

                                    <img src={logo} alt="" title="" className="icon icon-location"/>
                                    Chicago, IL, 60610
                                    <a data-fancybox data-src="#maps" href="/home">Map</a>
                                </div>
                                <div className="phone">
                                    <img src={logo} alt="" title="" className="icon icon-phone"/>
                                    <a href="tel:+79255619580">+7(925)561-95-80</a>
                                </div>
                                <div className="email">
                                    <img src={logo} alt="" title="" className="icon icon-mail"/>
                                    <a href="#">info@britishcattery.com</a>
                                    <a href="#">lbcattery@gmail.com</a>
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
                            you, we
                            can help you find your purr-fect match. We love our kittens and know how gorgeous they are.
                            There is
                            a lot of information about British Shorthair in Internet and we need to say only this, when
                            you buy
                            British shorthair kitten you bring to your live a lot of joy, love and fun.
                            We have British Shorthair black golden shaded kittens, British shorthair black silver shaded
                            kittens, British Shorthair blue golden shaded kittens, British Shorthair chinchilla kittens,
                            British
                            Shorthair golden chinchilla kittens, British Longhair silver shaded color kittens with green
                            eyes
                            and British Shorthair kittens with blue eyes.
                            Our British Shorthair cats (gentlemen and ladies) like attention and you can see everyday
                            life of
                            our family in our Instagram.
                            You can find all information about British kittens for sale in the United States on our web
                            site and
                            our social media.
                            All our kittens raise in our home, all cats live with us and trust people. When you start
                            looking
                            for British Shorthair kittens for sale, please ask us any questions and we will give you
                            really
                            useful advice. If you’ve been dreaming about getting the perfect kitten who matches your
                            personality
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