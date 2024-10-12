import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import logo1 from '../../Logo/FooterLogo.svg'
import icons from '../../Photos/Frame.png'
import SvgPic from '../../Logo/companyShowPhoto.svg' 
function Footer() {
  return (
    <div id='footer'>
      <div id = 'FooterPic'>
        <img id='Pic' src ={SvgPic}/>
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
            <h3>Services</h3>
            <p><Link to='/Services/IT-Consulting' style={{textDecoration:'none',backgroundColor:'transparent',color:' rgba(255, 255, 255, 1)'}}>IT Consulting</Link></p>
            <p><Link to='/Services/WebDevelopment' style={{textDecoration:'none',backgroundColor:'transparent',color:' rgba(255, 255, 255, 1)'}}>Web Design</Link></p>
            <p><Link to='/Services/AppDevelopment' style={{textDecoration:'none',backgroundColor:'transparent',color:' rgba(255, 255, 255, 1)'}}>App Development</Link></p>
            <p><Link to='/Services/UXUI' style={{textDecoration:'none',backgroundColor:'transparent',color:' rgba(255, 255, 255, 1)'}}>UX UI Design</Link></p>
            <p>More...</p>
          </div>
          <div id='products'>
          <h3>Products</h3>
          <p>Coming Soon</p>
          </div>
          <div id='industries'>
          <h3>Industries</h3>
          <p><Link to='/Industries/Real-Estate' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>Real Estate</Link></p>
          <p><Link to='/Industries/IT' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>IT</Link></p>
          <p><Link to='/Industries/Media' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>Media</Link></p>
          <p><Link to='/Industries/eCommerce' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>eCommerce</Link></p>
          <p><Link to='/Industries/eGovernance' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>eGovernance</Link></p>
          </div>
          <div id='company'>
          <h3>Company</h3>
          <p><Link to='/Careers' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>Careers</Link></p>
          <p><Link to='/About' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>About</Link></p>
          <p><Link to='/ContactUs' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>Contact</Link></p>
          <p><Link to='/privacy-Policy' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>Privacy Policy</Link></p>
          <p><Link to='/terms-Of-Use' style={{textDecoration:'none',backgroundColor:'transparent',color:'rgba(255, 255, 255, 1)'}}>Terms of Use</Link></p>
          </div>
        </div>
        </div>
        <div id='separatingline'></div>
        <div id ='CopyRights'><p>Sabrasta, Inc. 2024. All Rights Reserved</p></div>
      </div>
    </div>
  )
}

export default Footer
