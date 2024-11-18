
import React from 'react';
import Header2 from './Header2';

import "../styles/layout/Tour.scss";

const Tour = () => {
  return (
    <div className="main--img__nb">
      <Header2 />
      <div className="dossier--link__tour">
        <div className="grid--tour">
          <div>
            <p className="tour--dates">VITORIA GASTEIZ / BELAR SOUND / 14.09.2024 </p>
          </div>
          <div>
            <p className="tour--dates">LA SOLANA - CIUDAD REAL / LA REINA DEL ROCK / 21.09.2024 </p>
          </div>
          <div>
            <p className="tour--dates">SALAMANCA / ASTRO ROCK / 12.10.2024  </p>
          </div>
        </div>
      </div>
      {/* <script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></script>
              <a className="bit-widget-initializer"
              
            data-artist-name="id_15506284"

            data-events-to-display=""
            data-background-color="rgba(255,255,255,1)"
            data-separator-color="rgba(221,221,221,1)"
            data-text-color="rgba(66,66,66,1)"
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
            data-event-ticket-cta-bg-color="rgba(144,19,254,1)"
            data-event-ticket-cta-border-color="rgba(208,2,27,1)"
            data-event-ticket-cta-border-width="0px"
            data-event-ticket-cta-border-radius="2px"

            data-sold-out-button-text-color="rgba(255,255,255,1)"
            data-sold-out-button-background-color="rgba(208,2,27,1)"
            data-sold-out-button-border-color="rgba(144,19,254,1)"
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
            data-follow-section-cta-bg-color="rgba(144,19,254,1)"
            data-follow-section-cta-border-color="rgba(208,2,27,1)"
            data-follow-section-cta-border-width="0px"
            data-follow-section-cta-border-radius="2px"

            data-play-my-city-position="bottom"
            data-play-my-city-alignment="center"
            data-play-my-city-header-text="¿Dónde nos quieres ver? "
            data-play-my-city-cta-size="medium"
            data-play-my-city-cta-text="Solicitar un concierto"
            data-play-my-city-cta-icon="false"
            data-play-my-city-cta-text-color="rgba(255,255,255,1)"
            data-play-my-city-cta-bg-color="rgba(144,19,254,1)"
            data-play-my-city-cta-border-color="rgba(208,2,27,1)"
            data-play-my-city-cta-border-width="0px"
            data-play-my-city-cta-border-radius="2px"

            data-optin-font=""
            data-optin-text-color=""
            data-optin-bg-color=""
            data-optin-cta-text-color=""
            data-optin-cta-bg-color=""
            data-optin-cta-border-width=""
            data-optin-cta-border-radius=""
            data-optin-cta-border-color=""

            data-language="es"
            data-layout-breakpoint="900"
            data-app-id=""
            data-affil-code=""
            data-bit-logo-position="hidden"
            data-bit-logo-color="rgba(66,66,66,1)"

    ></a> */}
    </div>
  );
};

export default Tour;


// import React, { useEffect } from 'react';
// import Header2 from './Header2';

// import "../styles/layout/Tour.scss";

// const Tour = () => {
//   useEffect(() => {
//     // Cargar el script de Bandsintown
//     const script = document.createElement('script');
//     script.src = "https://widgetv3.bandsintown.com/main.min.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // Limpiar el efecto eliminando el script cuando el componente se desmonte
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="main--img__nb">
//       <Header2 />
//       <a className="bit-widget-initializer"
//         data-artist-name="id_15506284"
//         data-events-to-display=""
//         data-background-color="rgba(255,255,255,1)"
//         data-separator-color="rgba(221,221,221,1)"
//         data-text-color="rgba(66,66,66,1)"
//         data-font="Helvetica"
//         data-auto-style="true"
//         data-button-label-capitalization="uppercase"
//         data-header-capitalization="uppercase"
//         data-location-capitalization="uppercase"
//         data-venue-capitalization="uppercase"
//         data-display-local-dates="true"
//         data-local-dates-position="tab"
//         data-display-past-dates="true"
//         data-display-details="true"
//         data-display-lineup="false"
//         data-display-start-time="true"
//         data-social-share-icon="true"
//         data-display-limit="all"
//         data-date-format="DD/MM/YY"
//         data-date-orientation="horizontal"
//         data-date-border-color="#4A4A4A"
//         data-date-border-width="1px"
//         data-date-capitalization="capitalize"
//         data-date-border-radius="10px"
//         data-event-ticket-cta-size="medium"
//         data-event-custom-ticket-text=""
//         data-event-ticket-text="TICKETS"
//         data-event-ticket-icon="false"
//         data-event-ticket-cta-text-color="rgba(255,255,255,1)"
//         data-event-ticket-cta-bg-color="rgba(144,19,254,1)"
//         data-event-ticket-cta-border-color="rgba(208,2,27,1)"
//         data-event-ticket-cta-border-width="0px"
//         data-event-ticket-cta-border-radius="2px"
//         data-sold-out-button-text-color="rgba(255,255,255,1)"
//         data-sold-out-button-background-color="rgba(208,2,27,1)"
//         data-sold-out-button-border-color="rgba(144,19,254,1)"
//         data-sold-out-button-clickable="true"
//         data-event-rsvp-position="left"
//         data-event-rsvp-cta-size="medium"
//         data-event-rsvp-only-show-icon="false"
//         data-event-rsvp-text="RSVP"
//         data-event-rsvp-icon="false"
//         data-event-rsvp-cta-text-color="rgba(189,16,224,1)"
//         data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
//         data-event-rsvp-cta-border-color="rgba(208,2,27,1)"
//         data-event-rsvp-cta-border-width="1px"
//         data-event-rsvp-cta-border-radius="2px"
//         data-follow-section-position="top"
//         data-follow-section-alignment="center"
//         data-follow-section-header-text="Get updates on new shows, new music, and more"
//         data-follow-section-cta-size="medium"
//         data-follow-section-cta-text="FOLLOW"
//         data-follow-section-cta-icon="false"
//         data-follow-section-cta-text-color="rgba(255,255,255,1)"
//         data-follow-section-cta-bg-color="rgba(144,19,254,1)"
//         data-follow-section-cta-border-color="rgba(208,2,27,1)"
//         data-follow-section-cta-border-width="0px"
//         data-follow-section-cta-border-radius="2px"
//         data-play-my-city-position="bottom"
//         data-play-my-city-alignment="center"
//         data-play-my-city-header-text="¿Dónde nos quieres ver? "
//         data-play-my-city-cta-size="medium"
//         data-play-my-city-cta-text="Solicitar un concierto"
//         data-play-my-city-cta-icon="false"
//         data-play-my-city-cta-text-color="rgba(255,255,255,1)"
//         data-play-my-city-cta-bg-color="rgba(144,19,254,1)"
//         data-play-my-city-cta-border-color="rgba(208,2,27,1)"
//         data-play-my-city-cta-border-width="0px"
//         data-play-my-city-cta-border-radius="2px"

//         data-optin-font=""
//         data-optin-text-color=""
//         data-optin-bg-color=""
//         data-optin-cta-text-color=""
//         data-optin-cta-bg-color=""
//         data-optin-cta-border-width=""
//         data-optin-cta-border-radius=""
//         data-optin-cta-border-color=""

//         data-language="es"
//         data-layout-breakpoint="900"
//         data-app-id=""
//         data-affil-code=""
//         data-bit-logo-position="hidden"
//         data-bit-logo-color="rgba(66,66,66,1)"

//     ></a>
//     </div>
//   )
// }

//   export default Tour