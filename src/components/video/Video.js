import React from 'react';
import './video.css';

const Video = (props) => {
  return (
    <div className='hoja__video'>
      <iframe
        title={props.video.title}
        src={props.video.link}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  )
}
export default Video