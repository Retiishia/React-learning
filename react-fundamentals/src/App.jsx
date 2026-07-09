import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Greeting from './greeting.jsx'
import Card from './Card.jsx'
import './App.css'

function App() {
  return (
    <>
    <Card title="React Study Plan">
      <p>Day 5 - Children Props</p>
    </Card>

    <Card title="Expense Tracker">
      <p>JavaScript Project</p>
    </Card>

    <Card title="Weather App">
      <p>Using OpenWeather API</p>
    </Card>
</>
  )
}

export default App