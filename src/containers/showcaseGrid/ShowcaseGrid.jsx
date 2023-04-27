import React from 'react';
import { Link } from 'react-router-dom';
import { Showcase } from '../../components';
import FadeIn from 'react-fade-in';
import './showcaseGrid.css';

const ShowcaseGrid = ({ prop }) => {
  return (
    <FadeIn className='showcaseGrid__container section__padding' transitionDuration={1000} delay={80}>
        <Link to={prop.link01}><Showcase title={prop.title01} imgUrl={prop.image01} border="top-left" /></Link>
        <Link to={prop.link02}><Showcase title={prop.title02} imgUrl={prop.image02} border="top-both" /></Link>
        <Link to={prop.link03}><Showcase title={prop.title03} imgUrl={prop.image03} border="top-right" /></Link>
        <Link to={prop.link04}><Showcase title={prop.title04} imgUrl={prop.image04} border="both-left" /></Link>
        <Link to={prop.link05}><Showcase title={prop.title05} imgUrl={prop.image05} border="all" /></Link>
        <Link to={prop.link08}><Showcase title={prop.title08} imgUrl={prop.image08} border="both-right" /></Link>
        <Link to={prop.link09}><Showcase title={prop.title09} imgUrl={prop.image09} border="bottom-both" /></Link>
    </FadeIn>
  )
}

export default ShowcaseGrid