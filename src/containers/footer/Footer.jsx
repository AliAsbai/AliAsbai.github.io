import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import gpt3Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_div">
            <h4>Länkar</h4>
            <p>exempel</p>
            <p>exempel</p>
            <p>exempel</p>
            <p>exempel</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Meny</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>exempel</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Kontakt</h4>
            <p>exempel</p>
            <p>exempel</p>
            <p>exempel</p>
            <p>exempel</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
            <img src={gpt3Logo} alt="logo" />
            <p>exempel</p>
        </div>
    </div>
  )
}

export default Footer