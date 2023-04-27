import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import gpt3Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1>Boka någon av våra tjänster idag</h1>
        </div>

        <div className="gpt3__footer-btn">
          <Link to="Kontakta-oss"><p>Kontakta oss</p></Link>
        </div>

        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_div">
            <h4>Länkar</h4>
            <a href="https://www.facebook.com"><p>Facebook</p></a>
            <a href="https://www.instagram.com"><p>Instagram</p></a>
            <Link to="Kontakta-oss"><p>Kontakta oss</p></Link>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Meny</h4>
            <p>Så behandlar vi dina personuppgifter</p>
            <p>Upphovsrätt</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Kontakt</h4>
            <a href="https://goo.gl/maps/UpkNBh9fNhto8XXq6"><p>Midskeppsgatan 1, 120 66 Stockholm</p></a>
            <a href="tel:0046700755032"><p>0700755032</p></a>
            <a href="tel:0046737355485"><p>0737355485</p></a>
            <a href="mailto:kontakt@mzstädservicenacka.se"><p>kontakt@mzstädservicenacka.se</p></a>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
            <img src={gpt3Logo} alt="logo" />
            <p>Midskeppsgatan 1, 120 66 Stockholm, © 2022 Städservice Nacka. Copyright.</p>
        </div>
    </div>
  )
}

export default Footer