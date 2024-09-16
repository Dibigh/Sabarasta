import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
// import useScrollListener from "../../hooks/useScrollListener";
import './navbar.css';
import logo from '../../Logo/logoText.svg'
import '../../App.css'

const Navbar = () => {
  const navigate=useNavigate();
  function buttonPressed()
{
  console.log('button pressed');
  navigate('/contactUs')

}
 
 const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setIsNavHidden(true); // Hide navbar on scroll down
        console.log(`navbar value is ${isNavHidden}`);
      } else {
        setIsNavHidden(false); // Show navbar on scroll up
        console.log(`navbar value is ${isNavHidden}`);
      }

      setLastScrollTop(currentScrollTop); // Update lastScrollTop
      console.log(`scroll value is ${currentScrollTop}`);
    };
useEffect(()=>
{
  window.addEventListener('scroll', handleScroll);
 return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
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