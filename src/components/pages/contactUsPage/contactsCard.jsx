import React from 'react';
import {
    facebookIcon, instagramIcon, locationIcon, phoneIcon, telegramIcon, vpnIcon, whatsappIcon, worldIcon
} from "../../../contentData/Icons";
import {
    facebookLink,
    instagramLink,
    mainTelephone,
    mainTelephoneLink,
    telegramGroupLink,
    telegramPersonLink,
    telegramPersonTitle,
    whatsappLink
} from "../../../contentData/Links";

import contactImg from '../../../contentData/homePage/images/contact.jpg';
import {useTranslation} from "react-i18next";
import i18n from "i18next";

const ContactsCard = () => {
    const {t} = useTranslation();

    function GetVpn() {
        if (i18n.language === 'ru') {
            return <div>
                <div className="adress_wrap">
                    <span>Если у вас есть проблемы с доступом:</span>
                    <div className="adress">
                        <a href="https://one.one.one.one/">
                            <img className="icon" src={vpnIcon} alt="title"/>
                        </a>
                        <a href="https://one.one.one.one/">Рекомендуем использовать впн</a>
                    </div>
                </div>
            </div>
        }
    }

    return (
        <div>
            {/* Contact Us */}
            <section className="main-container contact land" id="contacts">
                <div className="row ">
                    <div className="col-md-7">
                        <img src={contactImg} alt="" title="" className="img-fluid"/>
                    </div>
                    <div className="col-md-5">
                        <div className="contact_right">
                            <h2>{t("views.contactUs")}</h2>
                            <div className="contact_desc">
                                <p>{t("views.contactUsPage.about")}</p>
                            </div>
                            <div className="adress_wrap">
                                <div className="adress">
                                    <img src={worldIcon} className="icon icon-location"/>
                                    <a href="https://www.google.ru/maps/@55.7976464,37.6445659,10.78z/data=!5m1!1e1">
                                        World Wide delivery</a>
                                </div>
                                <div className="adress">
                                    <img src={locationIcon} className="icon icon-location"/>
                                    <a href="https://www.google.ru/maps/@55.7976464,37.6445659,10.78z/data=!5m1!1e1">
                                        {t("views.contactUsPage.from")}</a>
                                </div>
                                <div className="phone">
                                    <img src={phoneIcon} className="icon icon-phone"/>
                                    <a href={mainTelephoneLink}>{t("views.contactUsPage.call")}: {mainTelephone}</a>
                                </div>
                                <div className="phone">
                                    <img src={whatsappIcon} className="icon icon-mail"/>
                                    <a href={whatsappLink}>{t("views.contactUsPage.write")}: {mainTelephone}</a>
                                </div>
                                <div className="email">
                                    <img src={telegramIcon} className="icon icon-mail"/>
                                    <a href={telegramPersonLink}>{telegramPersonTitle}</a>
                                </div>
                            </div>
                            <div className="contact__social">
                                <span>{t("views.contactUsPage.followUs")}:</span>
                                <a href={instagramLink}>
                                    <img className="icon icon-instagram" src={instagramIcon} alt="title"/></a>
                                <a href={facebookLink}>
                                    <img className="icon icon-facebook" src={facebookIcon} alt="title"/></a>
                                <a href={telegramGroupLink}>
                                    <img className="icon icon-whatsapp" src={telegramIcon} alt="title"/></a>
                            </div>

                            {GetVpn()}
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
                        {t("views.contactUsPage.description")}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactsCard;