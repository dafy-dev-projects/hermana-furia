// Landing.js
import React from 'react';
import Header2 from './Header2';
import "../styles/layout/Landing.scss";
import { useHover } from '../context/HoverContext.jsx';

const Landing = () => {
  const { isHovered } = useHover();  // Usamos el contexto para obtener el estado de hover

  return (
    <div className={`main--img__landing ${isHovered ? 'hovered' : ''}`}>
      <Header2 />
    </div>
  );
};

export default Landing;
