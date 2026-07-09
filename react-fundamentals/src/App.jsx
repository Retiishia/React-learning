import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Greeting from "./greeting.jsx";
import Card from "./Card.jsx";
import "./App.css";

const projects = [
  {
    title: "React Study Plan",
    description: "Day 5 - Children Props",
  },
  {
    title: "Expense Tracker",
    description: "JavaScript Project",
  },
  {
    title: "Weather App",
    description: "Using OpenWeather API",
  },
];

function App() {
  return (
    <>
      {projects.map(project => (
        <Card title={project.title}>
          <p>{project.description}</p>
        </Card>
      ))}
    </>
  );
}

export default App;
