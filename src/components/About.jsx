import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  //useNavigate hook
  const navigate=useNavigate();
 function handleClick(){
       navigate("/dashboard")
 }
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>see Dashboard</button>
    </div>
  )
}

export default About
