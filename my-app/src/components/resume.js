import React from "react";
import "../assets/css/resume.css";
import resume from "../assets/images/resume.pdf"

function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-title">My Skills</h2>
      <ul className="skillset-list">
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

      <p>
        Feel free to download my resume while you're here 
      </p>
      <a href={resume} >
        <button className="download-butt">Carisse's Resume</button>
      </a>
    </div>
  );
}

export default Resume;