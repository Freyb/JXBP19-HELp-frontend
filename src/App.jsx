import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "./components/Map";
import Prefdropdown from "./components/Prefdropdown";
import "./App.css";
import queryHeatmap from "./util/queryHeatmap";
import queryPlaces from "./util/queryPlaces";

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  console.log(node)
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
  const [places, setPlaces] = useState([]);
  const [marker, setMarker] = useState();

  const onChangePrefs = async newPrefs => {
    animateCSS('.dropdowncard', 'pulse')
    const heatmapData = await queryHeatmap({ tags: newPrefs });
    console.log("Heatmap: ", heatmapData)
    setHeatmap(heatmapData);
  }
  const onMapClick = async (event) => {
    setMarker(event.latLng);
    const places = await queryPlaces(event.latLng.lat, event.latLng.lng);
    console.log("Places: ", places)
    setPlaces(places);
    animateCSS('.placescard', 'pulse')
  }

  return (
    <Container fluid>
      <Row>
        <Col md="3">
          <Prefdropdown onChange={onChangePrefs} places={places} />
        </Col>
        <Col md="9" className="p-0">
          <Map heatmap={heatmap} onClick={onMapClick} marker={marker} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
