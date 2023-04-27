import React from 'react';
import { Article } from '../../components';
import { blog00, blog01, blog02, blog07 } from './imports';
import './blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
      <div className="gpt3__blog-container section__margin" id="blog">
        <div className="gpt3__blog-container_groupA">
          <h3>Våra Tjänster</h3>
          <p>Våra tjänster är specialanpassade för företag och föreningar i Stockholm som söker regelbunden företagsstädning. Vi erbjuder tjänster i form av butiksstädning, kontorsstädning och trappstädning. Klicka på länken nedan för vidare information.</p>
          <div className="gpt3__blog-container_groupA-links">
            <Link to="Offertforfragan" className="blog__hover-underline-animation" >Offertförfrågan</Link>
            <Link to="Tjanster" className="blog__hover-underline-animation" >Se alla våra tjänster</Link>
          </div>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Link to="Tjanster/0"><Article imgUrl={blog00} title="Kontorsstädning" /></Link>
          <Link to="Tjanster/1"><Article imgUrl={blog01} title="Trappstädning" /></Link>
          <Link to="Tjanster/2"><Article imgUrl={blog02} title="Butiksstädning" /></Link>
          <Link to="Tjanster/5"><Article imgUrl={blog07} title="Visningsstädning" /></Link>
        </div>
      </div>
  )
}

export default Blog