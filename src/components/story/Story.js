import React from 'react';
import './story.css';

const Story = (props) => {
  return (
    <div className="hoja__story">
        <div className="hoja__story-container">
            <h2>{props.title}</h2>
            {props.paragraphs.map((paragraph, index) =>
                <p key={index}>{paragraph}</p>
            )}
        </div>
    </div>
  )
}

export default Story