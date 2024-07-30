import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../../Logo/logoText.svg'
import './navbar.css'

// , { useState }
// import {FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate=useNavigate();
  // const [showMediaIcons, setShowMediaIcons] = useState(false);
  function buttonPressed()
{
  console.log('button pressed');
  navigate('/contactUs')

}
  return (
    <>
          <div className='MainBody'>
      <header>
        <img id = 'logo' src = {logo} alt ='Logo'  onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
        <nav>
          <ul>
          <li><Link className='navText' to='/products'>Products</Link></li>
            <li><Link className='navText' to='/industries'>Industries</Link></li>
            <li><Link className='navText' to='/services'>Services</Link></li> 
            <li><Link className='navText'to='works'>Works</Link></li>
            <li><Link className='navText' to='about' >About</Link></li>
        
          </ul>     
        </nav>
        <span id='span'><button id='contact' onClick={buttonPressed}>Contact Us</button></span>
      </header>
      </div>
    </>
    );

}
export default Navbar;