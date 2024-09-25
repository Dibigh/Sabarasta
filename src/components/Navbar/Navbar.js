import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState,useRef } from "react";
import './navbar.css';
import logo from '../../Logo/logoText.svg'
// import '../../App.css'

const Navbar = () => {
  const navigate=useNavigate();
  const navRef = useRef();
  const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }
  const showNavbar = ()=>
  {
    navRef.current.classList.toggle('responsive_nav');
  }
  function buttonPressed()
{
  console.log('button pressed');
  navigate('/contactUs');
}
  return (
    <>
      <div className='MainBody'>
      <header>
        <img id = 'logo' src = {logo} alt ='Logo'  onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
        <nav ref={navRef}>
          <ul>
            <li><Link className='navText' to='/products' onClick={hideNavbar}>Products</Link></li>
            <li><Link className='navText' to='/industries' onClick={hideNavbar}>Industries</Link></li>
            <li><Link className='navText' to='/services' onClick={hideNavbar}>Services</Link></li> 
            <li><Link className='navText'to='/works' onClick={hideNavbar}>Works</Link></li>
            <li><Link className='navText' to='/about' onClick={hideNavbar}>About</Link></li>
              <button className = 'nav-btn nav_close' onClick={showNavbar} >
              <FaTimes/>
            </button>   
          </ul>  
        </nav>
        <span id='span'><button id='contact' onClick={buttonPressed}>Contact Us</button></span>
         <button className = 'nav-btn' onClick={showNavbar}>
            <FaBars/>
         </button>
      </header>
      </div>
      </>
    );
}
export default Navbar;