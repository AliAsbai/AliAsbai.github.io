import React, { useLayoutEffect } from 'react';
import { Contact } from '../../components';
import Collapsible from 'react-collapsible';
import { RiArrowDownSLine } from 'react-icons/ri';
import './faq.css';

const Faq = ({ values }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

  return (
    <div className="faq header__padding">
        <div className="faq__container">
            <h1>Här är några vanliga frågor och svar som vi ofta får in</h1>
            <div className="faq__container-questions">
                { values.map((item, index) => (
                    <Collapsible trigger={ <div><h3>{ item.question }</h3><RiArrowDownSLine size={34} /></div> } key={ item.question } transitionTime={200}  >
                        <p>{ item.answer }</p>
                    </Collapsible>
                ))}     
            </div>
            <div className="faq__container-contact">
                <div className="faq__container-contact_form">
                    <h3>Hittade du inte svaret på din fråga? Skriv till oss</h3>
                    <Contact />   
                </div>
                <div className="faq__container-contact_image" />
            </div>
        </div>
    </div>
  )
}

export default Faq