import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import star from './Logo/star.svg';
function App()
{
  return(
    <>
      <Navbar />
     <div className='bodyContainer'>
      <span >
        <img id = 'starDoodle' src={star} alt = 'starDoodle'/>
      </span>
        <h1>Unleash your brand's potential</h1>
        <h1>with our creative expertise</h1>
        <p>Unleash your vision with our unrivaled expertise, captivating audiences and setting</p>
        <p>your brand apart.</p>
        <button id = 'GetStarted'>Get Started</button>
      </div>
    </>
  );
}
export default App;