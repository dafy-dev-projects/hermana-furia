import React from 'react';
// import { Link } from 'react-router-dom';
import Button from './Button';
import "../styles/layout/Landing.scss";

const Landing = () => {
  return (
    <div>
        <div className="landing">
          <div className="title">
            <h1>HELLO WORLD</h1>
            <h2>This is a React Template</h2>
            <Button /> 
          </div>
          {/* <nav className="landing__nav">
            <Link to="/AboutMe">ABOUT ME</Link>
            <Link to="/Projects">PROJECTS</Link>
            <Link to="/Contact">CONTACT</Link>
          </nav> */}
        </div>
      </div>
    );
}

export default Landing;
