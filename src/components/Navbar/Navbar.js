import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../../Logo/logoText.svg';
import '../../App.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

const controlNavbar = () => {
    try {
      console.log('controlNavbar called');
      console.log('window.scrollY:', window.scrollY);
      console.log('lastScrollY:', lastScrollY);

      if (window.scrollY > lastScrollY) { 
        console.log('Scrolling down - hiding navbar');
        setShow(false); 
      } else { 
        console.log('Scrolling up - showing navbar');
        setShow(true);  
      }

      setLastScrollY(window.scrollY); 
    } catch (error) {
      console.error('Error in controlNavbar:', error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    console.log('Event listener added');
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      console.log('Event listener removed');
    };
  }, []);

  function buttonPressed() {
    console.log('button pressed');
    navigate('/contactUs');
  }

  return (
    <>
      <div className='MainBody'>
        <div className={`${show ? 'apple' : 'navbar--hidden'}`}>
          <ul>
            <li className='bdLine'><a href='http://example.com'>Privacy Policy</a></li>
            <li className='bdLine'><a href='http://example.com'>Terms of Service</a></li>
            <li className='bdLine'><a href='http://example.com'>Login</a></li>
            <li><a href='http://example.com'>Sign Up</a></li>
          </ul>
        </div>
        <header>
          <img id='logo' src={logo} alt='Logo' onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
          <nav>
            <ul>
              <li><Link className='navText' to='/products'>Products</Link></li>
              <li><Link className='navText' to='/industries'>Industries</Link></li>
              <li><Link className='navText' to='/services'>Services</Link></li>
              <li><Link className='navText' to='/works'>Works</Link></li>
              <li><Link className='navText' to='/about'>About</Link></li>
            </ul>
          </nav>
          <span id='span'><button id='contact' onClick={buttonPressed}>Contact Us</button></span>
        </header>
      </div>
    </>
  );
};

export default Navbar;