import React from "react";

function Header() {
  return (
    <header>
      <h1>Welcome To My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutMe">About Me</a>
          </li>
          <li>
            <a href="/resume">My Resume</a>
          </li>
          <li>
            <a href="/projects">My Projects</a>
          </li>
          <li>
            <a href="/contactMe">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;