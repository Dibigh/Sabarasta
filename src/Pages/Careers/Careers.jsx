import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import redLine from '../../Logo/redLine.svg';
import styles from './Careers.module.css';

function Products() {
  return (
    <>
       <div className={styles.bodyContainer}>
      {/* <span id = {styles.starDoodle}>
        <img src={star} alt = 'starDoodle'/>
      </span> */}
        <h1>Join Our Team, Where Innovation</h1>
          <h1>Meets <span className={styles.UnderlineText}>Opportunity.<img className={styles.underLine} src={redLine} alt='GreenLine'/></span></h1>
        <p>Explore exciting career opportunities with us and be part of a dynamic team driving innovation</p>
        <p>and excellence in every endeavor.</p>
        <div className = {styles.Container}></div>
         <div id={styles.GridDiv1}>Coming Soon</div>
        </div>
    </>
  )
}

export default Products
