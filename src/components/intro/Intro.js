import React from 'react';
import { Video } from '..';
import './intro.css';

const Intro = (props) => {
  return (
    <div id={props.id} className="hoja__intro">
        <div className="hoja__intro-container">
            <h1>{props.subtitle}</h1>
            {props.paragraphs.map((paragraph, index) =>
                <p key={index}>{paragraph}</p>
            )}
        </div>
    </div>
  )
}

export default Intro