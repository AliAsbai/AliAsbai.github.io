import React, { useLayoutEffect } from 'react';
import { Modul1, Footer } from './containers';
import './App.css';
import { GoTop, NavMenu } from './components';

const App = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="App" id="outer-container">
        <Modul1 />
        <Footer />
        <GoTop />
    </div>
  )
}
export default App;
