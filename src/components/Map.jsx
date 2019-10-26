import React from 'react';
import config from '../config.json';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 60.166557, lng: 24.931950 }}
    >
        <Marker
            position={{ lat: 60.166557, lng: 24.931950 }}
        />
    </GoogleMap>
));

function Map() {
    return <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />;
}

export default Map;