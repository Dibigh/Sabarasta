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

  // State to track the last scroll position
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    let currentScrollTop = window.scrollY;
      // Determine scroll direction
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsNavHidden(true);
      } else {
        // Scrolling up
        setIsNavHidden(false);
      }

      // Update the last scroll position
      setLastScrollTop(currentScrollTop);
      console.log(`window position is ${currentScrollTop}`)
    };

  useEffect(() => {
    console.log("useEffect run");
    console.log(`scroll top is ${lastScrollTop}`);
      // Add event listener for scroll
    window.addEventListener("scroll", handleScroll());

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll());
    };
  },[lastScrollTop]);
  return (
    <>
      <div className='MainBody'>
            <div className={`${isNavHidden ? 'navbar--hidden': 'apple'}`}>
              <ul>
                <li className='bdLine'><a href=''>Privacy Policy</a></li>
                <li className='bdLine'><a href=''>Terms of Service</a></li>
                <li className='bdLine'><a href=''>Login</a></li>
                <li><a href=''>Sign Up</a></li>
              </ul>
            </div>
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