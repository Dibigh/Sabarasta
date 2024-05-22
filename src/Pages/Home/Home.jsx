import React from 'react'
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg'
import './Home.css'
import redmark from '../../Photos/Vector.png'
import rocket from '../../Photos/Plane Doodle.png'
function Home() {
  const navigate=useNavigate();
  function buttonPressed()
  {
    console.log('button pressed');
    navigate('/getStarted')
  
  }
  return (
    <>
    <div className='bodyContainer'>
      <span >
        
      </span>
        <h1 id='h1'>Unleash your brand's potential</h1>
     
        <h1 id='h1sec'>with our creative expertise</h1>
        <p id='paragraph1'>Unleash your vision with our unrivaled expertise, captivating audiences and setting</p>
        <p id='paragraph2'>your brand apart.</p>
        <button id = 'GetStarted'  onClick={buttonPressed}>Get Started</button>
      
      </div>
      </>
  )
}

export default Home