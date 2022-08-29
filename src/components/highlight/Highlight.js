import React from 'react';
import './highlight.css';

const Highlight = (props) => {
  return (
    <div id={props.id} className="hoja__highlight">
        <h2>Diskussionsfrågor</h2>
        <div className="hoja__highlight-container">
            <p>Donec ultricies, diam quis tempor pretium, diam mauris aliquet dolor, aliquam laoreet libero turpis et lacus. Nam sit amet ultrices quam, blandit euismod augue. Ut sit amet nisl nec nulla porttitor faucibus eget id neque. Etiam non velit aliquet, tempus justo sed, porttitor justo. Maecenas erat odio, ullamcorper at hendrerit nec, gravida vitae urna. Phasellus viverra quam in scelerisque hendrerit. Aliquam pharetra egestas tortor pellentesque fermentum. Aliquam auctor mattis libero at feugiat. Aliquam tincidunt at justo et convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc condimentum massa quis mi interdum aliquam. Mauris vitae magna iaculis, tempus ligula a, porta odio.</p>
            <p>Mauris est erat, tincidunt luctus metus id, luctus aliquet nisi. Suspendisse scelerisque dolor vel nisl ullamcorper, eget commodo nisi cursus. Mauris vehicula ornare felis ullamcorper feugiat. Aliquam vel tortor tincidunt nisi hendrerit viverra. In ac malesuada neque. Ut pharetra euismod nibh, ultrices rhoncus felis lobortis vitae. Praesent dignissim tortor at faucibus tempor.</p>
        </div>
    </div>
  )
}

export default Highlight