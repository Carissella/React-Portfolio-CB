import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Outlet,
  Routes,
} from "react-router-dom";
import AboutMe from "./components/about";
import ContactMe from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Resume from "./components/resume";
import "./App.css";

function App() {
  return (
    <Router basename="/React-Portfolio">
      <div className="app">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe/>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactMe" element={<ContactMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;