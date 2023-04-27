import React from 'react';
import { Link } from 'react-router-dom';
import './success.css';

const Success = () => {
    return (
        <div className="success__container">
            <h1>Tack för din offertförfrågan!</h1>
            <p style={{maxWidth: "600px"}}>Inom kort skickar vi tillbaka en offert! Om du har några frågor går det bra att maila oss på info@mzstädservicenacka.se</p>
            <div>
                <Link to="/"><button type="button">Till startsidan</button></Link>
                <Link to="/Om-Stadservice-Nacka"><button type="button">Läs mer om oss</button></Link>
            </div>
        </div>
    )
}

export default Success