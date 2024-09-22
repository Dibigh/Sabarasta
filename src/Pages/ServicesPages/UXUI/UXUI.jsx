import React from 'react'
import { useNavigate } from 'react-router-dom';
import yellowLine from '../../../Logo/yellowLine.svg';
import styles from './UXUI.module.css';

export default function Services() {
        
function buttonPressed()
    {
        const navigate=useNavigate();
        console.log('button pressed');
        navigate('/ContactUs')
    }
    return (
     <>

    <div className={styles.bodyContainer}>
        <h1>UX UI <span className={styles.UnderlineText}>Design<img className={styles.underLine} src={yellowLine} alt='GreenLine'/></span></h1>
        <div className = {styles.introText}>
            <p>Revolutionize Care Delivery with Value-Centered Technology Digital innovations are reshaping healthcare, enhancing optimization,</p>
            <p>data unification, precision analytics, and personalized experiences. TechKraft enables healthcare organizations to overcome</p>   
            <p>emerging challenges in health data operations, cyber security, cloud migration, and automation, fostering resilience and new</p>
            <p>opportunities in the evolving health tech landscape.</p>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.BestText}>
            <p>Get the best <span>App development</span> service for your business.</p>
            <br></br>
            <br></br>
            </div>
        </div>
        <button id={styles.contact} onClick={buttonPressed}>Contact Us</button>
        <div id = {styles.inlineContain}>
        <div className={styles.orangeContainer}><h2>Strategic</h2><h2>Innovation</h2><br></br><br></br><p>Align technology with your business objectives to unlock sustainable growth, streamline operations, and gain a competitive advantage in the market. By integrating innovative solutions, we help you stay ahead in an ever-evolving digital landscape.</p></div>
        <div className={styles.greenContainer}><h2>Operational</h2><h2>Efficiency</h2><br></br><br></br><p>Optimize your processes and infrastructure to ensure maximum performance, cost-effectiveness, and scalability. By streamlining operations and leveraging cutting-edge technologies, we help you reduce inefficiencies, enhance productivity, and drive long-term success.</p></div> 
        <div className={styles.blueContainer}><h2>Security and</h2><h2>Resiliency</h2><br></br><br></br><p>Implement robust cybersecurity strategies to protect your critical assets, safeguard data, and ensure long-term business continuity. By addressing vulnerabilities and staying ahead of threats, we help build a secure and resilient IT environment.</p></div></div>
         <div id={styles.separatingline}></div>
         <div className ={styles.centerTextDiv}>
            <p>At Sabrasta, we’re committed to revolutionizing the healthcare industry through cutting-edge technology and solutions. With a focus on providing complete adherence to HIPAA, GDPR and other regulatory compliances, we ensure that patient data remains protected at all times.</p>
            <p>Our team is comprised of dedicated professionals with a passion for leveraging technology to enhance outcomes across the healthcare ecosystem. From developers and engineers to healthcare experts and data analysts, we bring together a diverse skillset tailored to client requirements.</p>
            <p>We also believe in a collaborative partnership with our clients, ensuring that our technology evolves in step with industry trends, delivering practical, effective health tech solutions that provide higher operational efficiency and improved outcomes throughout the healthcare value chain.</p>
         </div>
    </div>
    </>
  )
}
