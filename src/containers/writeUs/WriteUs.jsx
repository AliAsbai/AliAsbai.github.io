import React from 'react'
import { Contact } from '../../components';
import './writeUs.css';

const WriteUs = ({ imgUrl, title, color }) => {
    return (
        <div className="writeUs section__margin">
            <div className="writeUs__container">
                <h1 className="writeUs__container-title">Kontakta oss</h1>
                <p className="writeUs__container-p">Vill du få svar på en fråga eller beställa en tjänst? Du kan kontakta oss via e-post, telefon eller Facebook. Våra öppettider är helgfria vardagar måndag-fredag 08:00 - 17:00</p>
                <Contact />
            </div>
            <div className="writeUs__image" />
        </div>
    )
}

export default WriteUs