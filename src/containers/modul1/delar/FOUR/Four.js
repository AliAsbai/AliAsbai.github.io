import React from 'react';
import { Spotlight, Story, Video } from '../../../../components';
import Values from './Values';
import './four.css';

const Four = (props) => {
  return (
    <div id='modul1__four' className='hoja__four'>
      <h1>{Values.title}</h1>
        <div className='hoja__columns'>
          <div>
            {Values.paragraphs.map((paragraph, index) =>
                <p key={index}>{paragraph}</p>
            )}
          </div>
          <div>
            <Video video={Values.video} />
          </div>
        </div>
        <Spotlight list={Values.reflect} />
    </div>
  )
}
export default Four