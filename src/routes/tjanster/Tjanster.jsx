import React, { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../containers';
import Values from './Values';
import './tjanster.css';

const Tjanster = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className='tjanster__container'>
      <Header prop={ Values.header } />
      <Outlet />
    </div>
  )
}

export default Tjanster