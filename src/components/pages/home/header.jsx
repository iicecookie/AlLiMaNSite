import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import {facebookLink, instagramLink, telegramGroupLink, whatsappLink} from "../../../contentData/Links";
import {facebookIcon, instagramIcon, telegramIcon, whatsappIcon} from "../../../contentData/Icons";

function HomeHeader() {

    const {i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const [nav, setNav] = useState("nav");
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        window.addEventListener('load', listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    const listenScrollEvent = event => {
        if (window.scrollY > 400) {
            setNav("showHeader");
            if (window.innerWidth < 1000)
                setNav("mobilePadding");
        } else {
            setNav("hideHeader");
        }
    };

    const {t} = useTranslation();
    return (<div className='no-padding'>
            <nav className={'hideHeader nav sticker_in no-padding ' + nav} role="navigation">
                <div className="container-fluid">
                    <div className="row no-gutters header_in ">

                        <div className="col-auto ">
                            <div className="menuWrapper">
                                <div className="menuLimiter dragscroll">
                                    <ul>
                                        <li><Link to="/kittens">      {t('views.kittens')}</Link></li>
                                        <li><Link to="/our-cats">     {t('views.ourCats')}</Link></li>
                                        <li><Link to="/litters">      {t('views.pLitters')}</Link></li>
                                        {/*
                                        <li><Link to="/testimonials"> {t('views.testimonials')}</Link></li>
                                        <li><Link to="/files">        {t('views.wallpapers')}</Link></li>
                                        */}
                                        <li><Link to="/contacts">     {t('views.contacts')}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto stickphone">
                            <a href="tel:+79255619580">+7(925)561-95-80</a>
                        </div>

                        <div className="col-lg-1 menusocial">
                            <a href={instagramLink}>
                                <img className="icon icon-instagram" src={instagramIcon} alt="title"/></a>
                            <a href={facebookLink}>
                                <img className="icon icon-facebook" src={facebookIcon} alt="title"/></a>
                            <a href={telegramGroupLink}>
                                <img className="icon icon-whatsapp" src={telegramIcon} alt="title"/></a>
                        </div>

                        <div className="">
                            <button className='flag-btn'>
                                <img className='flag'
                                     src={require("../../../styles/icons/UsFlag.png")}
                                     onClick={() => changeLanguage('en')}/>
                            </button>
                            <button className='flag-btn'>
                                <img className='flag' src={require("../../../styles/icons/RuFlag.png")}
                                     onClick={() => changeLanguage('ru')}/>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default HomeHeader;