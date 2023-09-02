import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf"; // Import 'Document' and 'Page' from react-pdf
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ResumePdf from "../../Assets/Resume.pdf";
import "../Resume/Resume.css"; // Import your CSS file
import EducationSection from "./Education";
import ExperienceSection from "./ResumeNew";
import ResumeContent from "./ResumeContent";

// Add the import statement for pdfjs
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const RankSection = () => {
  return (
    <div>
      {/* Ranks and Achievements */}
      <h3 className="nice-title">Ranks and Achievements</h3>
      <ResumeContent
        title=""
        content={[
          <>
            <p className="under">
              Achieved a position within the top 200 ranks at GeeksforGeeks, a platform highly regarded for its top-tier competitive programmers.
            </p>
            <p className="under">
              Completed over 125 problem-solving tasks on LeetCode so far, with a continuous focus on tackling additional challenges.
            </p>
            <p className="under">
              Created projects using HTML, CSS, and JavaScript.
            </p>
            <p className="under">
              Accomplished the production and editing of over 100 videos using Adobe Premiere Pro, DaVinci Resolve, and Filmora.
            </p>
          </>,
        ]}
      />

      {/* Extracurricular Activities */}
      <Container>
        <Row>
        <Col>
  <h3 className="nice-title">Extracurricular Activities</h3>
  <ResumeContent
   title={<h4 className="heads">Mohan Mantra [Spot Event-2023]</h4>}
    content={[
      <div className="head-content">
      <p>Participated as a Coordinator in the on-site event.</p>
    </div>
    ]}
  />
  <ResumeContent
    title={<h4 className="heads">NCC Activities [From College-2023]</h4>}
    content={[
      <div className="head-content">
      Experience the Activities like survey and collecting the data.
 </div>
    ]}
  />
</Col>

        </Row>

        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={ResumePdf}
            target="_blank"
            style={{ width: "10%" }}
          >
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default RankSection;
