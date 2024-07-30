import React from 'react'
<<<<<<< HEAD

export default function Services() {
  return (
    <div>Services</div>
=======
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg'
import greenLine from '../../Logo/greenline.svg'
import IT from '../../Logo/itcon.svg'
import webDev from '../../Logo/webdev.svg'
import AppDev from '../../Logo/appdev.svg'
import UX from '../../Logo/uxui.svg'
import SS from '../../Logo/ss.svg'
import SMM from '../../Logo/smm.svg'
import Qa from '../../Logo/qa.svg'
import Market from '../../Logo/ms.svg'
import styles from './Services.module.css'

export default function Services() {
  return (
     <>
      <div className={styles.bodyContainer}>
      <span id = {styles.starDoodle}>
        <img src={star} alt = 'starDoodle'/>
      </span>
        <h1>Unlock Success with Our</h1>
          <h1> Tailored <span className={styles.UnderlineText}>Solutions.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>From strategy to execution, our services are designed to propel your business forward. </p>
        <div className = {styles.Container}>
          <div id={styles.item1}> <img src={IT} alt='JagaDalal'/><div><h3>IT Consulting</h3><p>Transform your business with our expert IT consulting services. Optimize your infrastructure, implement new technologies, or develop a robust future proof plan with our strategic advice and practical solutions, enhancing your IT capabilities for long-term success.</p><button>Read More</button></div></div>
          <div id={styles.item2}> <img src={webDev} alt='ITs'/><div><h3>Web Development</h3><p>Transform your online presence with our web development services. We build secure, responsive, and visually captivating websites and applications to enhance your brand.</p><button>Read More</button></div></div>
          <div id={styles.item3}> <img src={AppDev} alt='Media'/><div><h3>App Development</h3><p>Bring your vision to life with our custom app development. We create user-friendly, visually stunning mobile applications that keep your business at users' fingertips, engaging and converting effectively.</p><button>Read More</button></div></div>
          <div id={styles.item4}> <img src={UX} alt='eCOm'/><div><h3>UX UI Design</h3><p>Enhance user experiences with our expert UX/UI design services. We create intuitive and visually appealing interfaces that engage and delight users. By understanding user behavior and applying best design practices, we ensure your digital products are both functional and beautiful.</p><button>Read More</button></div></div>
          <div id={styles.item5}> <img src={SMM} alt='NGO'/><div><h3>SMM</h3><p>Amplify your brand's voice with our social media marketing services. We create engaging campaigns across platforms, driving maximum impact. From content creation to media management, our strategies deliver results..</p><button>Read More</button></div></div>
          <div id={styles.item6}> <img src={Qa} alt='EGovernance'/><div><h3>Quality Assurance</h3><p>Ensure the highest standards with our Quality Assurance services. We conduct thorough testing to identify and resolve issues before they impact users, guaranteeing your products are reliable, efficient, and market-ready.</p><button>Read More</button></div></div>
          <div id={styles.item7}> <img src={SS} alt='NGO'/><div><h3>Security Services</h3><p>Secure your business with our advanced security services. From threat detection to robust defense strategies, we safeguard your data and IT infrastructure, ensuring protection against security threats.</p><button>Read More</button></div></div>
          <div id={styles.item8}> <img src={Market} alt='EGovernance'/><div><h3>Market Research</h3><p>Gain valuable insights with our market research services. From competitor analysis to customer behavior studies, we provide the data you need to stay ahead, helping you understand trends, identify opportunities, and drive success.</p><button>Read More</button></div></div>
        </div>
        </div>
    </>
>>>>>>> f6a7eef30e38add7c00ff552268010452c0ca48c
  )
}
