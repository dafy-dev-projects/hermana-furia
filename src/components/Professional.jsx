import React from 'react'
import Header from './Header'
import "../styles/layout/Professional.scss";




function Professional() {
  return (
    <>
     <div className="dossier--link">
        <div className="grid">
            <a href="" rel="noopener noreferrer" download="" >
                <button className="btn">
                    DOSSIER
                </button>
            </a>
            <a href="" rel="noopener noreferrer" download="" >
                <button className="btn">
                    PICS
                </button>
            </a>
            <a href="" rel="noopener noreferrer" download="" >
                <button className="btn">
                    PRESS
                </button>
            </a>
            <a href="" rel="noopener noreferrer" download="" >
                <button className="btn">
                    RIDER
                </button>
            </a>
        </div>
    </div>
    
    <div className="main--img__profesional">
           <Header/>
        </div>
    </>
  )
}

export default Professional