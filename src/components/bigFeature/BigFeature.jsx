import React from 'react'
import './bigFeature.css';

const BigFeature = ({ title, text }) => {
  return (
    <div className="gpt3__bigFeatures-container__feature">
        <div className="gpt3__bigFeatures-container__feature-title">
          <h1>{title}</h1>
        </div>
        <div className="gpt3__bigFeatures-container_feature-text">
          <p>{text}</p>
        </div>
    </div>
  )
}

export default BigFeature