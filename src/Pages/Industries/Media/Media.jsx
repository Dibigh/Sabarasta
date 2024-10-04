import React from 'react'
import { useNavigate } from 'react-router-dom';
import greenLine from '../../../Logo/redLine.svg';
import styles from './Media.module.css';
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
                <li>Media</li>
            </ul>
        </div>
        <h1><span className={styles.UnderlineText}>Media<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <div className = {styles.introText}>
            <p>Elevate Storytelling with Innovative Media Solutions</p>
            <p>Digital transformation is reshaping the media landscape, enhancing content delivery, audience engagement, and analytics. Sabrasta </p>   
            <p>enables media organizations to navigate challenges in digital distribution, social media management, and content monetization, driving</p>
            <p>Crativity and unlocking new opportunities in the rapidly evolving media sphere.</p><img src={bubbles} className={styles.bubbly}></img>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className = {styles.inlineContain}>
        <div id={styles.orangeContainer}><h2>Content Creation</h2><h2>& Storytelling</h2><br></br><br></br><p>Craft compelling narratives that not only captivate but also build lasting relationships with your audience. We help brands design and execute content strategies that convey powerful messages across different media formats, driving engagement and reinforcing brand identity.</p></div>
        <div id={styles.greenContainer}><h2>Audience</h2><h2>Investment</h2><br></br><br></br><p>Leverage data-driven insights to create deeper, more meaningful connections with your audience. We analyze user behavior, optimize content in real-time, and provide detailed analytics, ensuring your campaigns resonate with the right demographics and drive measurable growth.</p></div> 
        <div id={styles.blueContainer}><h2>Multi-Platform</h2><h2>Distribution</h2><br></br><br></br><p>Expand your reach by delivering content seamlessly across multiple channels. We ensure your media is optimized for every platform—social, digital, or broadcast—guaranteeing maximum visibility, engagement, and brand recognition across diverse audience segments.</p></div></div>
         <div id={styles.separatingline}></div>
         <div className ={styles.centerTextDiv}>
            <p>At Sabrasta, we are committed to redefining the media industry through innovative technologies and engaging content strategies. By focusing on analytics, audience engagement, and digital distribution, we empower media organizations to maximize their impact and reach.</p>
            <p>Our diverse team, including creative directors, content strategists, and data analysts, is passionate about crafting compelling narratives that resonate with audiences. We believe in collaborative partnerships that adapt to industry trends, delivering effective media solutions that enhance storytelling and audience connection across multiple platforms.</p>
         </div>
    </div>
    </>
  )
}
