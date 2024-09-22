import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import logo1 from '../../Logo/FooterLogo.svg'
// import logo2 from '../../Photos/Logo (2).png'
import icons from '../../Photos/Frame.png'
import Group from '../../Logo/company show photo.svg'
function Footer() {
  return (
    <div id='footer'>
      <div id = 'FooterPic'>
        <img id = 'Pic' src={Group}></img>
      </div>
      <div id='SearchBar'>
        <p>Subscribe to <span>Our NewsLetter</span></p>
        <div id = 'SearchContainer'><input type='text' placeholder='example@gmail.com'></input><button>SUBSCRIBE</button></div>
      </div>
      <div id='footercontent'>
        <div id='content'>
        <div id='frame'>
          <div id='framelogo'>
            <img id='framelogo1' src={logo1}/>
            {/* <img id='framelogo2' src={logo2}/> */}
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
            <div><p><Link to='/ServicesPages/ITConsulting' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>IT Consulting</Link></p></div>
            <div><p><Link to='/ServicesPages/WebDevelopment' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>Web Design</Link></p></div>
            <div><p><Link to='/ServicesPages/AppDevelopment' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>App Development</Link></p></div>
            <div><p><Link to='/ServicesPages/UXUI' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>UX UI Design</Link></p></div>
            <div><p>More...</p></div>
          </div>
          <div id='products'>
          <div><h3>Products</h3></div>
            <div><p>Coming Soon</p></div>
          </div>
          <div id='industries'>
          <div><h3>Industries</h3></div>
          <div><p><Link to='/IndustriesPages/RealState' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>Real Estate</Link></p></div>
          <div><p><Link to='/IndustriesPages/IT' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>IT</Link></p></div>
          <div><p><Link to='/IndustriesPages/Media' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>Media</Link></p></div>
          <div><p><Link to='/IndustriesPages/Ecom' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>eCommerce</Link></p></div>
           <div><p><Link to='/IndustriesPages/Egov' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>eGovernance</Link></p></div>
          </div>
          <div id='company'>
          <div><h3>Company</h3></div>
          <div><p><Link to='/Careers' style={{textDecoration:'none',backgroundColor:'rgba(11, 11, 11, 1)',color:'rgba(255, 255, 255, 1)'}}>Careers</Link></p></div>
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
