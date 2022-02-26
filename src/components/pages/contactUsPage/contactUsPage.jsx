import React from 'react';
import Header from "../../static/header";
import Footer from "../../static/footer";
import ContactsCard from "./contactsCard";

const ContactUsPage = () => {
    return (
        <div id='page' className="header_stick_wrap">
            <Header/>

            <ContactsCard/>

            <Footer/>
        </div>
    );
};

export default ContactUsPage;