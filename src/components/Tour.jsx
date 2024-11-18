

import React, { useEffect } from 'react'; 
import Header2 from './Header2';  
import "../styles/layout/Tour.scss";  

const Tour = () => { 
  useEffect(() => {

    const scriptId = 'bandsintown-widget';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = "https://widgetv3.bandsintown.com/main.min.js";
      script.id = scriptId;
      script.async = true;
      script.onload = () => {

        console.log('Script de Bandsintown cargado');
      };
      document.body.appendChild(script);
    }

    
    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);  

  return ( 
    <div className="main--img__nb"> 
      <Header2 /> 
      <div className='widget--container'>
      <a className="bit-widget-initializer"
         data-artist-name="id_15506284"
         data-events-to-display=""
         data-background-color="rgba(0, 0, 0, 0.6)"
         data-separator-color="rgba(221,221,221,1)"
         data-text-color="rgb(255, 255, 255)"
         data-font="Helvetica"
         data-auto-style="true"
         data-button-label-capitalization="uppercase"
         data-header-capitalization="uppercase"
         data-location-capitalization="uppercase"
         data-venue-capitalization="uppercase"
         data-display-local-dates="true"
         data-local-dates-position="tab"
         data-display-past-dates="true"
         data-display-details="true"
         data-display-lineup="false"
         data-display-start-time="true"
         data-social-share-icon="true"
         data-display-limit="all"
         data-date-format="DD/MM/YY"
         data-date-orientation="horizontal"
         data-date-border-color="#4A4A4A"
         data-date-border-width="1px"
         data-date-capitalization="capitalize"
         data-date-border-radius="10px"
         data-event-ticket-cta-size="medium"
         data-event-custom-ticket-text=""
         data-event-ticket-text="TICKETS"
         data-event-ticket-icon="false"
         data-event-ticket-cta-text-color="rgba(255,255,255,1)"
         data-event-ticket-cta-bg-color="rgb(165, 42, 42)"
         data-event-ticket-cta-border-color="rgba(208,2,27,1)"
         data-event-ticket-cta-border-width="0px"
         data-event-ticket-cta-border-radius="2px"
         data-sold-out-button-text-color="rgba(255,255,255,1)"
         data-sold-out-button-background-color="rgba(208,2,27,1)"
         data-sold-out-button-border-color="rgb(165, 42, 42)"
         data-sold-out-button-clickable="true"
         data-event-rsvp-position="left"
         data-event-rsvp-cta-size="medium"
         data-event-rsvp-only-show-icon="false"
         data-event-rsvp-text="RSVP"
         data-event-rsvp-icon="false"
         data-event-rsvp-cta-text-color="rgba(189,16,224,1)"
         data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
         data-event-rsvp-cta-border-color="rgba(208,2,27,1)"
         data-event-rsvp-cta-border-width="1px"
         data-event-rsvp-cta-border-radius="2px"
         data-follow-section-position="top"
         data-follow-section-alignment="center"
         data-follow-section-header-text="Get updates on new shows, new music, and more"
         data-follow-section-cta-size="medium"
         data-follow-section-cta-text="FOLLOW"
         data-follow-section-cta-icon="false"
         data-follow-section-cta-text-color="rgba(255,255,255,1)"
         data-follow-section-cta-bg-color="rgba(165, 42, 42)"
         data-follow-section-cta-border-color="rgba(208,2,27,1)"
         data-follow-section-cta-border-width="0px"
         data-follow-section-cta-border-radius="2px"
         data-play-my-city-position="bottom"
         data-play-my-city-alignment="center"
         data-play-my-city-header-text="¿Dónde nos quieres ver?"
         data-play-my-city-cta-size="medium"
         data-play-my-city-cta-text="Solicitar un concierto"
         data-play-my-city-cta-icon="false"
         data-play-my-city-cta-text-color="rgba(255,255,255,1)"
         data-play-my-city-cta-bg-color="rgb(165, 42, 42)"
         data-play-my-city-cta-border-color="rgba(208,2,27,1)"
         data-play-my-city-cta-border-width="0px"
         data-play-my-city-cta-border-radius="2px"
         data-language="es"
         data-layout-breakpoint="900"
         data-app-id=""
         data-affil-code=""
         data-bit-logo-position="hidden"
         data-bit-logo-color="rgba(66,66,66,1)">
      </a> 

      </div>
    
    </div> 
  ); 
} 

export default Tour;
