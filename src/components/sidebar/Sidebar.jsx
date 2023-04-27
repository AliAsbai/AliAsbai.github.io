import React, { useState, useEffect, useContext } from 'react';
import useScrollListener from '../useScrollListener/UseScrollListener';
import { slide as Menu } from 'react-burger-menu';
import { RiMenu3Line, RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './sidebar.css';

const MyContext = React.createContext();

const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false)

    return (
        <MyContext.Provider value={{
            isMenuOpen: menuOpenState,
            toggleMenu: () => setMenuOpenState(!menuOpenState),
            stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const Navigation = () => {
    const ctx = useContext(MyContext)

    const [visible, setVisible] = useState(true);
    const scroll = useScrollListener();
    useEffect(() => {
      if(scroll.y > 150 /*&& scroll.y - scroll.lastY > 0*/)
        setVisible(false);
      else
        setVisible(true);
    }, [scroll.y, scroll.lastY]);

    return (
        <Menu 
                right
                customBurgerIcon={ <RiMenu3Line /> }
                customCrossIcon={ <RiArrowRightLine /> }
                isOpen={ctx.isMenuOpen}
                onStateChange={(state) => ctx.stateChangeHandler(state)}
                disableAutoFocus
                burgerButtonClassName={visible ? "" : "bm-burger-button_hidden"} >
                <Link className="sidebar__hover-underline-animation" to="Tjanster" onClick={ ctx.toggleMenu } >Tjänster</Link>
                <Link className="sidebar__hover-underline-animation" to="Offertforfragan" onClick={ ctx.toggleMenu } >Offertförfrågan</Link>
                <Link className="sidebar__hover-underline-animation" to="Kontakta-Oss" onClick={ ctx.toggleMenu } >Kontakta oss</Link>
                <Link className="sidebar__hover-underline-animation" to="Om-Stadservice-Nacka" onClick={ ctx.toggleMenu } >Om MZ Städservice Nacka</Link>
                <Link className="sidebar__hover-underline-animation" to="Faq" onClick={ ctx.toggleMenu } >Frågor & svar</Link>
            </Menu>
    )
}

const Sidebar = () => {
    return (
        <MyProvider>
            <Navigation />
        </MyProvider>
    );
}

export default Sidebar;