import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  // Outlet,
  Routes,
} from "react-router-dom";
import Aboutme from "./components/aboutme";
import Home from "./components/home";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Resume from "./components/resume";
import "./App.css";

function App() {
  return (
    <Router basename="">
      <div className="app">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;