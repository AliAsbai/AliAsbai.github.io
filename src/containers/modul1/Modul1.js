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
      <div className='section__padding'>
        <Intro 
        title={Values.intro.title}
        summary={Values.intro.summary}
        video={Values.intro.video}
        subtitle={Values.intro.subtitle}
        paragraphs={Values.intro.paragraphs} />
      </div>
      <div className='hoja__modul1-dark section__padding'><ONE /></div>
      <div className='section__padding'><TWO /></div>
      <div className='hoja__modul1-dark section__padding'><THREE /></div>
      <div className='section__padding'><FOUR /></div>
      <div className='hoja__modul1-dark section__padding'><FIVE /></div>
      <div className='section__padding'><SIX /></div>
    </div>
  )
}
export default Modul1