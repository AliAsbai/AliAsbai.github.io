import React, { useLayoutEffect } from 'react';
import { Blog, Features, Header, WriteUs } from './containers';
import { Brand } from './components';
import header01 from './assets/header01.png';
import './App.css';

const headerData = {
  imgUrl: header01,
  title: "MZ Städservice Nacka",
  text: "Söker du en städfirma i Stockholm som levererar resultat? MZ Städservice Nacka är ett stockholmsbaserat städföretag med fokus på kvalité, noggrannhet och tillgänglighet.",
  button1: {
    text: "Boka städning",
    reff: "/Offertforfragan",
  },
  button2: {
    text: "Läs mer om oss",
    reff: "/Om-Städservice-nacka",
  },
} 

const App = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="App" id="outer-container">
        <Header prop={ headerData } />
        <Brand />
        <Blog />
        <Features />
        <WriteUs />
    </div>
  )
}

export default App