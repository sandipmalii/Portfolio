import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
//import './YourStyles.css';  /// animatation 

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {/*
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
     </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
*/} 

      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        </Col>

       <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
     
    </Row>
  );
}

export default Toolstack;
