import React from 'react';
import config from '../config.json';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer';


const MapWithAMarker = withScriptjs(withGoogleMap(props => {

    const google = window.google;

    const heatmapData = [
        {
            location: new google.maps.LatLng(60.166557, 24.931950),
            weight: 1
        },
        {
            location: new google.maps.LatLng(60.166480, 24.930555),
            weight: .6
        },
        {
            location: new google.maps.LatLng(60.166480, 24.932555),
            weight: .6
        },
        {
            location: new google.maps.LatLng(60.166480, 24.93355),
            weight: .6
        },
        {
            location: new google.maps.LatLng(60.166480, 24.934555),
            weight: .6
        },
    ]
    return <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 60.166557, lng: 24.931950 }}
    >
        <Marker
            position={{ lat: 60.166557, lng: 24.931950 }}
        />
        <HeatmapLayer
            data={heatmapData}
            options={{
                radius: 40,
            }} />
    </GoogleMap>
}));

function Map() {
    return <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsKey}&v=3.exp&libraries=geometry,drawing,places,visualization`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />;
}

export default Map;