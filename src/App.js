import React from 'react'
import Footer from './components/footer'
import {useTranslation} from 'react-i18next';
import elf from './styles/images/Eflie.JPG'

function App() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="App">

            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <hr />
 
            <Footer/>
        </div>

    );
}

export default App;
