import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/drum.png";
import emotion from "../../Assets/Projects/candy.png";
import editor from "../../Assets/Projects/tictac.jpg";
import bitsOfCode from "../../Assets/Projects/dice.jpg";
import gifImage from "../../Assets/Projects/calc.gif"; // Import the GIF image


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few <strong className="Yellow"> projects </strong> I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        <Col md={4} className="project-card">
      <ProjectCard
        imgPath={editor}
        isBlog={false}
        title={<h4 style={{ fontWeight: "bold", textAlign: "center", fontFamily: " Times New Roman" }}>TicTacToe-Game</h4>}
        description={
          <div>
            <h4 style={{ textAlign: "center", fontFamily: "serif" }}>
              Tools Used
            </h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <i className="fab fa-java icon colorful" style={{ color: "#007396" }}></i>
            </div>
          </div>
        }
        ghLink="https://github.com/sandipmalii/TicTacToe-Game"
      />
    </Col>


    <Col md={4} className="project-card">
  <ProjectCard
    imgPath={bitsOfCode}
    isBlog={false}
    title={
      <h4 style={{ fontWeight: "bold", textAlign: "center", fontFamily: "Times New Roman" }}>
        Dice-Roll-Web-Game
      </h4>
    }
    description={
      <div>
        <h4 style={{ textAlign: "center", fontFamily: "serif" }}>
          Tools Used
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <i className="fab fa-js-square icon colorful" style={{ color: "#FFD700" }}></i>
          <i className="fab fa-html5 icon colorful" style={{ color: "#FF7F50" }}></i>
          <i className="fab fa-css3-alt icon colorful" style={{ color: "#1E90FF" }}></i>
        </div>
      </div>
    }
    ghlink="https://github.com/sandipmalii/Dice-Roll-Web-Game"
    demoLink="https://dicechallangegame.netlify.app/"
  />
</Col>



<Col md={4} className="project-card">
  <ProjectCard
    imgPath={gifImage}
    isBlog={false}
    title={
      <h4 style={{ fontWeight: "bold", textAlign: "center", fontFamily: "Times New Roman" }}>
        Basic Calculator
      </h4>
    }
    description={
      <div>
        <h4 style={{ textAlign: "center", fontFamily: "serif" }}>
          Tools Used
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <i className="fab fa-js-square icon colorful" style={{ color: "#FFD700" }}></i>
          <i className="fab fa-html5 icon colorful" style={{ color: "#FF7F50" }}></i>
          <i className="fab fa-css3-alt icon colorful" style={{ color: "#1E90FF" }}></i>
        </div>
      </div>
    }
    ghLink="https://github.com/sandipmalii/Basic-Calculator-"
    demoLink="https://calculatorwebproject.netlify.app/"
  />
</Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={
                <h4 style={{ fontWeight: "bold", textAlign: "center", fontFamily: "Times New Roman" }}>
                 Drum Kit
                </h4>
              }
            
              description={
                <div>
                  <h4 style={{ textAlign: "center", fontFamily: "serif" }}>
                    Tools Used
                  </h4>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <i className="fab fa-js-square icon colorful" style={{ color: "#FFD700" }}></i>
                    <i className="fab fa-html5 icon colorful" style={{ color: "#FF7F50" }}></i>
                    <i className="fab fa-css3-alt icon colorful" style={{ color: "#1E90FF" }}></i>
                  </div>
                </div>
              }
              ghLink="https://drumkitproject2.netlify.app/"
              demoLink="https://drumkitproject2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title={
                <h4 style={{ fontWeight: "bold", textAlign: "center", fontFamily: "Times New Roman" }}>
                 Candy Crush
                </h4>
              }

              description={
                <div>
                  <h4 style={{ textAlign: "center", fontFamily: "serif" }}>
                    Tools Used
                  </h4>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <i className="fab fa-js-square icon colorful" style={{ color: "#FFD700" }}></i>
                    <i className="fab fa-html5 icon colorful" style={{ color: "#FF7F50" }}></i>
                    <i className="fab fa-css3-alt icon colorful" style={{ color: "#1E90FF" }}></i>
                  </div>
                </div>
              }
              ghLink="https://github.com/sandipmalii/Candy-Crush-Game"
              demoLink="https://candycrushproject.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
