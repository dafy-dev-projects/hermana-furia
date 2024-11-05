import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "../styles/App.scss";
import Landing from './Landing';
import NotFound from './NotFound';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
