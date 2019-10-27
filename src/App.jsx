import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "./components/Map";
import Prefdropdown from "./components/Prefdropdown";

import "./App.css";
import queryHeatmap from "./util/queryHeatmap";

function App() {
  const [heatmap, changeHeatmap] = useState([]);
  const onChangePrefs = async newPrefs => {
    const heatmapData = await queryHeatmap({ tags: newPrefs });
    console.log(heatmapData)
    changeHeatmap(heatmapData);
  }

  return (
    <Container fluid>
      <Row>
        <Col md="3">
          <Prefdropdown onChange={onChangePrefs} places={[{ "name": "Helsinkee Sauna", "id": 1 }, { "name": "BeEr", "id": 2 }, { "name": "BeerSauna", "id": 3 },]} />
        </Col>
        <Col md="9" className="p-0">
          <Map heatmap={heatmap} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
