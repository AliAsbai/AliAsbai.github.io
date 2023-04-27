import React, { useLayoutEffect } from 'react';
import { Contact, Brand, PersonalCard } from '../../components';
import tempImage from '../../assets/unknown.png';
import './kontakt.css';

const Kontakt = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

  return (
    <div className="kontakt">
        <div className="kontakt__container">
            <div className="kontakt__container-uppgifter header__padding">
                <div className="kontakt__uppgifter-content">
                    <h3>Kontaktuppgifter</h3>
                    <p id="kontakt__text">Vill du få svar på en fråga eller beställa en tjänst? Du kan kontakta oss via mail, telefon eller Facebook.</p>
                    <p id="kontakt__text">Våra öppettider är helgfria vardagar måndag-fredag<br /><strong>08:00 - 16:00</strong></p>
                    <ul>
                        <li><a href="mailto:kontakt@mzstädservicenacka.se">kontakt@mzstädservicenacka.se</a></li>
                        <li><a href="tel:0046700755032">070-075 50 32</a> / <a href="tel:0046737355485">073-735 54 85</a></li>
                        <li><a href="https://goo.gl/maps/43gdqnWVjcMzMqmc9">Midskeppsgatan 1<br/>120 66 Stockholm</a></li>
                    </ul>
                </div> 
            </div>
            <div className="kontakt__container-skicka header__padding">
                <div className="kontakt__container-skicka_wrap">
                    <h3>Kontakta oss</h3>
                    <p id="kontakt__text">Fyll i nedanstående uppgifter så tar vi kontakt med dig! Vardagar 8-17 kontaktar vi dig oftast inom två timmar.</p>
                    <Contact />   
                </div>   
            </div>
        </div>
        <Brand />
        <div className="kontakt__personalKort section__padding">
            <h3>Vi är dina kontakter</h3>
            <div className="kontakt__personalKort-kort">
                <PersonalCard img={tempImage} name="Namn Efternam" title="Title" phone="xxx-xxx xx xx" email="xxx.xxxx@städservicenacka.se" />
                <PersonalCard img={tempImage} name="Namn Efternam" title="Title" phone="xxx-xxx xx xx" email="xxx.xxxx@städservicenacka.se" />
            </div>    
        </div>
        
    </div>
  )
}

export default Kontakt