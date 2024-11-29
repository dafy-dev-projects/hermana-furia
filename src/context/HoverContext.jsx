// HoverContext.js
import React, { createContext, useState, useContext } from 'react';

// Crear un contexto
const HoverContext = createContext();

// Crear un proveedor de contexto
export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkHover = (hoverState) => {
    setIsHovered(hoverState);
  };

  return (
    <HoverContext.Provider value={{ isHovered, handleLinkHover }}>
      {children}
    </HoverContext.Provider>
  );
};

// Hook para usar el contexto
export const useHover = () => {
  return useContext(HoverContext);
};
