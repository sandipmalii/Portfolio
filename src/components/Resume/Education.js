import React from 'react';
import '../Resume/Resume.css'; // Make sure to import your CSS file
import Particle from "../Particle";
const EducationSection = () => {
  return (
    <div className="main-container">

      <div className="heading2">
      <button data-text="Awesome" class="EDUCATION">
    <span class="actual-text">&nbsp;EDUCATION&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;EDUCATION&nbsp;</span>
</button>
      </div>
      <div className="cards00">
        <div className="card0 card-11">
          <h2 className="institution">10th BOARD [Laligurans English Boarding School, Gaighat, Nepal]</h2>
          <p className="time">2006 - 2019</p> {/* Changed <h5> to <p> */}
          <p className="gpa">GPA: 2.95/4</p> {/* Changed <h2> to <p> */}
        </div>
        <div className="card0 card-22">
          <h2 className="institution">12th BOARD [Greenland Higher Secondary School, Biratnagar, Nepal]</h2>
          <p className="time">2019 - 2021</p> {/* Changed <h5> to <p> */}
          <p className="gpa">CGPA: 3.5/4</p> {/* Changed <h2> to <p> */}
        </div>
        <div className="card0 card-11">
          <h3 className="institution">B.Tech in Computer Science and Engineering (CSE) [SVEC, Tirupati]</h3> {/* Changed <h3> to <h2> */}
          <p className="time">2021 - Present</p> {/* Changed <h5> to <p> */}
          <p className="gpa">CGPA: 8.30 (Till 5th Sem)</p> {/* Changed <h2> to <p> */}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
