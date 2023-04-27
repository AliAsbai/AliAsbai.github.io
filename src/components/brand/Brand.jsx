import React from 'react'
import './brand.css';
import { phone, instagram, logo, facebook, email } from './imports';

const Brand = () => {
  return (
    <div className="gpt3__brand section__margin">
        <div className="gpt3__brand-img">
          <a href="tel:0046700755032"><img src={phone} alt="phone" /></a>
        </div>
        <div className="gpt3__brand-img">
          <a href="https://www.instagram.com"><img src={instagram} alt="instagram" /></a>
        </div>
        <div className="gpt3__brand-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__brand-img">
          <a href="https://www.facebook.com"><img src={facebook} alt="meta" /></a>
        </div>
        <div className="gpt3__brand-img">
          <a href="mailto:kontakt@mzstädservicenacka.se"><img src={email} alt="email" /></a>
        </div>
    </div>
  )
}

export default Brand