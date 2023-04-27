import React from 'react';
import { InputText } from '../../../components';
import './uppgifter.css';

const Uppgifter = ({ prevStep, nextStep, register, errors, trigger }) => {
    const Continue = async e => {
        e.preventDefault();
        const result = await trigger(["namn", "efternamn", "adress", "postnummer", "ort", "telefon", "epost"]);
        if(result) nextStep();
    }

    const Back = e => {
        e.preventDefault();
        prevStep();
    }
    
    return (
        <div className="uppgifter__container">
            <h1>Kontaktuppgifter</h1>
            <div>
                <InputText type="text" label="Förnamn*" name="namn" register={ register } errors={ errors.namn } />
                <InputText type="text" label="Efternamn*" name="efternamn" register={ register } errors={ errors.efternamn } />
            </div>
            <div className="uppgifter__container-adress">
                <div>
                    <InputText type="text" label="Adress*" name="adress" register={ register } errors={ errors.adress } />  
                </div>               
                <div>
                    <InputText type="text" label="Postnummer*" name="postnummer" register={ register } errors={ errors.postnummer } />
                    <InputText type="text" label="Ort*" name="ort" register={ register } errors={ errors.ort } />
                </div>
            </div>
            <div>
                <InputText type="text" label="Telefon*" name="telefon" register={ register } errors={ errors.telefon } />
                <InputText type="text" label="E-postadress*" name="epost" register={ register } errors={ errors.epost } />
            </div>
            <div className="uppgifter__container-buttonBox">
                <input id="prevButton" type="button" value="Tillbaka" onClick={ Back } />
                <input id="nextButton" type="button" value="Nästa" onClick={ Continue } />   
            </div>
        </div>
    )
}

export default Uppgifter