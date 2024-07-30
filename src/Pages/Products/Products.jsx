import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/greenline.svg';
import styles from './Products.module.css';

function Products() {
  return (
    <>
       <div className={styles.bodyContainer}>
      <span id = {styles.starDoodle}>
        <img src={star} alt = 'starDoodle'/>
      </span>
        <h1>Discover Our Products:</h1>
          <h1>Solutions for <span className={styles.UnderlineText}>Every Need.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Explore our range of innovative products designed to empower your success. </p>
        <div className = {styles.Container}></div>
         <div id={styles.GridDiv1}>Coming Soon</div>
        </div>
    </>
  )
}

export default Products