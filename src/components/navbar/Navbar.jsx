import React, { useState, useEffect } from 'react';
import useScrollListener from '../useScrollListener/UseScrollListener';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import './navbar.css';

const Menu = () => (
  <>
  <p className="navbar__hover-underline-animation"><Link to="Tjanster">Tjänster</Link></p>
  <p className="navbar__hover-underline-animation"><Link to="Offertforfragan">Offertförfrågan</Link></p>
  <p className="navbar__hover-underline-animation"><Link to="Om-Stadservice-Nacka">Om MZ Städservice Nacka</Link></p>
  </>
)

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const scroll = useScrollListener();
  useEffect(() => {
    if(scroll.y > 150 /*&& scroll.y - scroll.lastY > 0*/)
      setVisible(false);
    else
      setVisible(true);
  }, [scroll.y, scroll.lastY]);

  return (
    <div className={visible ? "gpt3__navbar" : "gpt3__navbar-hidden"}>
        <div className="gpt3__navbar-links">
          <div className='gpt3__navbar-links_logo'>
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <div className='gpt3__navbar-links_container'>
             <Menu />
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p className="navbar__hover-underline-animation"><Link to="Kontakta-Oss">Kontakta oss</Link></p>
        </div>
    </div>
  )
}

export default Navbar