import React from 'react';
import './navbar.css';
import logo from './Logo/logoText.svg';
function buttonPressed()
{
  console.log('button pressed');
}
// , { useState }
// import {FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
        {/* <header>
            <h3>logo</h3>
         <nav>
            <ul>
            <li><a className='navText' href='#Industries'>Industries</a>
            <li><a className='navText' href='#Services'>Services</a></li> 
            <li><a className='navText' href='#Works'>Works</a></li>
            <li><a className='navText' href='#About'>About</a></li></li>
            <button>
                <FaTimes/>
            </button>
          </ul>     
         </nav>
         <button>
            <FaBars/>
         </button>
         </header>  */}
          <div className='MainBody'>{/* Mainbody */}
      <header>
        <img id = 'logo' src = {logo} alt ='Logo'/>
        <nav>
          <ul>
            <li><a className='navText' href='#Industries'>Industries</a>
            <li><a className='navText' href='#Services'>Services</a></li> 
            <li><a className='navText' href='#Works'>Works</a></li>
            <li><a className='navText' href='#About'>About</a></li></li>
          </ul>     
        </nav>
        <span><button id='contact' onClick={buttonPressed}>Contact Us</button></span>
      </header>
      </div>
    </>
    );

}
export default Navbar;