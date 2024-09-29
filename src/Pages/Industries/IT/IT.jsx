import React from 'react'
import { useNavigate } from 'react-router-dom';
import greenLine from '../../../Logo/blueLine.svg';
import styles from './IT.module.css';
import { Link } from 'react-router-dom';
import arrow from '../../../Logo/arrow.svg';
import bubbles from '../../../Logo/Bubbles.svg'
export default function Services() {
return (
     <>
    <div className={styles.bodyContainer}>
        <div className={styles.temporary_nav}>
            <ul>
                <li><Link to='/' style={{textDecoration:'none',background:'none',color: 'rgba(37, 37, 37, 0.7)'}}>Home</Link><img src={arrow}></img></li>
                <li><Link to='/Industries' style={{textDecoration:'none',background:'none',color: 'rgba(37, 37, 37, 0.7)'}}>Industries</Link><img src={arrow}></img></li>
                <li>Information Technology</li>
            </ul>
        </div>
        <h1><span className={styles.UnderlineText}>Information Technology<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <div className = {styles.introText}>
            <p>Drive Innovation with Cutting-Edge IT Solutions</p>
            <p>Digital advancements are transforming the information technology landscape, enhancing efficiency, data security, and user experience.</p>   
            <p>Sabrasta empowers IT organizations to address emerging challenges in system integration, cybersecurity, and cloud migration, fostering</p>
            <p>agility and creating new pathways for growth in an ever-evolving tech environment.</p><img src={bubbles} className={styles.bubbly}></img>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div id = {styles.inlineContain}>
        <div className={styles.orangeContainer}><h2>Innovative Digital</h2><h2>Transformation</h2><br></br><br></br><p>Stay ahead in the digital age with transformative technologies. We help organizations modernize their IT infrastructure, embracing cloud solutions, automation, and AI to drive operational efficiency and business growth.</p></div>
        <div className={styles.greenContainer}><h2>CyberSecurity &</h2><h2>Data</h2><br></br><br></br><p>Safeguard your business with robust cybersecurity strategies. From threat detection to data encryption, we ensure your systems are secure, protecting critical information and ensuring compliance with industry regulations.</p></div> 
        <div className={styles.blueContainer}><h2>Scalability &</h2><h2>Integration</h2><br></br><br></br><p>Achieve seamless growth with scalable IT solutions. Our expertise in system integration allows businesses to efficiently expand their operations, connecting disparate systems and optimizing workflows for enhanced performance.</p></div></div>
         <div id={styles.separatingline}></div>
         <div className ={styles.centerTextDiv}>
            <p>At Sabrasta, we are dedicated to transforming the information technology landscape with innovative solutions and state-of-the-art technologies. Our focus on cybersecurity, compliance, and seamless integration ensures that your IT infrastructure is both robust and secure.</p>
            <p>Our team consists of passionate professionals—from software developers and IT specialists to data scientists—committed to enhancing operational efficiency and driving digital transformation for our clients. We take pride in fostering collaborative partnerships that adapt to the evolving tech landscape, delivering solutions that empower organizations to thrive in an increasingly digital world.</p>
         </div>
    </div>
    </>
  )
}
