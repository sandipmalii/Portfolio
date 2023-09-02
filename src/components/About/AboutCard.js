import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Sandip Mali </span>
            from <span className="purple"> Gaighat, Nepal.</span>
            <br /> I'm a third-year student enrolled in a Bachelor of Technology (BTech) 
            program in Computer Science and Engineering (CSE) at SVEC, Tirupati, India. 
            <br />
            Moreover, I have recently finished an  from <span className="purple"><strong>internship </strong></span>
 as a web developer with Digital Bhem.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Videography 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#F0DE36" }}>
            "Keep grinding until your <strong color="red">reputation</strong> introduces you !"{" "}
          </p>
          <footer className="blockquote-footer">Sandip</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
