import React from 'react';
import {
    facebookLink, instagramLink, whatsappLink,
    mainTelephone, mainTelephoneLink, contactMail, contactMailLink, telegramGroupLink
} from '../../contentData/Links.js';
import {logo, facebookIcon, instagramIcon, whatsappIcon, telegramIcon} from "../../contentData/Icons";

import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

const Footer = () => {
    const {t} = useTranslation();

    return (<div className="main-container">
            <footer className={'footer'}>
                <div className="row ">

                    <div className="col-md-3">
                        <div className="footer__logo">
                            <a><img src={logo} alt="title"/></a>
                            <div><a>{t('title')} <span>{t('cattery')}</span></a></div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-6 ">
                                <ul>
                                    <li><Link to="/our-cats">{t('views.ourCats')}</Link></li>
                                    <li><Link to="/kittens">{t('views.kittens')}</Link></li>
                                    <li><Link to="/litters">{t('views.pLitters')}</Link></li>
                                    <li><Link to="/testimonials">{t('views.testimonials')}</Link></li>
                                    <li><Link to="/files">{t('views.wallpapers')}</Link></li>
                                    <li><Link to="/contacts">{t('views.contacts')}</Link></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><a href={mainTelephoneLink}>{mainTelephone}</a></li>
                                    <li><a href={contactMailLink}>{contactMail}</a></li>
                                    <li className="footer__social">
                                        <a href={instagramLink}>
                                            <img className="icon icon-instagram" src={instagramIcon} alt="title"/></a>
                                        <a href={facebookLink}>
                                            <img className="icon icon-facebook" src={facebookIcon} alt="title"/></a>
                                        <a href={telegramGroupLink}>
                                            <img className="icon icon-whatsapp" src={telegramIcon} alt="title"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 subs">
                        <p>{t('footerDescription')}. Сделать, что бы у каждого кота и кошки были ссылки на их детей?</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
