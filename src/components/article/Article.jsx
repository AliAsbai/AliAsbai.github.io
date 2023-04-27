import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import './article.css';

const Article = ({ imgUrl, title }) => {
  return (
    <div className="gpt3__blog-container_article">
        <div className="gpt3__blog-container_article-image">
          <img src={imgUrl} alt="blog" />
          <h3>{title}</h3>
          <div className="gpt3__blog-container_article-content">
            <RiArrowRightSLine size={35} classname="icon"/>
          </div>
        </div>
    </div>
  )
}

export default Article