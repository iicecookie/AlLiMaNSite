import React from 'react';
import {
    facebookIcon, instagramIcon, locationIcon, phoneIcon, telegramIcon, whatsappIcon
} from "../../../contentData/Icons";
import {
    facebookLink, instagramLink, mainTelephone, mainTelephoneLink, telegramGroupLink, telegramPersonLink, telegramPersonTitle, whatsappLink
} from "../../../contentData/Links";

import contactImg from '../../../contentData/homePage/images/contact.jpg';
import {useTranslation} from "react-i18next";

const ContactsCard = () => {
    const {t} = useTranslation();
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
                                <p>Our beautiful kittens and ca st you in your choice.</p>
                            </div>
                            <div className="adress_wrap">
                                <div className="adress">
                                    <img src={locationIcon} className="icon icon-location"/>
                                    <a href="https://www.google.ru/maps/@55.7976464,37.6445659,10.78z/data=!5m1!1e1">Moscow,
                                        Korolyov</a>
                                </div>
                                <div className="phone">
                                    <img src={phoneIcon} className="icon icon-phone"/>
                                    <a href={mainTelephoneLink}>Call: {mainTelephone}</a>
                                </div>
                                <div className="phone">
                                    <img src={whatsappIcon} className="icon icon-mail"/>
                                    <a href={whatsappLink}>Write: {mainTelephone}</a>
                                </div>
                                <div className="email">
                                    <img src={telegramIcon} className="icon icon-mail"/>
                                    <a href={telegramPersonLink}>{telegramPersonTitle}</a>
                                </div>
                            </div>
                            <div className="contact__social">
                                <span>{t("socialMedia.followUs")}:</span>
                                <a href={instagramLink}>
                                    <img className="icon icon-instagram" src={instagramIcon} alt="title"/></a>
                                <a href={facebookLink}>
                                    <img className="icon icon-facebook" src={facebookIcon} alt="title"/></a>
                                <a href={telegramGroupLink}>
                                    <img className="icon icon-whatsapp" src={telegramIcon} alt="title"/></a>
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
        </div>
    );
};

export default ContactsCard;