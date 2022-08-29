import React from 'react';
import { Spotlight, Story, Video } from '../../../../components';
import Values from './Values';
import './three.css';

const Three = (props) => {
  return (
    <div id='modul1__three' className='hoja__three'>
      <h1>{Values.title}</h1>
      <div className='hoja__columns'>
        <div>
        {Values.text.map((paragraph, index) =>
                <p key={index}>{paragraph}</p>
            )}
          <Video video={Values.video} />
        </div>
        <div>
          <Story title={Values.subtitle} paragraphs={Values.paragraphs} />
          <ul>
            {Values.list.map((listItem, index) =>
                <li key={index}><p>{listItem}</p></li>
            )}
          </ul>
          <p className='hoja__three-ref'>{Values.ref}</p>
        </div>
      </div>
      <Spotlight list={Values.reflect} />
    </div>
  )
}
export default Three