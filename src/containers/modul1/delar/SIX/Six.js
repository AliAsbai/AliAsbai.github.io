import React from 'react';
import { Spotlight, Story, Video } from '../../../../components';
import Values from './Values';
import './six.css';

const Six = (props) => {
  return (
    <div id='modul1__six' className='hoja__six'>
      <h1>{Values.title}</h1>
      <div className='hoja__columns'>
          <div>
              <Video video={Values.video} />
          </div>
          <div>
              <p>{Values.text}</p>
          </div>
      </div>
    </div>
  )
}
export default Six