import React from 'react'
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg'
import greenLine from '../../Logo/yellowLine.svg'
import IT from '../../Logo/itcon.svg'
import webDev from '../../Logo/webdev.svg'
import AppDev from '../../Logo/appdev.svg'
import UX from '../../Logo/uxui.svg'
import SS from '../../Logo/seo.svg'
import SMM from '../../Logo/smm.svg'
import Qa from '../../Logo/BrandDesign.png'
import Market from '../../Logo/ms.svg'
import styles from './Services.module.css'
import { Link } from 'react-router-dom';
import bubbles from '../../Logo/Bubbles.svg'

export default function Services() {
  const navigate = useNavigate();
  return (
     <>
      <div className={styles.bodyContainer}>
        <h1>Unlock Success with Our</h1>
          <h1> Tailored <span className={styles.UnderlineText}>Solutions.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>From strategy to execution, our services are designed to propel your business forward.</p><img src={bubbles} className={styles.bubbly}></img>
        <div className = {styles.Container}>
          <div id={styles.item1}> <img src={IT} alt='IT-Consulting'/><div><h3>IT Consulting</h3><p style ={{ position: 'absolute',top:'25%',left: '5%'}}>Transform your business with our expert IT consulting services. Optimize your infrastructure, implement new technologies, or develop a robust future proof plan with our strategic advice and practical solutions, enhancing your IT capabilities for long-term success.</p><button onClick={()=>{navigate('/Services/IT-Consulting')}}>Read More</button></div></div>
          <div id={styles.item2}> <img src={webDev} alt='WebDevelopment'/><div><h3>Web<br></br>Development</h3><p style ={{ position: 'absolute',top:'35%',left: '5%'}}>Transform your online presence with our web development services. We build secure, responsive, and visually captivating websites and applications to enhance your brand.</p><button onClick={()=>{navigate('/Services/WebDevelopment')}}>Read More</button></div></div>
          <div id={styles.item3}> <img src={AppDev} alt='AppDevelopment'/><div><h3>App<br></br>Development</h3><p style ={{ position: 'absolute',top:'35%',left: '5%'}}>Bring your vision to life with our custom app development. We create user-friendly, visually stunning mobile applications that keep your business at users' fingertips, engaging and converting effectively.</p><button onClick={()=>{navigate('/Services/AppDevelopment')}}>Read More</button></div></div>
          <div id={styles.item4}> <img src={UX} alt='UXUI'/><div><h3>UX UI Design</h3><p style ={{ position: 'absolute',top:'25%',left: '5%'}}>Enhance user experiences with our expert UX/UI design services. We create intuitive and visually appealing interfaces that engage and delight users. By understanding user behavior and applying best design practices, we ensure your digital products are both functional and beautiful.</p><button onClick={()=>{navigate('/Services/UXUI')}}>Read More</button></div></div>
          <div id={styles.item5}> <img src={SMM} alt='SMM'/><div><h3>SMM</h3><p style ={{ position: 'absolute',top:'25%',left: '5%'}}>Amplify your brand's voice with our social media marketing services. We create engaging campaigns across platforms, driving maximum impact. From content creation to media management, our strategies deliver results..</p><button onClick={()=>{navigate('/Services/SocialMedia')}}>Read More</button></div></div>
          <div id={styles.item6}> <img src={Qa} alt='Brand-Identity'/><div><h3>Brand Identity<br></br>Design</h3><p style ={{ position: 'absolute',top:'35%',left: '5%'}}>Ensure the highest standards with our Quality Assurance services. We conduct thorough testing to identify and resolve issues before they impact users, guaranteeing your products are reliable, efficient, and market-ready.</p><button onClick={()=>{navigate('/Services/BrandIdentity')}}>Read More</button></div></div>
          <div id={styles.item7}> <img src={SS} alt='SEO'/><div><h3>SEO</h3><p style ={{ position: 'absolute',top:'25%',left: '5%'}}>Secure your business with our advanced security services. From threat detection to robust defense strategies, we safeguard your data and IT infrastructure, ensuring protection against security threats.</p><button onClick={()=>{navigate('/Services/SEO')}}>Read More</button></div></div>
          <div id={styles.item8}> <img src={Market} alt='Market-Research'/><div><h3>Market<br></br>Research</h3><p style ={{ position: 'absolute',top:'35%',left: '5%'}}>Gain valuable insights with our market research services. From competitor analysis to customer behavior studies, we provide the data you need to stay ahead, helping you understand trends, identify opportunities, and drive success.</p><button onClick={()=>{navigate('/Services/MarketResearch')}}>Read More</button></div></div>
        </div>
        </div>
    </>
  )
}
