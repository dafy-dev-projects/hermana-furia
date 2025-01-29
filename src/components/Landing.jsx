import React from 'react';
import Header2 from './Header2'


import "../styles/layout/Landing.scss";

const Landing = () => {
  return (
    <div className="main--img__landing">
        {/* <video autoPlay muted loop playsinline className="background-video">
        <source src="/hermana-furia/video/Hermana_Furia_B1.mp4" type="video/mp4" />
        Tu navegador no soporta videos en formato MP4.
      </video> */}
        <img className="background-video" src="./images/Hermana_Furia_BV1_baja.gif" alt="Animación" />

      <h1 className='main-title'>HERMANA FURIA</h1>

      <Header2 />
    </div>
  );
};

export default Landing;