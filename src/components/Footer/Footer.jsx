import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import logo1 from '../../Photos/logo (1).png'
import logo2 from '../../Photos/Logo (2).png'
import icons from '../../Photos/Frame.png'
function Footer() {
  return (
    <div id='footer'>
      <div id='lines'>
        <div id='line1'></div>
        <div id='line2'></div>
        <div id='line3'></div>
        <div id='line4'></div>
      </div>
      <div id='footercontent'>
        <div id='content'>
        <div id='frame'>
          <div id='framelogo'>
            <img id='framelogo1' src={logo1}/>
            <img id='framelogo2' src={logo2}/>
          </div>
          <div id='frametext'>
            <p>Unleash your brand’s potential with our creative expertise.</p>
          </div>
          <div id='frameicon'>
            <img id='icons' src={icons}/>
          </div>
        </div>
        <div id='footermenu'>
          <div id='services'>
          <div><h3>Services</h3></div>
            <div><p>UX / UI Design</p></div>
            <div><p>Web Design</p></div>
            <div><p>Brand Identity</p></div>
            <div><p>Social Media</p></div>
          </div>
          <div id='products'>
          <div><h3>Products</h3></div>
            <div><p>Namerasta</p></div>
            <div><p>Pollrasta</p></div>
          </div>
          <div id='industries'>
          <div><h3>Industries</h3></div>
          <div><p>Real Estate</p></div>
          <div><p>Hospitality</p></div>
          <div><p>eCommerce</p></div>
          <div><p>Fashion</p></div>
          <div><p>eGovernance</p></div>
          </div>
          <div id='company'>
          <div><h3>Company</h3></div>
          <div><p>Research</p></div>
          <div><p>Blog</p></div>
          <div><p>Careers</p></div>
          <div><p>About</p></div>
          <div><p>Contact</p></div>
          <div><p><Link to='/privacyPolicy' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>Privacy Policy</Link></p></div>
          <div><p><Link to='/termsOfUse' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>Terms of Use</Link></p></div>
          </div>
        </div>
        </div>
        <div id='separatingline'></div>
        <div id='copyright'>
          <p>Sabrasta, Inc. 2024. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
