import React from 'react'
import Header2 from './Header2';

import "../styles/layout/Music.scss";
import pic3 from '../images/HermanaFuria-pic3.png';
import pic4 from '../images/HermanaFuria-pic4.png';



function Music() {
  return (
    <>
     <div className="dossier--link__music">
        <div className="grid--music">
            <div className="grid--music__div">
            <a href="https://orcd.co/todo-mal_hermana-furia_digital" target='about_blank' rel='noopener noreferrer'>
                    <img className="music--img" src={pic4} alt="portada del disco todo mal "/>
            </a>
            <a href="https://orcd.co/todo-mal_hermana-furia_digital" className="music--link" target='about_blank' rel='noopener noreferrer'>ESCUCHAR</a>
            </div> 
            <div className="grid--music__div">
            <a href="https://orcd.co/turbo_hermana_furia"target='about_blank' rel='noopener noreferrer'>
                    <img className="music--img" src={pic3} alt="portada del single turbo"/>
                </a>
                <a href="https://orcd.co/turbo_hermana_furia" className="music--link" target='about_blank' rel='noopener noreferrer'>ESCUCHAR</a>
            </div> 
            <div className="grid--music__div">
          
            <iframe
                className="music--iframe"
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/videoseries?list=PLByzmHUPHNyEZyOOQVxc8RKdXtblcUTyS"
                title="YouTube Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          
                <a href="https://www.youtube.com/embed/videoseries?list=PLByzmHUPHNyEZyOOQVxc8RKdXtblcUTyS" className="music--link" target='about_blank' rel='noopener noreferrer'>YOUTUBE</a>
            </div> 
        </div>
    </div>
    <div className="main--img__nb">
        <Header2/>
    </div>
    
    </>
   
  )
}

export default Music