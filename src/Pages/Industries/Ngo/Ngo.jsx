import React from 'react'
import { useNavigate } from 'react-router-dom';
import greenLine from '../../../Logo/greenline.svg';
import styles from './Ngo.module.css';
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
                <li>NGOs</li>
            </ul>
        </div>
        <h1><span className={styles.UnderlineText}>NGOs<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <div className = {styles.introText}>
            <p>Empower Change with Innovative Solutions for NGOs</p>
            <p>Digital advancements are reshaping the nonprofit sector, enhancing outreach, donor engagement, and operational effectiveness.</p>   
            <p>Sabrasta equips NGOs to address emerging challenges in data management, fundraising strategies, and program evaluation, fostering</p>
            <p>resilience and unlocking new avenues for impact in the ever-changing landscape of social change.</p><img src={bubbles} className={styles.bubbly}></img>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className = {styles.inlineContain}>
        <div id={styles.orangeContainer}><h2>Impact-Driven</h2><h2>Strategies</h2><br></br><br></br><p>Maximize the impact of your mission with strategic planning and execution. We help NGOs develop actionable frameworks that align with their core goals, ensuring that every initiative drives measurable change and amplifies their cause.</p></div>
        <div id={styles.greenContainer}><h2>Engagement &</h2><h2>Collaboration</h2><br></br><br></br><p>Strengthen relationships with donors, volunteers, and beneficiaries. Our approach fosters deeper connections and active participation through transparent communication, community outreach, and effective partnership-building strategies.</p></div> 
        <div id={styles.blueContainer}><h2>Sustainabile</h2><h2>Growth</h2><br></br><br></br><p>Ensure long-term success with tailored growth strategies and diversified funding sources. We support NGOs in building sustainable operations, from grant management to fundraising campaigns, that enable continuous progress toward their mission.</p></div></div>
         <div id={styles.separatingline}></div>
         <div className ={styles.centerTextDiv}>
            <p>At Sabrasta, we are committed to empowering NGOs with innovative technology solutions that enhance their impact. Our focus on data management, fundraising strategies, and community engagement ensures that nonprofits can effectively serve their missions while maximizing resources.</p>
            <p>Our team of dedicated professionals—ranging from social impact specialists to technology experts—works collaboratively with NGOs to develop customized solutions that meet their unique challenges. We believe in building lasting partnerships that adapt to the evolving landscape of social change, driving sustainable impact and community empowerment.</p>
         </div>
    </div>
    </>
  )
}
