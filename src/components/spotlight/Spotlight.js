import React from 'react';
import Lightbulb from '../../assets/bulb.png';
import './spotlight.css';

const Spotlight = (props) => {
  return (
    <div id={props.id} className="hoja__spotlight">
      <img src={Lightbulb} />
      <div className="hoja__spotlight-container">
        <h2>Reflektera</h2>
        <ul>
        {props.list.map((listItem, index) =>
            <li key={index}><p>{listItem}</p></li>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Spotlight