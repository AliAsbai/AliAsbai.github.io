import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';

const Header = ( { prop } ) => {
  return (
    <div className='gpt3__header' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${prop.imgUrl})` }}>
      <div className="section__padding" id="home">
          <div className="gpt3__header-content">
            <h1>
              { prop.title } 
            </h1>
            <div className="gpt3__header_content-text">
              <p>{ prop.text }</p>
            </div>
            <div className="gpt3__header-content__input">
              <Link to={ prop.button1.reff }><p>{ prop.button1.text }</p></Link>
              <Link to={ prop.button2.reff }><p>{ prop.button2.text }</p></Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header