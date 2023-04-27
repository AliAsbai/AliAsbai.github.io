import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { BigFeature } from '../../components';
import './textBoard.css';

const TextBoard = ( { prop } ) => {

    useLayoutEffect(() => {
        const el = document.getElementById("textBoard_id")
        const top = window.scrollY + el.getBoundingClientRect().top + 1
        window.scrollTo({ top })
    });

    const { tjanstId } = useParams();

    return (
        <FadeIn className="textBoard section__padding" transitionDuration={1000}>
            <div className="textBoard__container" id="textBoard_id">
                <div className="textBoard__container-title">
                    <h1>{ prop.at(tjanstId).title }</h1>
                    <h3>{ prop.at(tjanstId).summary }</h3>
                </div>
                <div className="textBoard__container-features">
                    {prop.at(tjanstId).featureData.map((item, index) =>(
                        <BigFeature title={item.title} text={item.text} key={item.title + index} />
                ))}
                </div>
                <Link to="/Offertforfragan"><button type="button">Offertförfrågan</button></Link>
            </div>
        </FadeIn>
    )
}

export default TextBoard