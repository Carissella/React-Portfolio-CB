import React from "react";

function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-title">My Skills</h2>
      <ul className="skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React</li>
        <li>MongoDB</li>
      </ul>

      <h2 className="resumeTitle">Certifications</h2>
      <p>
        Full Stack Web Development Certificate from The University of Minnesota
      </p>
      <a href={resume} >
        <button className="download-butt">Download My Resume</button>
      </a>
    </div>
  );
}

export default Resume;