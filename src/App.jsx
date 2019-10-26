import React from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "./components/Map";
import Dropdown from "./components/Dropdown";

import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md="3">
          <Dropdown />
        </Col>
        <Col md="9">
          <Map />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
