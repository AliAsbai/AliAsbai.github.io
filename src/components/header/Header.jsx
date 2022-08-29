import React from 'react';
import { Video } from '..';
import Values from '../../containers/modul1/Values';
import './header.css';

const Header = () => (
  <div className="hoja__header" id="hoja__header">
    <div className="hoja__columns">
      <div>
        <h1>Att leva med våld</h1>
        <p>Möt Gulderen. Gulderen har i 22 år levt i en nära relation som har präglats av våld. Du får följa hennes livsberättelse där hon pratar om våldet, vilka konsekvenser det har fått och hur hon har tagit sig vidare.</p>
      </div>
      <div>
        <Video video={Values.intro.video} />
      </div>
    </div>
  </div>
);

export default Header;
