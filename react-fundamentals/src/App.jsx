import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name = "Retiishia";
  const user = {
    firstName: "Farhan",
    lastName: "Aziz",
    age: 25
  }

  return (
    <>
    <h1>Hello {user.firstName} {user.lastName}</h1>
    <h2>{user.age}</h2>
    <h3>{Math.random()}</h3>
    <h3>{new Date().getFullYear()}</h3>
    </>
  )
}

export default App