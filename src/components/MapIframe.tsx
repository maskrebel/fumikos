import React from "react";
import settings from "./Settings.tsx";
import './MapIframe.css'

const MapIframe: React.FC  = () => {
    return (
        <div className="map-responsive">
            <iframe
                src={settings.urlLocationMap}
                width="600"
                height="450"
                style={{border: 0, width: '70%', height: '250px'}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default MapIframe