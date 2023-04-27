import React from 'react';
import { DatePicker } from '../../../components';
import './date.css';

const Date = ({ prevStep, register, errors }) => {
    const Back = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="date__container">
            <div className="date__container-header">
                <h1>Önskemål om städdatum</h1>
                <p className="date__container-header_bio">Välj ett datum om ni har ett specifik önskemål för städningen, detta är ej bindande. Vi återkommer med ett förslag genom e-post. Önskas endast en offert utan ett specifik datum så kan ni lämna kalendern utan att ändra på datummarkeringen.</p>
            </div>
            <div className="date__container-datepicker">
                <DatePicker register={ register } name="date" />   
            </div>
            <div className="date__container-body">
                <label><p>Alternativ dag/dagar (skriv gärna andra dagar som passar)</p></label>
                <input type="text" name="altDate" {...register("altDate")} />
                <label><p>Övriga önskemål</p></label>
                <input type="text" name="altMisc" {...register("altMisc")} />   
            </div>
            <div className="date__container-privacy">
                <p>
                    <input type="checkbox" name="privacy" value={true} {...register("privacy")} />
                    Jag godkänner hantering av personuppgifter
                </p>
                <p id="error">{ errors.privacy && errors.privacy.message }</p>
            </div>   
            <div className="date__container-buttonBox">
                <input id="prevButton" type="button" value="Tillbaka" onClick={ Back } />
                <input id="nextButton" type="submit" value="Skicka" />   
            </div>
        </div>
    )
}

export default Date