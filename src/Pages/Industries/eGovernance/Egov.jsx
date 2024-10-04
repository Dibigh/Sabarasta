import React from 'react'
import { useNavigate } from 'react-router-dom';
import greenLine from '../../../Logo/blueLine.svg';
import styles from './Egov.module.css';
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
                <li>eGovernance</li>
            </ul>
        </div>
        <h1><span className={styles.UnderlineText}>eGovernance<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <div className = {styles.introText}>
            <p>Transform Public Services with Digital E-Governance Solutions</p>
            <p>Digital innovations are revolutionizing the delivery of public services, enhancing transparency, accessibility, and citizen engagement. </p>   
            <p>Sabrasta empowers government organizations to overcome emerging challenges in data security, service integration, and citizen </p>
            <p>interaction, driving efficiency and unlocking new opportunities for effective governance in a digital age.</p><img src={bubbles} className={styles.bubbly}></img>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className = {styles.inlineContain}>
        <div id={styles.orangeContainer}><h2>Digital</h2><h2>Transformation</h2><br></br><br></br><p>Modernize public services with cutting-edge digital solutions. We enable governments to adopt new technologies, streamlining processes, improving service delivery, and fostering innovation for a more efficient and transparent public sector.</p></div>
        <div id={styles.greenContainer}><h2>Citizen-Centric</h2><h2>Services</h2><br></br><br></br><p>Enhance citizen engagement through accessible and user-friendly digital platforms. Our solutions focus on improving the interaction between governments and their citizens, making essential services more efficient, responsive, and easier to access.</p></div> 
        <div id={styles.blueContainer}><h2>Data Security &</h2><h2>Compliance</h2><br></br><br></br><p>Safeguard sensitive public data with robust cybersecurity and regulatory compliance solutions. We ensure that e-governance systems are secure and aligned with international data protection standards, ensuring the privacy and trust of citizens.</p></div></div>
         <div id={styles.separatingline}></div>
         <div className ={styles.centerTextDiv}>
            <p>At Sabrasta, we are dedicated to transforming public service delivery through innovative e-governance solutions. Our focus on enhancing transparency, citizen engagement, and data security empowers government agencies to serve their communities more effectively.</p>
            <p>At Sabrasta, we are dedicated to transforming public service delivery through innovative e-governance solutions. Our focus on enhancing transparency, citizen engagement, and data security empowers government agencies to serve their communities more effectively.</p>
         </div>
    </div>
    </>
  )
}
