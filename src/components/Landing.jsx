import React from 'react';
import Header2 from './Header2';

import "../styles/layout/Landing.scss";

const Landing = () => {
  return (
    <div className="main--img__landing">
        <video autoPlay muted loop className="background-video">
        <source src="video/Hermana_Furia_B1.mp4" type="video/mp4" />
        Tu navegador no soporta videos en formato MP4.
      </video>
      <h1 className='main-title'>HERMANA FURIA</h1>

      <Header2 />
    </div>
  );
};

export default Landing;