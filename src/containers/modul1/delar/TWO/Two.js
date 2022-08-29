import React from 'react';
import { Story, Video, Spotlight } from '../../../../components';
import Values from './Values';
import './two.css';

const Two = (props) => {
  return (
    <div id='modul1__two' className='hoja__two'>
      <h1>{Values.title}</h1>
        <div className='hoja__columns'>
          <div>
            <Video video={Values.video} />
            <h2>{Values.subtitle}</h2>
            {Values.paragraphs.map((paragraph, index) =>
                  <p key={index}>{paragraph}</p>
              )}
            <ol>
              {Values.list1.map((listItem, index) =>
                  <li key={index}><p>{listItem}</p></li>
              )}
            </ol>
          </div>
          <div>
            <ol>
              {Values.list2.map((listItem, index) =>
                  <li key={index}><p>{listItem}</p></li>
              )}
            </ol>
            <p className='hoja__two-ref'>{Values.ref}</p>
          </div>
        </div>
        <Spotlight list={Values.reflect} />
      </div>
  )
}
export default Two