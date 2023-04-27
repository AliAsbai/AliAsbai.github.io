import React from 'react';
import { InputText } from '../../../components';
import './info.css';

const Info = ({ prevStep, nextStep, register, errors, trigger, values, tjanst }) => {
    const Continue = async e => {
        e.preventDefault();
        const result = await trigger(["yta"]);
        if(result) nextStep();
    }

    const Back = e => {
        e.preventDefault();
        prevStep();
    }

    const picked = values.find(obj => obj.id === tjanst);
    return (
        <div className="info__container">
            <h1>Information om städningen</h1>
                        {/*<div className="info__container-radio">
                {picked.buttons.map((item, index) =>(
                    <React.Fragment key={item.id}>
                        <input type="radio" name="lokal" value={item.value} id={item.id} {...register("lokal")} />
                        <label htmlFor={item.id}>{item.value}</label>
                    </React.Fragment>   
                ))}
                <input type="radio" name="lokal" value="Annat" id="annat" />
                <label htmlFor="annat">Annat</label>
                </div>*/}
            <div className="info__container-text">
                    <InputText type="text" label="Hur stor är städytan?*" name="yta" placeholder="Städyta kvm" size={35} register={ register } errors={ errors.yta } />
                    <p>Har du några andra ev. önskemål?</p>
                    <textarea name="misc" placeholder="Andra önskemål?" id="misc" rows="10" {...register("misc")} />
            </div>
            <div>
                <input id="prevButton" type="button" value="Tillbaka" onClick={ Back } />
                <input id="nextButton" type="button" value="Nästa" onClick={ Continue } />   
            </div>
        </div>
    )
}

export default Info