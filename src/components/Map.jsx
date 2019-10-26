import React from 'react';
import config from '../config.json';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer';


const MapWithAMarker = withScriptjs(withGoogleMap(({ heatmap }) => {

    return <GoogleMap
        defaultZoom={14}
        options={{ minZoom: 14, maxZoom: 14, zoomControl: false }}
        defaultCenter={{ lat: 60.166557, lng: 24.931950 }}
    >
        <Marker
            position={{ lat: 60.166557, lng: 24.931950 }}
        />
        <HeatmapLayer
            data={heatmap}
            options={{
                radius: 40,
            }} />
    </GoogleMap>
}));

function Map({ heatmap }) {
    return <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsKey}&v=3.exp&libraries=geometry,drawing,places,visualization`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        heatmap={heatmap}
    />;
}

export default Map;