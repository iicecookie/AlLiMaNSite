import React, {useState, useEffect} from 'react';

import '../styles/fonts/font.css';
import logo from '../styles/images/logo.png';
import instagram from '../styles/images/instagram.png';
import facebook from '../styles/images/facebook.png';
import whatsapp from '../styles/images/whatsapp.png';
import {
    facebookAdress, instagramAdress, whatsappAdress,
    mainTelephone, mainTelephoneLink, contactMail, contactMailLink,
} from '../Constant.js';

import {useTranslation, withTranslation} from 'react-i18next';


function Header() {

    const [header, setHeader] = useState("header");

    const listenScrollEvent = event => {
        if (window.scrollY > 200) {
            return setHeader("nav sticker_in stick");
        } else {
            return setHeader("stick");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    const {t} = useTranslation();
    return (
        <div>
            <nav className={'nav sticker_in' + header} role="navigation">
                <div className="container-fluid">
                    <div className="row no-gutters header_in ">
                        <div className="col-auto">
                            <div className="logo">
                                <a href="index.html"> <img src={logo} alt="title"/></a>
                                <div><a href="index.html">{t("title")} <span>{t("cattery")}</span></a></div>
                            </div>
                        </div>
                        <div className="col-auto menu-1">
                            <ul>
                                <li><a href="kittens.html">{t('views.kittens')}</a></li>
                                <li><a href="previous-litters.html">{t('views.ourCats')}</a></li>
                                <li><a href="previous-litters.html">{t('views.pLitters')}</a></li>
                                <li><a href="testimonials.html">{t('views.testimonials')}</a></li>
                                <li><a href="files.html">{t('views.wallpapers')}</a></li>
                                <li><a href="contacts.html">{t('views.contacts')}</a></li>
                            </ul>
                        </div>
                        <div className="col-auto menusocial">
                            <a href={instagramAdress}>
                                <img className="icon icon-instagram" src={instagram} alt="title"/></a>
                            <a href={facebookAdress}>
                                <img className="icon icon-facebook" src={facebook} alt="title"/></a>
                            <a href={whatsappAdress}>
                                <img className="icon icon-whatsapp" src={whatsapp} alt="title"/></a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );

};

export default Header;