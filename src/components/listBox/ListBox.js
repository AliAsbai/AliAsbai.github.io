import React from 'react';
import './listBox.css';

const ListBox = (props) => {
  return (
    <div className='hoja__listBox'>
        <div className='hoja__listBox-container'>
            <h2>{props.title}</h2>
            <ul>
            {props.list.map((listItem, index) =>
                <li key={index}><p>{listItem}</p></li>
            )}
            </ul>
            <p>{props.summary}</p>
        </div>
    </div>
  )
}
export default ListBox;
