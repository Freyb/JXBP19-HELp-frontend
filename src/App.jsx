import React from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "./components/Map";
import Prefdropdown from "./components/Prefdropdown";

import "./App.css";

function App() {
  const notify = data => console.log(data);

  return (
    <Container fluid>
      <Row>
        <Col md="3">
          <Prefdropdown onChange={notify} />
        </Col>
        <Col md="9">
          <Map />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
