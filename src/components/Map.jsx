import React from 'react';
import config from '../config.json';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer';


const MapWithAMarker = withScriptjs(withGoogleMap(({ heatmap, onClick, marker }) => {

    const heatmapWithLatLon = heatmap.map(heatmapRaw => ({
        location: new window.google.maps.LatLng(heatmapRaw.latitude, heatmapRaw.longitude),
        weight: heatmapRaw.weight
    }));

    return <GoogleMap
        onClick={onClick}
        defaultZoom={14}
        options={{
            minZoom: 14,
            maxZoom: 14,
            zoomControl: false,
            clickableIcons: false,
            restriction: {
                latLngBounds:
                {
                    north: 60.185437,
                    south: 60.141590,
                    west: 24.889979,
                    east: 25.002071
                }
            }
        }}
        defaultCenter={{ lat: 60.166557, lng: 24.931950 }}
    >
        <HeatmapLayer
            data={heatmapWithLatLon}
            options={{
                radius: 40,
            }} />

        {marker && <Marker position={marker} />}
    </GoogleMap>
}));

function Map(props) {
    return <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsKey}&v=3.exp&libraries=geometry,drawing,places,visualization`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: '100vh' }} />}
        mapElement={<div style={{ height: `100% ` }} />}
        {...props}
    />;
}

export default Map;