import React from 'react';
import { Contact, Brand } from '../../components';
import './personalCard.css';

const PersonalCard = ({ img, name, title, phone, email }) => {
  return (
    <div className="card__container">
        <img src={ img } alt="headshot" />
        <p><strong>{ name }</strong></p>
        <p>{ title }</p>
        <p>Tel: { phone }</p>
        <p>E-post: { email }</p>
    </div>
  )
}

export default PersonalCard