import React from 'react';
import Particle from '../Particle';
import '../Resume//Resume.css'; // Make sure to import your CSS file
import EducationSection from './Education';
import RankSection from './Rank';
const ExperienceSection = () => {
  return (
    <div className="main-both fade-in">
      <Particle />
      <div className="heading1">
       <button data-text="Awesome" class="EXPERIENCE">
    <span class="actual-text">&nbsp;EXPERIENCE&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;EXPERIENCE&nbsp;</span>
</button>
      </div>
      <div className="cards0">
        <div className="card0 card-11">
        <h2><b>Web Development Internship</b></h2>

          <h5 className="date">August 2023 - September 2023</h5>
          <h2 className="dec">
          Attained hands-on front-end experience, enhancing HTML, CSS, and JavaScript skills to craft user-friendly, visually appealing interfaces.
          </h2>
        </div>
        <div className="card0 card-22"> 
          <h1><b>Salesforce Internship</b></h1>
          <h5 className="date">August 2023 - September 2023</h5>
          <h2 className="dec">
          Gained deep insights into Salesforce architecture, security, and best practices, fostering a strong comprehension.
          </h2>
        </div>
        <div className="card0 card-11">
        <h1><b>Content Creator</b></h1>

          <h5 className="date">May 2020 - September 2023</h5>
          <h2 className="dec">
            Produced and edited over 100 videos using Adobe Premiere Pro, DaVinci Resolve, and Filmora.
          </h2>
        </div>
      </div>
      <EducationSection />
      <RankSection />
    </div>
  );
};

export default ExperienceSection;
