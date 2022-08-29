import React, { useState, useEffect } from 'react';
import useScrollListener from '../useScrollListener/UseScrollListener';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import './navMenu.css';

const NavMenu = () => {
  const [visible, setVisible] = useState(true);
  const scroll = useScrollListener();
  useEffect(() => {
    if(scroll.y > 550)
      setVisible(false);
    else
      setVisible(true);
  }, [scroll.y, scroll.lastY]);

  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => {
   setIsOpen(!isOpen);
};

  return (
    <>
        {
            isOpen ?
            <div className='hoja__navmenu-menu'>
              <CgClose className='hoja_navmenu-menu_close' onClick={showMenu} />
                <ol className='hoja__navmenu-menu_hover-underline-animation'>
                    <li>
                        <a href='#modul1' onClick={showMenu}>Modul 1</a>
                        <ol>
                            <li><a href='#modul1Story' onClick={showMenu}>Användarberättelse</a></li>
                        </ol>
                    </li>
                    <li>modul2</li>
                    <li>modul2</li>
                    <li title='Modul1'>
                        <a href='#modul1'>Modul 1</a>
                        <ol>
                            <li><a href='#modul1Story'>Användarberättelse</a></li>
                            <li>modul2</li>
                            <li>modul2</li>
                        </ol>
                    </li>
                    <li>modul2</li>
                </ol>
            </div>
            :
            <BiMenu className={visible ? 'hoja__navmenu-hidden' : 'hoja__navmenu'} onClick={showMenu} />
        }
    </>
  )
}

export default NavMenu