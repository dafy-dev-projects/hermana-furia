import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "../styles/App.scss";
import Landing from './Landing';
import Music from './Music';
import Tour from './Tour';
import Shop from './Shop';
import Contact from './Contact';
import Professional from './Professional';
import NotFound from './NotFound';
import Cookies from './Cookies'; 
import CookiesPolicy from './CookiesPolicy';

function App() {

  return (
    <>
      <Cookies />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/conciertos" element={<Tour />} />
        <Route path="/musica" element={<Music />} />
        <Route path="/tienda" element={<Shop />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/profesional" element={<Professional />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
