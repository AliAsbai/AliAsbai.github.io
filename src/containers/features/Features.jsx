import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Vår affärsidé',
    text: 'Att utföra städtjänster till ett konkurrensmässigt pris med huvudfokus på hög servicestandard och 100% kundnöjdhet.'
  },
  {
    title: 'Vår vision',
    text: 'Vår vision är att vara ett etablerat och nyskapande företag som alltid är det självklara valet för kunden. Kvalitet, noggrannhet och tillgänglighet är tre ledord som ska genomsyra hela företaget.'
  },
  {
    title: 'Våra värderingar',
    text: <span>
        Vi på MZ Städservice Nacka är ett företag som värdesätter kundnöjdhet och en sund arbetsmiljö för våra anställda.
        <br/><br/>
       Våra främsta värderingar är:
        <ul>
          <li>Kvalitet: En grundpelare i vår affärsidé är att alltid leverera kvalité</li>
          <li>Noggrannhet: De små detaljerna är minst lika viktiga</li>
          <li>Tillgänglighet: Vi är tillgängliga när kunden behöver oss</li>
        </ul>
    </span>,
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__margin" id="features">
        <div className="gpt3__features-image" />
        <div className="gpt3__features-container">
          <h1 className="gpt3__features-container_title">MZ Städservice Nacka – Det självklara valet i Stockholm</h1>
          {featuresData.map((item, index) =>(
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
    </div>
  )
}

export default Features