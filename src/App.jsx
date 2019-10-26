import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "./components/Map";
import Prefdropdown from "./components/Prefdropdown";

import "./App.css";
import queryHeatmap from "./util/queryHeatmap";

function App() {
  const [heatmap, changeHeatmap] = useState([]);
  const onChangePrefs = async newPrefs => {
    changeHeatmap(await queryHeatmap({ tags: newPrefs }));
  }

  return (
    <Container fluid>
      <Row>
        <Col md="3">
          <Prefdropdown onChange={onChangePrefs} />
        </Col>
        <Col md="9">
          <Map heatmap={heatmap} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
