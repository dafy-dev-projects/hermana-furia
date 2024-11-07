// Tour.jsx
import React from 'react';
import Header2 from './Header2';

import "../styles/layout/Tour.scss";

const Tour = () => {
  return (
    <div className="main--img__nb">
      <Header2 />
      <div className="dossier--link__tour">
        <div className="grid--tour">
          <div>
            <p className="tour--dates">VITORIA GASTEIZ / BELAR SOUND / 14.09.2024 </p>
          </div>
          <div>
            <p className="tour--dates">LA SOLANA - CIUDAD REAL / LA REINA DEL ROCK / 21.09.2024 </p>
          </div>
          <div>
            <p className="tour--dates">SALAMANCA / ASTRO ROCK / 12.10.2024  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
