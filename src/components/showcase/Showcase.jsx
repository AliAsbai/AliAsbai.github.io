import React, { useState } from 'react';
import './showcase.css';

const useMove = () => {
    const [state, setState] = useState({x: 0, y: 0})
  
    const handleMouseMove = e => {
        e.persist()
        var rect = e.currentTarget.getBoundingClientRect();

        var realX = e.clientX - rect.left - rect.width/2;
        var realY = e.clientY - rect.top - rect.height/2;

        var magV = Math.sqrt(realX*realX + realY*realY);
        var radius = magV * 0.15;
        var tranX = radius * (realX / magV);
        var tranY = radius * (realY / magV);

        setState(state => ({...state, x: tranX, y: tranY}))
    }

    const handleMouseLeave = e => {
        setState(state => ({...state, x: 0, y: 0}))
    }

    return {
      x: state.x,
      y: state.y,
      handleMouseMove,
      handleMouseLeave,
    }
  }

const Showcase = ({ title, imgUrl, border }) => {    
    const {x, y, handleMouseMove, handleMouseLeave} = useMove()

    return (
        <div className="showcase__container" id={`border-${border}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className='showcase__container-gradient'>
                <div className='showcase__container-ball' style={{ transform: `translate(${x}px, ${y}px)`, transition: `transform 0.2s linear` }} >
                    <p>{ title }</p>
                </div>
            </div>
        </div>
    )
}

export default Showcase