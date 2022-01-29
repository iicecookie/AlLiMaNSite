import React from 'react';
import "../styles/css/styles.css";
import "../styles/css/style.css";
import '../styles/css/bootstrap.css';
import logo from '../styles/images/logo.png';
import instagram from '../styles/images/instagram.png';
import facebook from '../styles/images/facebook.png';
import whatsapp from '../styles/images/whatsapp.png';
import {facebookAdress, instagramAdress, whatsappAdress,
        mainTelephone, mainTelephoneLink, contactMail,contactMailLink, } from '../Constant.js';

import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation();

    return (<div className="main-container">
            <footer className={"footer"}>
                <div className="row ">

                    <div className="col-md-3">
                        <div className="footer__logo">
                            <a><img src={logo} alt="title"/></a>
                            <div><a>{t("title")} <span>{t('cattery')}</span></a></div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-6 ">
                                <ul>
                                    <li><a href="our-cats.html">{t('views.ourCats')}</a></li>
                                    <li><a href="kittens.html">{t('views.kittens')}</a></li>
                                    <li><a href="previous-litters.html">{t('views.pLitters')}</a></li>
                                    <li><a href="testimonials.html">{t('views.testimonials')}</a></li>
                                    <li><a href="files.html">{t('views.wallpapers')}</a></li>
                                    <li><a href="contacts.html">{t('views.contacts')}</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href={mainTelephoneLink}>{mainTelephone}</a></li>
                                    <li><a href={contactMailLink}>{contactMail}</a></li>
                                    <li className="footer__social">
                                        <a href={instagramAdress}>
                                            <img className="icon icon-instagram" src={instagram} alt="title"/></a>
                                        <a href={facebookAdress}>
                                            <img className="icon icon-facebook" src={facebook} alt="title"/></a>
                                        <a href={whatsappAdress}>
                                            <img className="icon icon-whatsapp" src={whatsapp} alt="title"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="subs">
                            <p>{t("footerDescription")}</p>
                            <form method="POST" encType="multipart/form-data" action="#" className="form-inline ajax">
                            </form>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;