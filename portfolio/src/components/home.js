import React from "react";
import "../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import myPhoto from "../assets/images/me.jpg";
import Typewriter from "./typewriter"; // Import the Typewriter component

function Home() {
  const phrases = [
    "Full stack web developer",
    "Woman in Tech",
    "Passion for technology and the environment",
  ];

  return (
    <div className="home-container">
      <img src={myPhoto} alt="Photo of me" className="profile-photo" />
      <div>
        <h1 className="title">Carisse's Portfolio</h1>
        <Typewriter phrases={phrases} />
        <div className="social-media-icons">
          <a
            href="https://www.github.com/carissella"
            target="_blank"
            rel="noreferrer"
          >
          </a>
          <a
            href="https://www.linkedin.com/in/carisse-barr-7b9b12244/"
            target="_blank"
            rel="noreferrer"
          >
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;