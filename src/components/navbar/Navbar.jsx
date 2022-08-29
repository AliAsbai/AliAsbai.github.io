import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Menu = () => (
  <>
    <p className="navbar__hover-underline-animation"><Link to="/">Projekt titel/logo</Link></p>
  </>
)

const Navbar = () => {
  return (
    <div className="hoja__navbar">
        <div className="hoja__navbar-links">
          <div className='hoja__navbar-links_container'>
             <Menu />
          </div>
        </div>
    </div>
  )
}

export default Navbar