import React from 'react'
import { useNavigate } from 'react-router-dom';
import greenLine from '../../../Logo/greenline.svg';
import styles from './ITConsulting.module.css';
import { Link } from 'react-router-dom';
import arrow from '../../../Logo/arrow.svg';
import bubbles from '../../../Logo/Bubbles.svg'
export default function Services() {
    
const navigate=useNavigate();
function buttonPressed()
    {
        console.log('button pressed');
        navigate('/ContactUs')
    }
    return (
     <>
    <div className={styles.bodyContainer}>
        <div className={styles.temporary_nav}>
            <ul>
                <li><Link to='/' style={{textDecoration:'none',background:'none',color: 'rgba(37, 37, 37, 0.7)'}}>Home</Link><img src={arrow}></img></li>
                <li><Link to='/Services' style={{textDecoration:'none',background:'none',color: 'rgba(37, 37, 37, 0.7)'}}>Services</Link><img src={arrow}></img></li>
                <li>IT Consulting</li>
            </ul>
        </div>
        <h1>IT <span className={styles.UnderlineText}>Consulting<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <div className = {styles.introText}>
            <p>Transform Your Business with Strategic IT Solutions</p>
            <p>Digital innovations are driving business transformation, optimizing operations, enhancing data integration, and delivering actionable</p>   
            <p>insights. Sabrasta empowers organizations to tackle challenges in cybersecurity, cloud migration, automation, and IT infrastructure,</p>
            <p>fostering growth and resilience in an ever-evolving tech landscape.</p><img src={bubbles} className={styles.bubbly}></img>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.BestText}>
            <p>Get the best <span>IT Consulation</span> service for your business.</p>
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
