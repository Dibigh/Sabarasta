import React from 'react'
import { useNavigate } from 'react-router-dom';
import greenLine from '../../../Logo/yellowLine.svg';
import styles from './Ecom.module.css';
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
                <li>eCommerce</li>
            </ul>
        </div>
        <h1><span className={styles.UnderlineText}>eCommerce<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <div className = {styles.introText}>
            <p>Revolutionize Retail with Next-Gen E-Commerce Solutions</p>
            <p>Digital innovations are transforming the e-commerce industry, enhancing customer experience, personalization, and operational</p>   
            <p>efficiency. Sabrasta empowers e-commerce businesses to tackle emerging challenges in online sales, inventory management, and digital</p>
            <p>marketing, driving growth and unlocking new opportunities in the competitive online marketplace.</p><img src={bubbles} className={styles.bubbly}></img>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className = {styles.inlineContain}>
        <div id={styles.orangeContainer}><h2>Seamless User</h2><h2>Experience</h2><br></br><br></br><p>Elevate customer satisfaction with intuitive, user-friendly platforms. We design e-commerce solutions that prioritize effortless navigation, fast load times, and secure transactions, ensuring a smooth and enjoyable shopping experience from start to finish.</p></div>
        <div id={styles.greenContainer}><h2>Data-Driven</h2><h2>Personalization</h2><br></br><br></br><p>Boost sales by delivering personalized shopping experiences. Through advanced analytics and customer behavior tracking, we create tailored recommendations, targeted offers, and dynamic content that resonate with individual users, increasing conversion rates and customer loyalty.</p></div> 
        <div id={styles.blueContainer}><h2>Scalable</h2><h2>Integration</h2><br></br><br></br><p> Empower your e-commerce business to grow with robust, scalable solutions. We provide seamless integration of payment gateways, inventory management, and third-party services, allowing your platform to expand efficiently while maintaining top-tier performance and security.</p></div></div>
         <div id={styles.separatingline}></div>
         <div className ={styles.centerTextDiv}>
            <p>At Sabrasta, we are dedicated to revolutionizing the e-commerce industry with cutting-edge technology and tailored solutions. Our focus on enhancing customer experience, optimizing supply chain management, and ensuring secure transactions positions your business for success in a competitive market.</p>
            <p>Our team of e-commerce experts, data analysts, and UX designers brings a wealth of experience to create seamless online shopping experiences. We prioritize collaborative partnerships with our clients, ensuring that our solutions evolve with market trends to deliver effective strategies that drive sales and customer loyalty.</p>         
        </div>
    </div>
    </>
  )
}
