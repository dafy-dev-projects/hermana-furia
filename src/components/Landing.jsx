// Landing.jsx
import React from 'react';
import Header from './Header';
import "../styles/layout/Landing.scss";

const Landing = () => {
  return (
    <div className="main--img">
      <div className="hover--img"></div>
      <Header />
      {/* Contenido adicional de la Landing si es necesario */}
    </div>
  );
};

export default Landing;
