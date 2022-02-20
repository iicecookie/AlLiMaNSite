import React, {useState, useEffect} from 'react';

import '../../styles/fonts/font.css';
import logo from '../../styles/icons/logo.png';
import instagram from '../../styles/icons/instagram.png';
import facebook from '../../styles/icons/facebook.png';
import whatsapp from '../../styles/icons/whatsapp.png';
import {
    facebookAdress, instagramAdress, whatsappAdress
} from '../../contentData/Contacts.js';

import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";


function Header() {

    const [header, setHeader] = useState("header");

    const listenScrollEvent = event => {
        if (window.scrollY > 200) {
            return setHeader("nav sticker_in stick ");
        } else {
            return setHeader("stick ");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    const {i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const {t} = useTranslation();
    return (
        <div>
            <nav className={'nav sticker_in' + header} role="navigation">
                <div className="container-fluid">
                    <div className="row no-gutters header_in ">
                        <div className="col-auto">
                            <div className="logo">
                                <Link to="/home"> <img src={logo} alt="title"/></Link>
                                <div><Link to="/home">{t("title")} <span>{t("cattery")}</span></Link></div>
                            </div>
                        </div>
                        <div className="col-auto ">
                            <ul>
                                <li><Link to="/kittens">      {t('views.kittens')}</Link></li>
                                <li><Link to="/our-cats">     {t('views.ourCats')}</Link></li>
                                <li><Link to="/litters">      {t('views.pLitters')}</Link></li>
                                <li><Link to="/testimonials"> {t('views.testimonials')}</Link></li>
                                <li><Link to="/files">        {t('views.wallpapers')}</Link></li>
                                <li><Link to="/contacts">     {t('views.contacts')}</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-1 menusocial">
                            <a href={instagramAdress}>
                                <img className="icon icon-instagram" src={instagram} alt="title"/></a>
                            <a href={facebookAdress}>
                                <img className="icon icon-facebook" src={facebook} alt="title"/></a>
                            <a href={whatsappAdress}>
                                <img className="icon icon-whatsapp" src={whatsapp} alt="title"/></a>
                        </div>

                        <div className="col-auto menusocial">
                                <button className='flag-btn'>
                                    <img className='flag'
                                         src={require("../../styles/icons/UsFlag.png")}
                                         onClick={() => changeLanguage('en')}/>
                                </button>
                            <button className='flag-btn'>
                                <img className='flag' src={require("../../styles/icons/RuFlag.png")}
                                     onClick={() => changeLanguage('ru')}/>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );

};

export default Header;