import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "./components/Map";
import Prefdropdown from "./components/Prefdropdown";
import "./App.css";
import queryHeatmap from "./util/queryHeatmap";
import queryPlaces from "./util/queryPlaces";

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', 'faster', animationName)

  function handleAnimationEnd() {
    node.classList.remove('animated', 'faster', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

function App() {
  const [heatmap, setHeatmap] = useState([]);
  const [places, setPlaces] = useState();
  const [markerPosition, setMarkerPosition] = useState();
  const [tags, setTags] = useState([])

  const updatePlaces = async (markerPosition, tags) => {
    if (!markerPosition) {
      setPlaces(undefined);
      return;
    }
    setPlaces(await queryPlaces(markerPosition.lat, markerPosition.lng, tags.map(tag => tag.name)));
    animateCSS('.placescard', 'pulse');
  }

  const onChangePrefs = async newPrefs => {
    setTags(newPrefs);
    updatePlaces(markerPosition, newPrefs);
    const heatmapData = await queryHeatmap({ tags: newPrefs });
    console.log("Heatmap: ", heatmapData)
    setHeatmap(heatmapData);
  }
  const onMapClick = async (event) => {
    setMarkerPosition(event.latLng);
    updatePlaces(event.latLng, tags)
    console.log("Places: ", places)
  }

  return (
    <Container fluid>
      <Row>
        <Col md="3">
          <Prefdropdown onChange={onChangePrefs} places={places} />
        </Col>
        <Col md="9" className="p-0">
          <Map heatmap={heatmap} onClick={onMapClick} marker={markerPosition} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
