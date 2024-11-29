
import React, { createContext, useState, useContext } from 'react';

const HoverContext = createContext();

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

export const useHover = () => {
  return useContext(HoverContext);
};
