import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../Logo/star.svg';
import greenLine from '../../Logo/blueLine.svg';
import styles from './Products.module.css';
import bubbles from '../../Logo/Bubbles.svg'

function Products() {
  return (
    <>
       <div className={styles.bodyContainer}>
        <h1>Discover Our Products:</h1>
          <h1>Solutions for <span className={styles.UnderlineText}>Every Need.<img className={styles.underLine} src={greenLine} alt='GreenLine'/></span></h1>
        <p>Explore our range of innovative products designed to empower your success. </p><img src={bubbles} className={styles.bubbly}></img>
        <div className = {styles.Container}>
         <div id={styles.GridDiv1}>Coming Soon</div>
        </div>
        </div>
    </>
  )
}

export default Products