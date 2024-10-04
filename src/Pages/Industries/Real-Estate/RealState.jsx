import React from 'react'
import { useNavigate } from 'react-router-dom';
import greenLine from '../../../Logo/greenline.svg';
import styles from './RealState.module.css';
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
                <li>Real Estate</li>
            </ul>
        </div>
        <h1>Real <span className={styles.UnderlineText}>Estate<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <div className = {styles.introText}>
            <p>Transform Real Estate with Innovative Technology Solutions</p>
            <p>Digital innovations are revolutionizing the real estate sector, enhancing property management, market analysis, and customer</p>   
            <p>engagement. Sabrasta equips real estate professionals to navigate emerging challenges in data integration, marketing automation, and</p>
            <p>operational efficiency, fostering resilience and unlocking new opportunities in the dynamic property landscape.</p><img src={bubbles} className={styles.bubbly}></img>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className = {styles.inlineContain}>
        <div id={styles.orangeContainer}><h2>Market</h2><h2>Intelligence</h2><br></br><br></br><p>Unlock the power of data to make informed decisions. Our real-time market insights and analytics help you identify trends, assess property values, and predict future market movements for strategic growth.</p></div>
        <div id={styles.greenContainer}><h2>Client-Centric</h2><h2>Solutions</h2><br></br><br></br><p>Build lasting relationships through personalized property experiences. From smart property management systems to seamless virtual tours, we ensure that your clients receive unmatched service and engagement.</p></div> 
        <div id={styles.blueContainer}><h2>Technology-</h2><h2>Driving Efficiency</h2><br></br><br></br><p>Streamline operations with cutting-edge technology. Our solutions enhance transaction processes, optimize property listings, and automate administrative tasks, boosting efficiency and driving profitability across your real estate ventures.</p></div></div>
         <div id={styles.separatingline}></div>
         <div className ={styles.centerTextDiv}>
            <p>At Sabrasta, we are committed to revolutionizing the real estate industry through innovative technology and comprehensive solutions. By focusing on data-driven insights, property management, and client engagement, we empower real estate professionals to navigate the complexities of the market effectively.</p>
            <p>Our team comprises dedicated experts—from property analysts and software developers to marketing strategists—who are passionate about leveraging technology to enhance real estate operations. We believe in fostering collaborative partnerships with our clients, ensuring that our solutions evolve with industry trends and deliver practical strategies that drive growth, improve efficiency, and maximize returns in the dynamic real estate landscape.</p>
         </div>
    </div>
    </>
  )
}
