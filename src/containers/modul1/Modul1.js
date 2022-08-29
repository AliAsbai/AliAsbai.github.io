import React from 'react';
import { Header, Intro } from '../../components';
import { ONE, TWO, THREE, FOUR, FIVE, SIX } from './delar';
import Values from './Values';
import './modul1.css';

const Modul1 = () => {
  return (
    <div id='modul1' className='hoja__modul1'>
      <div className='hoja__modul1-header section__padding'>
        <Header
        title={Values.intro.title}
        summary={Values.intro.summary}
        video={Values.intro.video} />
        </div>
      <div className='hoja__modul1-intro section__padding'>
        <Intro 
        title={Values.intro.title}
        summary={Values.intro.summary}
        video={Values.intro.video}
        subtitle={Values.intro.subtitle}
        paragraphs={Values.intro.paragraphs} />
      </div>
      <div className='hoja__modul1-one section__padding'><ONE /></div>
      <div className='hoja__modul1-two section__padding'><TWO /></div>
      <div className='hoja__modul1-three section__padding'><THREE /></div>
      <div className='hoja__modul1-four section__padding'><FOUR /></div>
      <div className='hoja__modul1-five section__padding'><FIVE /></div>
      <div className='hoja__modul1-six section__padding'><SIX /></div>
    </div>
  )
}
export default Modul1