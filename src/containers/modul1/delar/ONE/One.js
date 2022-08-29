import React from 'react';
import { Story, Video, ListBox, Spotlight } from '../../../../components';
import Values from './Values';
import './one.css';

const One = (props) => {
  return (
    <div id='modul1__one' className='hoja__one'>
      <h1>{Values.title}</h1>
        <div className='hoja__columns'>
          <div className='hoja__one-text'>
            {Values.paragraphs.map((paragraph, index) =>
                <p key={index}>{paragraph}</p>
            )}
          </div>
          <div>
            <Video video={Values.video} />
          </div>
        </div>
        <ListBox title={Values.tips.title} list={Values.tips.list} summary={Values.tips.summary} />
        <Spotlight list={Values.reflect} />
      </div>
  )
}
export default One