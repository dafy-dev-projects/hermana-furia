import React from 'react';
import Header2 from './Header2';
import CanvasAnimation from './CanvasAnimation'; // Importa el nuevo componente

import "../styles/layout/Landing.scss";

const Landing = () => {
  return (
    <div className="main--img__landing">
      <CanvasAnimation /> {/* Añade la animación */}
      <div className="hover--img"></div>
      <Header2 />
    </div>
  );
};

export default Landing;
