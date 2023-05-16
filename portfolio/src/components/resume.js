import React from "react";

function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-title">My Skills</h2>
      <ul className="skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>Mysql</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>Github</li>
        <li>Heroku</li>
        <li>OOP</li>
        <li>PWAs</li>
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