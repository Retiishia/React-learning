import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Greeting from "./greeting.jsx";
import Card from "./Card.jsx";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "React Study Plan",
    description: "Day 5 - Children Props",
    completed: true,
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "JavaScript Project",
    completed: false,
  },
  {
    id: 3,
    title: "Weather App",
    description: "Using OpenWeather API",
    completed: true,
  },
];

function App() {
  return (
    <>
      {projects.map((project) => (
        <Card key={project.id} title={project.title}>
          <p>{project.description}</p>
          {project.completed ? <p>✅ Completed</p> : <p>⏳ In Progress</p>}
          {project.completed && <p>🎉 Great Job!</p>}
        </Card>
      ))}
    </>
  );
}

export default App;
