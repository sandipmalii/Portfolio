import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ResumePdf from "../../Assets/Resume.pdf";
import ResumeContent from "../Resume/ResumeContent";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SANDIP MALI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>  
        </Container>
        <div className="button-container">
  <div className="button-wrapper">
    <Button
      variant="secondary"
      href="https://www.linkedin.com/in/sandipmali/"
      target="_blank"
      className="cus-button"
    >
      Hire me
    </Button>
  </div>

  <div className="button-wrapper">
    <Button
      variant="secondary"
      href={ResumePdf}
      target="_blank"
      className="cus-button"
    >
      <AiOutlineDownload />
      &nbsp;Resume
    </Button>
  </div>
</div>
      </Container>

      
        {/* Hire Button */}
     
     
    

      <Home2 />
    </section>
  );
}

export default Home;
