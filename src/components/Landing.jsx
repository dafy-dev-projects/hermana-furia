import React from 'react';
import Header2 from './Header2';
import "../styles/layout/Landing.scss";
import { useHover } from '../context/HoverContext.jsx';

const Landing = () => {
  const { isHovered } = useHover();  

  return (
    <div className={`main--img__landing ${isHovered ? 'hovered' : ''}`}>
      <Header2 />
    </div>
  );
};

export default Landing;
