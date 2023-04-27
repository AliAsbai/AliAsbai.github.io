import React, { useState, useEffect } from 'react';
import useScrollListener from '../useScrollListener/UseScrollListener';
import { RiArrowUpCircleFill } from 'react-icons/ri';
import './goTop.css';

const GoTop = () => {
  const [visible, setVisible] = useState(true);
  const scroll = useScrollListener();
  useEffect(() => {
    if(scroll.y > 550)
      setVisible(false);
    else
      setVisible(true);
  }, [scroll.y, scroll.lastY]);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  return (
    <RiArrowUpCircleFill className={visible ? "gpt3__gotop-hidden" : "gpt3__gotop"} onClick={ goToTop } />
  )
}

export default GoTop