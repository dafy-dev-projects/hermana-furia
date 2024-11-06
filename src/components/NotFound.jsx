import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/layout/NotFound.scss";


const NotFound = () => {
  return (
    <div className="main--img">

      <h1 className='notfound__title--text'>PAGE NOT FOUND</h1>
      <Link className="notfound__link" to="/">HOME</Link>

    </div>
  );
}

export default NotFound