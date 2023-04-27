import React from 'react';
import './tjanst.css';

const Tjanst = ({ nextStep, register, errors, trigger}) => {
    const Continue = async e => {
        e.preventDefault();
        const result = await trigger("tjanst");
        if(result) nextStep();
    }

    return (
        <div className="tjanst__container">
            <h1>Begär offert</h1>
            <p>Välj den tjänst ni är intresserad av</p>
            <div className="tjanst__container-body">
                <input type="radio" name="tjanst" value="Kontorsstädning" id="kontor" {...register("tjanst")} />
                <label htmlFor="kontor">Kontorsstädning</label>
                <input type="radio" name="tjanst" value="Trappstädning" id="trapp" {...register("tjanst")} />
                <label htmlFor="trapp">Trappstädning</label>
                <input type="radio" name="tjanst" value="Butiksstädning" id="butik" {...register("tjanst")} />
                <label htmlFor="butik">Butiksstädning</label>
                <input type="radio" name="tjanst" value="Städning av köpcentrum" id="köpc" {...register("tjanst")} />
                <label htmlFor="köpc">Köpcenterstädning</label>
                <input type="radio" name="tjanst" value="Kontraktsstädning" id="kontrakt" {...register("tjanst")} />
                <label htmlFor="kontrakt">Kontraktsstädning</label>
                <input type="radio" name="tjanst" value="Visningsstädning" id="visning" {...register("tjanst")} />
                <label htmlFor="visning">Visningsstädning</label>
                <input type="radio" name="tjanst" value="Lagerstädning" id="lager" {...register("tjanst")} />
                <label htmlFor="lager">Lagerstädning</label>
            </div>
            <p id="error">{errors.tjanst && errors.tjanst.message}</p>
            <input id="nextButton" type="button" value="Nästa" onClick={ Continue } />
        </div>
    )
}

export default Tjanst