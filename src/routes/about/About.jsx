import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brand } from '../../components';
import './about.css';

const About = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

  return (
    <div className="about__container header__padding">
        <div className="about__container-content">
            <h1>Vi jobbar med städ och fastighetsskötsel</h1>
            <div className="about__container-content-body">
                <div className="about__container-content-body_title">
                    <div className="about__container-content-body_marker"/>
                    <p>Introduktion</p>
                </div>
                <div className="about__container-content-body_text">
                    <p>Välkommen till MZ Städservice Nacka, där vi har som mål att erbjuda den bästa städtjänsten till våra kunder. Vi har en stark passion för rengöring och vill alltid säkerställa att våra kunders lokaler är så rena och väl underhållna som möjligt.</p>
                    <p>Vi har ett starkt fokus på kvalitet, noggrannhet och tillgänglighet. Vi tror att det är detaljerna som räknas och vi strävar alltid efter att leverera en konsekvent hög kvalitet på våra städtjänster.</p>
                    <p>Vi är noga med att utföra varje uppgift med noggrannhet och är ständigt engagerade i att förbättra våra processer för att säkerställa att vi levererar den bästa städtjänsten som möjligt.</p>   
                </div>    
            </div>
        </div>
        <Brand />
        <div className="about__container-content">
            <div className="about__container-content-body">
                <div className="about__container-content-body_title">
                    <div className="about__container-content-body_marker"/>
                    <p>Vad skiljer oss från andra?</p>
                </div>
                <div className="about__container-content-body_text">
                    <p>Vi förstår att tillgänglighet är viktigt för våra kunder, så vi strävar alltid efter att vara tillgängliga när det behövs och att leverera en städtjänst som passar in i våra kunders scheman. Vi är också angelägna om att alltid vara lätta att nå och hantera, så att våra kunder alltid kan få den support de behöver.</p>
                    <p>Vi är stolta över vårt engagemang för kvalitet, noggrannhet och tillgänglighet och vi arbetar hårt för att förbättra och utveckla vår tjänst för att säkerställa att vi alltid är ett pålitligt och ansvarsfullt städföretag. Tveka inte att kontakta oss för att diskutera dina städbehov och hur vi kan hjälpa dig att få en ren och välmående arbetsmiljö.</p> 
                </div>    
            </div>
        </div>
        <div className="about__container-buttons">
            <Link to="/Offertforfragan"><input type="button" value="Gör en offertförfrågan" /></Link>
            <Link to="/Tjanster"><input type="button" value="Läs mer om våra tjänster" /></Link>
        </div>
    </div>
  )
}

export default About